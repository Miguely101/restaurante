import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApagarConfirmarComponent } from './apagar-confirmar.component';

describe('ApagarConfirmarComponent', () => {
  let component: ApagarConfirmarComponent;
  let fixture: ComponentFixture<ApagarConfirmarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApagarConfirmarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApagarConfirmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
