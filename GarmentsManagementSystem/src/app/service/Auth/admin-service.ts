import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoleAdmin } from '../../../model/Auth/admin.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AdminService {



  
  private baseUrl = environment.apiBaseUrl + '/admin';

  
    constructor(
      private http: HttpClient,
      @Inject(PLATFORM_ID) private platformId: Object
    ) { }





    
  registerAdmin(user: any, admin: any, photo: File): Observable<any> {
    const formData = new FormData();
    formData.append('user', JSON.stringify(user));
    formData.append('admin', JSON.stringify(admin));
    formData.append('photo', photo);

    return this.http.post(this.baseUrl+"/reg", formData);
  }

  getProfile(): Observable<RoleAdmin> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
        console.log(headers);
      }
    }

    return this.http.get<RoleAdmin>(`${environment.apiBaseUrl}/admin/profile`, { headers });
  }
}
