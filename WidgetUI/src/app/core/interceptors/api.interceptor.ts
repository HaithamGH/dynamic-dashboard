import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpStatusCode
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from '../services/toastr.service';


@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private _toastrService: ToastrService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if ((error instanceof HttpErrorResponse)) {
          switch (error.status) {
            case HttpStatusCode.BadRequest:
              this._toastrService.showError("Sorry, an error occurred. Please try again later.");
              break;
            case HttpStatusCode.Forbidden:
              this._toastrService.showError("You're not allowed to perform the requested operation, Access is denied.");
              break;
            case HttpStatusCode.Unauthorized:
              this._toastrService.showError("Sorry. Access is not authorized.");
              break;
            case HttpStatusCode.NotFound:
              this._toastrService.showError("Sorry. Page not found");
              break;
            case HttpStatusCode.ServiceUnavailable:
              this._toastrService.showError("There is no internet connection, please check and try again");
              break;
            case HttpStatusCode.RequestTimeout:
              this._toastrService.showError('Something Went Wrong, Please Try Again');
              break;
            default:
              this._toastrService.showError('Something went wrong');
              break;
          }
        }
        return throwError(() => error);
      })
    );
  }
}