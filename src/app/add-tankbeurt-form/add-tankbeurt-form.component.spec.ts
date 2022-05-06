import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTankbeurtFormComponent } from './add-tankbeurt-form.component';

describe('AddTankbeurtFormComponent', () => {
  let component: AddTankbeurtFormComponent;
  let fixture: ComponentFixture<AddTankbeurtFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTankbeurtFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTankbeurtFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
