import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const guardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isTokenValid(localStorage.getItem('token')!)) {
    return true;
  } else {
    router.navigate(['login'])
    return false;
  }
};
