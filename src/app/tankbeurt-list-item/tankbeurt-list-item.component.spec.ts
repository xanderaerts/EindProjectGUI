import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankbeurtListItemComponent } from './tankbeurt-list-item.component';

describe('TankbeurtListItemComponent', () => {
  let component: TankbeurtListItemComponent;
  let fixture: ComponentFixture<TankbeurtListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TankbeurtListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TankbeurtListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
