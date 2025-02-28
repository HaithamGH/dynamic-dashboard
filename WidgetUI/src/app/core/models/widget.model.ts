export interface IWidgetDto {
    name: string,
    value: number,
    description?: string,
    status?: string,
}

export interface IChartDto {
    name: string,
    value?: IWidgetDto,
    series?: IChartSeriesDto[]
}

export interface IChartSeriesDto {
    name: number,
    value: IWidgetDto
}
