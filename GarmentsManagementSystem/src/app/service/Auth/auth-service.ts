import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { User } from '../../../model/Auth/user.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { AuthResponse } from '../../../model/Auth/authResponse';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.apiBaseUrl + '/auth';


  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  private userRoleSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  public userRole$: Observable<string | null> = this.userRoleSubject.asObservable();



private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();


  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {

    // const storedUser = this.isBrowser() ? JSON.parse(localStorage.getItem('currentUser') || 'null') : null;
    // this.currentUserSubject = new BehaviorSubject<User | null>(storedUser);
    // this.currentUser$ = this.currentUserSubject.asObservable();

  }


  registration(user: User): Observable<AuthResponse> {
    return this.http.post<User>(this.baseUrl, user).pipe(
      map((newUser: User) => {

        // create token by username and password 
        const token = btoa(`${newUser.email}${newUser.password}`);
        return { token, user: newUser } as AuthResponse;
      }),
      catchError(error => {
        console.error('Registration error:', error);
        throw error;
      })
    );
  }



  login(email: string, password: string): Observable<AuthResponse> {

    return this.http.post<AuthResponse>(this.baseUrl + '/login', { email, password }, { headers: this.headers }).pipe(

      map(
        (response: AuthResponse) => {
          if (this.isBrowser() && response.token) {
            localStorage.setItem('authToken', response.token);
            const decodeToken = this.decodeToken(response.token);
            localStorage.setItem('userRole', decodeToken.role);
            this.userRoleSubject.next(decodeToken.role);
          }
          return response;

        }

      )
    );
  }


   isAuthenticated(): boolean {
    return !!this.getToken();
  }

  
  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }


  decodeToken(token: string) {

    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));

  }

  getToken(): string | null {

    if (this.isBrowser()) {
      return localStorage.getItem('authToken');
    }
    return null;

  }


  getUserRole(): string | null {

    if (this.isBrowser()) {
      return localStorage.getItem('userRole');
    }
    return null;

  }

  isTokenExpired(token: string): boolean {
    const docodeToken = this.decodeToken(token);

    const expiry = docodeToken.exp * 1000;
    return Date.now() > expiry;
  }

  isLoggIn(): boolean {
    const token = this.getToken();
    if (token && !this.isTokenExpired(token)) {
      return true;
    }
    this.logout();
    return false;

  }


  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('userRole');
      localStorage.removeItem('authToken');
      this.userRoleSubject.next(null);
    }
    this.router.navigate(['/login']);
  }


  hasRole(roles: string[]): boolean {

    const userRole = this.getUserRole();
    return userRole ? roles.includes(userRole) : false;

  }



  isSuperAdmin(): boolean {
    const role = this.getUserRole();
    return role === 'superadmin';
  }
  isAdmin(): boolean {
    return this.getUserRole() === 'ADMIN';
  }

  isUser(): boolean {
    const role = this.getUserRole();
    return role === 'user';
  }
  isPurchaseManager(): boolean {
    const role = this.getUserRole();
    return role === 'purchasemanager';
  }
  isPurchaseExecutive(): boolean {
    const role = this.getUserRole();
    return role === 'purchaseexecutive';
  }
  isMerchandiserManager(): boolean {
    const role = this.getUserRole();
    return role === 'merchandisermanager';
  }
  isMerchandiserJr(): boolean {
    const role = this.getUserRole();
    return role === 'merchandiserjunior';
  }

  isHRAdmin(): boolean {
    const role = this.getUserRole();
    return role === 'hradmin';
  }
  isHRExecutive(): boolean {
    const role = this.getUserRole();
    return role === 'hrexecutive';
  }







}
