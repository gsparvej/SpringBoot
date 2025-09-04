import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../Auth/auth-service';
import { Observable, of } from 'rxjs';
import { User } from '../../../model/Auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private baseUrl: string = "http://localhost:3000/user";

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }


  getUserProfile(): Observable<User | null> {
    return of(this.authService.getUserProfileFromStorage());
  }


 updateUserProfile(user: User): Observable<User> {
    localStorage.setItem('userProfile', JSON.stringify(user));
    return this.http.put<User>(`${this.baseUrl}/${user.id}`, user);
  }

  getAllUser(): Observable<any>{
      
          return this.http.get(this.baseUrl);
      
        }
     viewUserProfile(id: string): Observable<any> {
      return this.http.get(this.baseUrl+'/'+id);
    }
   getUserById(id: string): Observable<any> {
  
      return this.http.get(this.baseUrl+'/'+id);
    }
    updateUser(id: string, user: User): Observable<any> {
  
     return this.http.put(this.baseUrl+'/'+id,user);
    }
  
  
}
