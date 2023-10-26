import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authService = inject(AuthService);

    let jwtRequest = request.clone({
       setHeaders: {  Authorization: 'bearer ' + authService.getToken() }
    })

    return next.handle(jwtRequest);
  }
}
