import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankbeurtListPageComponent } from './tankbeurt-list-page.component';

describe('TankbeurtListPageComponent', () => {
  let component: TankbeurtListPageComponent;
  let fixture: ComponentFixture<TankbeurtListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TankbeurtListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TankbeurtListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
