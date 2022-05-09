import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankBeurtListComponent } from './tank-beurt-list.component';

describe('TankBeurtListComponent', () => {
  let component: TankBeurtListComponent;
  let fixture: ComponentFixture<TankBeurtListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TankBeurtListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TankBeurtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
