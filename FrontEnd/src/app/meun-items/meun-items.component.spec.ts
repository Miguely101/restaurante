import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeunItemsComponent } from './meun-items.component';

describe('MeunItemsComponent', () => {
  let component: MeunItemsComponent;
  let fixture: ComponentFixture<MeunItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeunItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeunItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
