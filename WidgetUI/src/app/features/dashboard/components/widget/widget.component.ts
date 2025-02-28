import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IDashboardWidget } from '../../../../core/models/dashboard.model';
import { HistogramWidgetComponent } from "../../../../shared/components/widgets/histogram-widget/histogram-widget.component";
import { BarChartWidgetComponent } from '../../../../shared/components/widgets/bar-chart-widget/bar-chart-widget.component';
import { LineGraphWidgetComponent } from "../../../../shared/components/widgets/line-graph-widget/line-graph-widget.component";
import { PieChartWidgetComponent } from "../../../../shared/components/widgets/pie-chart-widget/pie-chart-widget.component";
import { TableWidgetComponent } from "../../../../shared/components/widgets/table-widget/table-widget.component";

@Component({
  selector: 'app-widget',
  imports: [
    CommonModule,
    BarChartWidgetComponent,
    HistogramWidgetComponent,
    LineGraphWidgetComponent,
    PieChartWidgetComponent,
    TableWidgetComponent
  ],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss'
})
export class WidgetComponent implements OnInit {
  @Input() widget!: IDashboardWidget;
  chartView: [number, number] = [400, 300]; // Default size

  constructor() { }

  ngOnInit(): void {
    this.updateChartSize(); // Set initial size
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateChartSize();
  }

  updateChartSize() {
    const width = window.innerWidth;
    if (width > 1200) {
      this.chartView = [600, 400]; // Large screens
    } else if (width > 992) {
      this.chartView = [450, 300]; // Medium screens
    } else if (width > 768) {
      this.chartView = [300, 200]; // Tablets
    } else {
      this.chartView = [300, 250]; // Mobile
    }
  }
}
