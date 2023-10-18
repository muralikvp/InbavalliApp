import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if(authService.IsLoggedIn()){
    return true;
  }
  else
  {
    router.navigate(['login']);
    return false;
  }
};

