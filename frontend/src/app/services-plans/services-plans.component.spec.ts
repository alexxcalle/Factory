import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPlansComponent } from './services-plans.component';

describe('ServicesPlansComponent', () => {
  let component: ServicesPlansComponent;
  let fixture: ComponentFixture<ServicesPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesPlansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
