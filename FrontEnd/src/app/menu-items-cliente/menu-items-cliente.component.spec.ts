import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemsClienteComponent } from './menu-items-cliente.component';

describe('MenuItemsClienteComponent', () => {
  let component: MenuItemsClienteComponent;
  let fixture: ComponentFixture<MenuItemsClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemsClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItemsClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
