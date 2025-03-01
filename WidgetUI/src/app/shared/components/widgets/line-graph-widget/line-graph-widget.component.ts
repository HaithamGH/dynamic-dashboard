import { Component, Input, OnInit, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { IChartDto, IWidgetDto } from '../../../../core/models/widget.model';

@Component({
  selector: 'line-graph-widget',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './line-graph-widget.component.html',
  styleUrl: './line-graph-widget.component.scss'
})
export class LineGraphWidgetComponent implements OnInit {
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
    return [
      {
        name: 'Trend',
        series: data.map((value, index) => ({ name: index, value }))
      }
    ];
  }

}
