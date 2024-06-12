import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export const JwtInterceptor = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
    const token = JSON.parse(localStorage.getItem('authToken') ? localStorage.getItem('authToken')! : 'null');
    if(token){
      if(req.url.includes('http://localhost:5212') || req.url.includes('https://localhost:7193')){
        req = req.clone({
          setHeaders: {
            Authorization: `${token.tokenType} ${token.accessToken}`
          }
        })
      }
    }
    return next(req);
  }
  