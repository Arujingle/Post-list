import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable()
export class LoggerInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newreq = req.clone({
      setParams: {
        'x-status': `Firuza`,
      },
    });
    return next.handle(newreq);
  }
}
