import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PratoAdminComponent } from './prato-admin.component';

describe('PratoAdminComponent', () => {
  let component: PratoAdminComponent;
  let fixture: ComponentFixture<PratoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PratoAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PratoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
