import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SignupComponent } from './signup.component';
import {Router} from '@angular/router'
import { AuthService } from '../auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { async } from '@firebase/util';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;


  class MockRouter{};
  class AuthClass{};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [ReactiveFormsModule],
      providers:[
        {provide : AuthService, useValue:AuthClass},
        {provide : Router, useValue:MockRouter}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  var Goodpasswords : string[] = ['test1','admin1','passwoord']

  it(`Should match the passwords and be valid`,() => {
    for(const pswd of Goodpasswords){
      component.signupForm.get('password')?.setValue(pswd);
      component.signupForm.get('passwordConfirm')?.setValue(pswd);

      expect(component.signupForm.hasError('passwordMisMatch')).toBeFalsy();

    }
  })

  it(`should check the length of the passwords`, () => {
    for(const pswd of Goodpasswords){
      component.signupForm.get('password')?.setValue(pswd);
      component.signupForm.get('passwordConfirm')?.setValue(pswd);

      expect(component.signupForm.get('password')?.hasError('required')).toBeFalsy();
      expect(component.signupForm.get('passwordConfirm')?.hasError('required')).toBeFalsy();
      expect(component.signupForm.get('password')?.hasError('minLenght')).toBeFalsy();
      expect(component.signupForm.get('passwordConfirm')?.hasError('minLenght')).toBeFalsy();
    }
  })
  
    it(`Should not be valid, when title is "Registreren"`,()=> {
      const title = "Registreren";
  
      fixture.detectChanges();
      const h1 = fixture.debugElement.query(By.css('h1')).nativeElement;
  
      expect(h1.innerHTML).toBe(title);
      
    })
  

  it(`invalid email should be invalid email form`, fakeAsync(async () => {
    const email = "test|.be"
    
    fixture.detectChanges();
    component.signupForm.get('email')?.setValue(email);
    component.signupForm.get('email')?.updateValueAndValidity();
    flush();

    await fixture.whenStable().then(() => {
      expect(component.signupForm.get('email')?.valid).toBeFalsy();
    })
  }))


  it(`Should not match passwords`, () => {
    component.signupForm.get('password')?.setValue('DitisFout');
    component.signupForm.get('passwordConfirm')?.setValue('isditfout');

    expect(component.signupForm.get('passwordConfirm')?.hasError('passwordMisMatch')).toBeTruthy();
    
  })

});
