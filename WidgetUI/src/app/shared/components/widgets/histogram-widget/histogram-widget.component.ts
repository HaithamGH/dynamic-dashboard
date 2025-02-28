import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { IChartDto, IWidgetDto } from '../../../../core/models/widget.model';

@Component({
  selector: 'histogram-widget',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './histogram-widget.component.html',
  styleUrl: './histogram-widget.component.scss'
})
export class HistogramWidgetComponent implements OnInit {
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
      name: `Bin ${index + 1}`,
      value,
    }));
  }
}
