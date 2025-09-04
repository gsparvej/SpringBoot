import { Inject, Injectable, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../service/Auth/auth-service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate{

constructor(
    private authService: AuthService,
    private router: Router, 

    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> {
    if (this.authService.isAuthenticated() && this.authService.isAdmin()) {
      return true;
    }
    // Redirect to login page or unauthorized page
    return this.router.createUrlTree(['/login']);
  }


 
}
