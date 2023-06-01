import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncomendasAdminComponent } from './encomendas-admin.component';

describe('EncomendasAdminComponent', () => {
  let component: EncomendasAdminComponent;
  let fixture: ComponentFixture<EncomendasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncomendasAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncomendasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
