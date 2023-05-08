import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaEditarComponent } from './reserva-editar.component';

describe('ReservaEditarComponent', () => {
  let component: ReservaEditarComponent;
  let fixture: ComponentFixture<ReservaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
