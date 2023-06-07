import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoarComponent } from './doar.component';

describe('DoarComponent', () => {
  let component: DoarComponent;
  let fixture: ComponentFixture<DoarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
