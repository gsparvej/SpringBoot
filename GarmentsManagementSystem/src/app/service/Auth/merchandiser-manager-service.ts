import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoleMerchandiserManager } from '../../../model/Auth/merchandiserManager.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MerchandiserManagerService {

 
   
   private baseUrl = environment.apiBaseUrl + '/merchan_manager';
 
   
     constructor(
       private http: HttpClient,
       @Inject(PLATFORM_ID) private platformId: Object
     ) { }
 
   registerMerchandiserManager(user: any, merchandiser: any, photo: File): Observable<any> {
     const formData = new FormData();
     formData.append('user', JSON.stringify(user));
     formData.append('merchandiser', JSON.stringify(merchandiser));
     formData.append('photo', photo);
 
     return this.http.post(this.baseUrl+"/reg", formData);
   }
 
   getProfile(): Observable<RoleMerchandiserManager> {
     let headers = new HttpHeaders();
 
     if (isPlatformBrowser(this.platformId)) {
       const token = localStorage.getItem('authToken');
       if (token) {
         headers = headers.set('Authorization', 'Bearer ' + token);
         console.log(headers);
       }
     }
 
     return this.http.get<RoleMerchandiserManager>(`${environment.apiBaseUrl}/merchan_manager/profile`, { headers });
   }
}
