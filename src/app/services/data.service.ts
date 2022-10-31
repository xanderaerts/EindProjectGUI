import { Injectable } from '@angular/core';
import { collectionData, deleteDoc, Firestore, updateDoc,docData,collection, CollectionReference,addDoc, DocumentReference,doc} from '@angular/fire/firestore';
import { TankBeurt } from '../models/tankbeurt.model';
import { Admin } from '../models/admin.model';
import { catchError, from, throwError } from 'rxjs';
import { query,where } from '@firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db: Firestore) { }

  getList(){
     return collectionData<TankBeurt>(
      collection(this.db,'tankbeurten') as CollectionReference<TankBeurt>,
      {idField : 'id'})

      .pipe(catchError(
      (err) => {
        console.log('error msg: ', err);
        return throwError(() => new Error('It went wrong'))
      }
    ));
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
    const tbRef = doc(this.db,'tankbeurten/'+tankbeurt.id) as DocumentReference<TankBeurt>;
    return from(updateDoc(tbRef,tankbeurt));
  }

  getTankbeurt(id:string){
    return docData<TankBeurt>(
      doc(this.db,'/tankbeurten/'+id) as DocumentReference<TankBeurt>);
  }

  getAdmin(uid : string | null){
   return docData<Admin>(
      doc(this.db,'/administrators/' + uid) as DocumentReference<Admin>)
  }
}
