import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDougnutComponent } from './chart-dougnut.component';

describe('ChartDougnutComponent', () => {
  let component: ChartDougnutComponent;
  let fixture: ComponentFixture<ChartDougnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartDougnutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartDougnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
