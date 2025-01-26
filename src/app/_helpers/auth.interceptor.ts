import { HttpInterceptorFn } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const clonedRequest = req.clone({ withCredentials: true }); // Attach cookies
  return next(clonedRequest);
};
