import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { CdkDropList, CdkDrag, CdkDragDrop } from '@angular/cdk/drag-drop';
import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';

import { AddWidget, GetStoredWidgets, GetWidgets, RemoveWidget, ReorderWidgets, SaveDashboardState } from './state/dashboard.action';
import { DashboardState } from './state/dashboard.state';
import { IDashboardWidget } from '../../core/models/dashboard.model';
import { WidgetComponent } from './components/widget/widget.component';
import { ToastrService } from '../../core/services/toastr.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, CdkDropList, CdkDrag, CdkVirtualScrollViewport, ScrollingModule, WidgetComponent],
  standalone: true,
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {
  originalWidgets: IDashboardWidget[] = [];
  widgets: IDashboardWidget[] = [];
  subscription = new Subscription()

  constructor(private _store: Store, private _toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.getOriginalWidgets();
    this.getWidgets();
  }

  getOriginalWidgets() {
    this.subscription.add(this._store.select(DashboardState.getOriginalWidgets)
      .subscribe((widgets) => {
        this.originalWidgets = [...widgets];
        this.filterAvailableWidgets();
      }));
    this._store.dispatch(new GetWidgets());
  }

  getWidgets() {
    this.subscription.add(this._store.select(DashboardState.getDashboardWidgets)
      .subscribe((widgets) => {
        this.widgets = [...widgets];
        this.filterAvailableWidgets();
      }));
    this._store.dispatch(new GetStoredWidgets());
  }

  filterAvailableWidgets() {
    if (this.originalWidgets?.length > 0 && this.widgets?.length > 0) {
      this.originalWidgets = this.originalWidgets.filter(
        widget => !this.widgets.some(selected => selected.id === widget.id)
      );
    }
  }

  addWidget(widget: IDashboardWidget) {
    this.originalWidgets = this.originalWidgets.filter(i => i.id != widget.id);
    this._store.dispatch(new AddWidget(widget));
  }

  onRemoveWidget(widget: IDashboardWidget) {
    this._toastrService.confirm(this.removeWidget.bind(this, widget));
  }

  removeWidget(widget: IDashboardWidget) {
    this._store.dispatch(new RemoveWidget(widget.id));
    widget && (this.originalWidgets = [...this.originalWidgets, widget]);
  }

  drop(event: CdkDragDrop<IDashboardWidget[]>) {
    this._store.dispatch(new ReorderWidgets(event.previousIndex, event.currentIndex));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
