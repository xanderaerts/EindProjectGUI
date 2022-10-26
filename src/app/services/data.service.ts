import { Injectable } from '@angular/core';
import { collectionData, deleteDoc, Firestore, updateDoc,docData,collection, CollectionReference,addDoc, DocumentReference,doc} from '@angular/fire/firestore';
import { TankBeurt } from '../tankbeurt.model';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db: Firestore) { }


  getList(){
     return collectionData<TankBeurt>(
      collection(this.db,'tankbeurten') as CollectionReference<TankBeurt>,
      {idField : 'id'}
    );
  }

  addTankbeurt(tb : TankBeurt){
    const TankBeurtCollection = collection(this.db, 'tankbeurten');
    return from(addDoc(TankBeurtCollection,tb));
  }

  deleteTankbeurt(id : string){
    const tankbeurtRef = doc(this.db,'tankbeurten/'+id) as DocumentReference<TankBeurt>
    return from(deleteDoc(tankbeurtRef));
  }

  updateTankbeurt(tankbeurt:TankBeurt){
    console.log("fbidk ", tankbeurt.id);
    const tbRef = doc(this.db,'tankbeurten/'+tankbeurt.id) as DocumentReference<TankBeurt>;
    return from(updateDoc(tbRef,tankbeurt));
  }

  getTankbeurt(id:string){
    let test = docData<TankBeurt>(
      doc(this.db,'/tankbeurten/'+id) as DocumentReference<TankBeurt>);
    console.log(test);
    return test
  }
  
}
