import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddWidget, GetStoredWidgets, GetWidgets, RemoveWidget, ReorderWidgets, SaveDashboardState } from './dashboard.action';
import { IDashboardWidget } from '../../../core/models/dashboard.model';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { DashboardService } from '../../../core/services/dashboard.service';
import { tap } from 'rxjs';
import { Injectable } from '@angular/core';

export interface DashboardStateModel {
  originalWidgets: IDashboardWidget[];  // List of available widgets
  widgets: IDashboardWidget[]; // User-arranged widgets
}

@State<DashboardStateModel>({
  name: 'dashboard',
  defaults: {
    originalWidgets: [],
    widgets: []
  }
})
@Injectable()
export class DashboardState {
  constructor(private _dashboardService: DashboardService) { }

  @Selector()
  static getOriginalWidgets(state: DashboardStateModel) {
    return state.originalWidgets;
  }

  @Selector()
  static getDashboardWidgets(state: DashboardStateModel) {
    return state.widgets;
  }

  @Action(GetWidgets)
  getWidgets(ctx: StateContext<DashboardStateModel>) {
    return this._dashboardService.getWidgets().pipe(
      tap((widgets) => {
        ctx.patchState({ originalWidgets: widgets });
      })
    );
  }

  @Action(GetStoredWidgets)
  getStoredWidgets(ctx: StateContext<DashboardStateModel>) {
    const storedWidgets = JSON.parse(localStorage.getItem('dashboardWidgets') || '[]');
    ctx.patchState({ widgets: storedWidgets });
  }

  @Action(AddWidget)
  addWidget(ctx: StateContext<DashboardStateModel>, action: AddWidget) {
    const state = ctx.getState();
    ctx.setState({ ...state, widgets: [...state.widgets, action.widget] });
    ctx.dispatch(new SaveDashboardState());
  }

  @Action(RemoveWidget)
  removeWidget(ctx: StateContext<DashboardStateModel>, action: RemoveWidget) {
    const state = ctx.getState();
    ctx.setState({ ...state, widgets: state.widgets.filter(w => w.id !== action.widgetId) });
    ctx.dispatch(new SaveDashboardState());
  }

  @Action(ReorderWidgets)
  reorderWidgets(ctx: StateContext<DashboardStateModel>, action: ReorderWidgets) {
    const state = ctx.getState();
    const widgets = [...state.widgets];
    moveItemInArray(widgets, action.previousIndex, action.currentIndex);
    ctx.setState({
      ...state,
      widgets
    });
    ctx.dispatch(new SaveDashboardState());
  }

  @Action(SaveDashboardState)
  saveState(ctx: StateContext<DashboardStateModel>) {
    const state = ctx.getState();
    localStorage.setItem('dashboardWidgets', JSON.stringify(state.widgets));
  }
}
