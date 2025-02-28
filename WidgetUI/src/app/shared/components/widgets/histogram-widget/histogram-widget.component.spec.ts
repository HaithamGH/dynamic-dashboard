import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistogramWidgetComponent } from './histogram-widget.component';

describe('HistogramWidgetComponent', () => {
  let component: HistogramWidgetComponent;
  let fixture: ComponentFixture<HistogramWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistogramWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistogramWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
