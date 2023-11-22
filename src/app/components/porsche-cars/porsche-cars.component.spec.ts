import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorscheCarsComponent } from './porsche-cars.component';

describe('PorscheCarsComponent', () => {
  let component: PorscheCarsComponent;
  let fixture: ComponentFixture<PorscheCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorscheCarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PorscheCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
