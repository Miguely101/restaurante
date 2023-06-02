import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaMesasComponent } from './reserva-mesas.component';

describe('ReservaMesasComponent', () => {
  let component: ReservaMesasComponent;
  let fixture: ComponentFixture<ReservaMesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaMesasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
