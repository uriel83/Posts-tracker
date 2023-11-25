import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptorInterceptor implements HttpInterceptor {

  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  const headers = new HttpHeaders({
      'Content-type': 'application/json; charset=UTF-8'
    });
	const modifiedReq = req.clone({ headers });

	return next.handle(modifiedReq);
  }
}
