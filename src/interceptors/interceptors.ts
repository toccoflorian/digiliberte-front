import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export const JwtInterceptor = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
    const token = JSON.parse(localStorage.getItem('authToken') ? localStorage.getItem('authToken')! : 'null');
    if(token){
      req = req.clone({
        setHeaders: {
          Authorization: `${token.tokenType} ${token.accessToken}`
        }
      })
    }
    return next(req);
  }
  