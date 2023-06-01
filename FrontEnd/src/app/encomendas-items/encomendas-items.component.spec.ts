import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncomendasItemsComponent } from './encomendas-items.component';

describe('EncomendasItemsComponent', () => {
  let component: EncomendasItemsComponent;
  let fixture: ComponentFixture<EncomendasItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncomendasItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncomendasItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
