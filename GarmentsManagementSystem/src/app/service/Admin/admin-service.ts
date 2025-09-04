import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../Auth/auth-service';
import { Observable, of } from 'rxjs';
import { AdminModel } from '../../../model/Auth/admin.model';
import { User } from '../../../model/Auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl: string = "http://localhost:3000/user";

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }


  getUserProfile(): Observable<User | null> {
    return of(this.authService.getUserProfileFromStorage());
  }


  updateUserProfile(user: User): Observable<AdminModel> {
    localStorage.setItem('userProfile', JSON.stringify(user));
    return this.http.put<User>(`${this.baseUrl}/${user.id}`, user);
  }
}
