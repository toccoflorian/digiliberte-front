import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationService } from "../services/authentication/authentication.service";

export const JwtInterceptor = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
    const token = inject(AuthenticationService).tokenValue;
    if(token){
      req = req.clone({
        setHeaders: {
          Authorization: `${token.tokenType} ${token.accessToken}`
        }
      })
    }
    return next(req);
  }
  