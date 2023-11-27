import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercedesCarsComponent } from './mercedes-cars.component';

describe('MercedesCarsComponent', () => {
  let component: MercedesCarsComponent;
  let fixture: ComponentFixture<MercedesCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MercedesCarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MercedesCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
