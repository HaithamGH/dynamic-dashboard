import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IWidgetDto } from '../../../../core/models/widget.model';

@Component({
  selector: 'table-widget',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './table-widget.component.html',
  styleUrl: './table-widget.component.scss'
})
export class TableWidgetComponent implements OnInit {
  @Input() data!: IWidgetDto[];

  ngOnInit() {
  }
}
