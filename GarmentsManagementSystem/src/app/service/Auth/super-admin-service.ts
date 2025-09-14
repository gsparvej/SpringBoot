import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RoleSuperAdmin } from '../../../model/Auth/superAdmin.model';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {

  private baseUrl = environment.apiBaseUrl + '/super_admin';

  
    constructor(
      private http: HttpClient,
      @Inject(PLATFORM_ID) private platformId: Object
    ) { }





    
  registerSuperAdmin(user: any, superadmin: any, photo: File): Observable<any> {
    const formData = new FormData();
    formData.append('user', JSON.stringify(user));
    formData.append('superadmin', JSON.stringify(superadmin));
    formData.append('photo', photo);

    return this.http.post(this.baseUrl+"/reg", formData);
  }

  getProfile(): Observable<RoleSuperAdmin> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
        console.log(headers);
      }
    }

    return this.http.get<RoleSuperAdmin>(`${environment.apiBaseUrl}/super_admin/profile`, { headers });
  }
}
