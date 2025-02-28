import { IWidgetDto } from "./widget.model";

export interface IDashboardWidget {
    id: string,
    type: string,
    title: string,
    data: IWidgetDto[],
}
