import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { RolePurchaseManager } from '../../../model/Auth/purchaseManager.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PurchaseManagerService {

   private baseUrl = environment.apiBaseUrl + '/purchase_manager';
  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  
   registerPurchaseManager(user: any, purManager: any, photo: File): Observable<any> {
     const formData = new FormData();
     formData.append('user', JSON.stringify(user));
     formData.append('purManager', JSON.stringify(purManager));
     formData.append('photo', photo);
 
     return this.http.post(this.baseUrl+"/reg", formData);
   }
 
   getProfile(): Observable<RolePurchaseManager> {
     let headers = new HttpHeaders();
 
     if (isPlatformBrowser(this.platformId)) {
       const token = localStorage.getItem('authToken');
       if (token) {
         headers = headers.set('Authorization', 'Bearer ' + token);
         console.log(headers);
       }
     }
 
     return this.http.get<RolePurchaseManager>(`${environment.apiBaseUrl}/purchase_manager/profile`, { headers });
   }

}
