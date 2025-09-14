import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoleHRAdmin } from '../../../model/Auth/hrAdmin.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HrAdminService {

  private baseUrl = environment.apiBaseUrl + '/hr_admin';

  
    constructor(
      private http: HttpClient,
      @Inject(PLATFORM_ID) private platformId: Object
    ) { }





    
  registerHRAdmin(user: any, hradmin: any, photo: File): Observable<any> {
    const formData = new FormData();
    formData.append('user', JSON.stringify(user));
    formData.append('hradmin', JSON.stringify(hradmin));
    formData.append('photo', photo);

    return this.http.post(this.baseUrl+"/reg", formData);
  }

  getProfile(): Observable<RoleHRAdmin> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
        console.log(headers);
      }
    }

    return this.http.get<RoleHRAdmin>(`${environment.apiBaseUrl}/hr_admin/profile`, { headers });
  }
}
