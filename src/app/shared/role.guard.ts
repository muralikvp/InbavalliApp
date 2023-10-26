import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if(authService.HaveAccess()){
    return true;
  }
  else {
    router.navigate(['']);
    return false;
  }
};
