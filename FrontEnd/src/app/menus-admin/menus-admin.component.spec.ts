import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusAdminComponent } from './menus-admin.component';

describe('MenusAdminComponent', () => {
  let component: MenusAdminComponent;
  let fixture: ComponentFixture<MenusAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenusAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenusAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
