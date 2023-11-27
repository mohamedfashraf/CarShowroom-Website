import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmwCarsComponent } from './bmw-cars.component';

describe('BmwCarsComponent', () => {
  let component: BmwCarsComponent;
  let fixture: ComponentFixture<BmwCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmwCarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BmwCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
