import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoleProductionManager } from '../../../model/Auth/productionManager.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProductionManagerService {


  private baseUrl = environment.apiBaseUrl + '/pro_manager';


  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }






  registerProductionManager(user: any, proManager: any, photo: File): Observable<any> {
    const formData = new FormData();
    formData.append('user', JSON.stringify(user));
    formData.append('proManager', JSON.stringify(proManager));
    formData.append('photo', photo);

    return this.http.post(this.baseUrl + "/reg", formData);
  }

  getProfile(): Observable<RoleProductionManager> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
        console.log(headers);
      }
    }

    return this.http.get<RoleProductionManager>(`${environment.apiBaseUrl}/pro_manager/profile`, { headers });
  }
}
