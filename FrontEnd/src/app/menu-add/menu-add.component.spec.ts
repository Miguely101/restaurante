import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAddComponent } from './menu-add.component';

describe('MenuAddComponent', () => {
  let component: MenuAddComponent;
  let fixture: ComponentFixture<MenuAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
