import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { IChartDto, IWidgetDto } from '../../../../core/models/widget.model';

@Component({
  selector: 'bar-chart-widget',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './bar-chart-widget.component.html',
  styleUrl: './bar-chart-widget.component.scss'
})
export class BarChartWidgetComponent implements OnInit {
  @Input() data!: IWidgetDto[];
  @Input() xAxisLabel: string = '';
  @Input() yAxisLabel: string = '';
  @Input() view: [number, number] = [400, 300]; // Default size
  chartData: IChartDto[] = [];

  constructor() { }

  ngOnInit() {
    this.chartData = this.getChartData(this.data);
  }

  getChartData(data: IWidgetDto[]) {
    return data.map((value, index) => ({
      name: `Item ${index + 1}`,
      value,
    }));
  }
}
