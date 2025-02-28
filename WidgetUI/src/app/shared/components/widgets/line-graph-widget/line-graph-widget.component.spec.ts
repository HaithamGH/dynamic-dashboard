import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineGraphWidgetComponent } from './line-graph-widget.component';

describe('LineGraphWidgetComponent', () => {
  let component: LineGraphWidgetComponent;
  let fixture: ComponentFixture<LineGraphWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineGraphWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineGraphWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
