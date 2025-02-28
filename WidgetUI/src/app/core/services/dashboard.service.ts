import { Injectable } from '@angular/core';
import { IDashboardWidget } from '../models/dashboard.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _httpClient: HttpClient){}

  getWidgets(): Observable<IDashboardWidget[]> {
    return this._httpClient.get<IDashboardWidget[]>(environment.apiUrl).pipe(
      map(widgets => widgets.map(widget => ({
        ...widget,
        data: typeof widget.data === 'string' ? JSON.parse(widget.data) : widget.data
      })))
    );
  }
}
