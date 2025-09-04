import { CanActivate, CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../service/Auth/auth-service';

export class AuthMerchandiserGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): boolean | UrlTree {
    if (this.authService.isAuthenticated() && (this.authService.isMerchandiserJr() || this.authService.isMerchandiserManager())) {
      return true;
    }
    return this.router.createUrlTree(['/login']);
  }
}
