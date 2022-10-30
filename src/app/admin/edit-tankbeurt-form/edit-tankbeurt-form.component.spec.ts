import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTankbeurtFormComponent } from './edit-tankbeurt-form.component';

describe('EditTankbeurtFormComponent', () => {
  let component: EditTankbeurtFormComponent;
  let fixture: ComponentFixture<EditTankbeurtFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTankbeurtFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTankbeurtFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
