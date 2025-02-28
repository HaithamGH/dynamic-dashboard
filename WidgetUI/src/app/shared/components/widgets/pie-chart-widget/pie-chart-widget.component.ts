import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { IChartDto, IWidgetDto } from '../../../../core/models/widget.model';

@Component({
  selector: 'pie-chart-widget',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './pie-chart-widget.component.html',
  styleUrl: './pie-chart-widget.component.scss'
})
export class PieChartWidgetComponent implements OnInit {
  @Input() data!: IWidgetDto[];
  @Input() showLabels: boolean = true;
  @Input() view: [number, number] = [700, 500]; // Default size

  chartData: IChartDto[] = [];

  constructor() { }

  ngOnInit() {
    this.chartData = this.getChartData(this.data);
  }

  getChartData(data: IWidgetDto[]) {
    return data.map((value, index) => ({
      name: `Segment ${index + 1}`,
      value,
    }));
  }
}
