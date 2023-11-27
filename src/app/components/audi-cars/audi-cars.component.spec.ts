import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiCarsComponent } from './audi-cars.component';

describe('AudiCarsComponent', () => {
  let component: AudiCarsComponent;
  let fixture: ComponentFixture<AudiCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudiCarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudiCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
