import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncomendaInfoComponent } from './encomenda-info.component';

describe('EncomendaInfoComponent', () => {
  let component: EncomendaInfoComponent;
  let fixture: ComponentFixture<EncomendaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncomendaInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncomendaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
