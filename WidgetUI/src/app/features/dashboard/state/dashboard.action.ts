import { IDashboardWidget } from "../../../core/models/dashboard.model";

export class GetWidgets {
    static readonly type = '[Dashboard] Get Widgets';
}

export class GetStoredWidgets {
    static readonly type = '[Dashboard] Get Stored Widgets';
}

export class AddWidget {
    static readonly type = '[Dashboard] Add Widget';
    constructor(public widget: IDashboardWidget) { }
}

export class RemoveWidget {
    static readonly type = '[Dashboard] Remove Widget';
    constructor(public widgetId: string) { }
}

export class ReorderWidgets {
    static readonly type = '[Dashboard] Reorder Widget';
    constructor(public previousIndex: number, public currentIndex: number) { }
}

export class SaveDashboardState {
    static readonly type = '[Dashboard] Save State';
}
