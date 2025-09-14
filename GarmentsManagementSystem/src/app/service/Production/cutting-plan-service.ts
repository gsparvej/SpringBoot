import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CuttingPlan } from '../../../model/Production/cuttingPlan.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CuttingPlanService {
  private baseUrl = environment.apiBaseUrl + '/cutting_plan';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }


  getAllCuttingPlan(): Observable<CuttingPlan[]> {
    
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<CuttingPlan[]>(`${this.baseUrl}` , {headers});
  }

  getById(id: number): Observable<CuttingPlan> {
    
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<CuttingPlan>(`${this.baseUrl}/${id}` , {headers});
  }

  createCuttingPlan(cuttingPlan: CuttingPlan): Observable<CuttingPlan> {
    
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.post<CuttingPlan>(`${this.baseUrl}`, cuttingPlan , {headers});
  }

  updateCuttingPlan(id: number, cuttingPlan: CuttingPlan): Observable<CuttingPlan> {
    
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.put<CuttingPlan>(`${this.baseUrl}/${id}`, cuttingPlan ,{headers});
  }

  deleteCuttingPlan(id: number): Observable<void> {
    
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.delete<void>(`${this.baseUrl}/${id}` , {headers});
  }

  getCuttingPlanByProductionOrderId(id: number): Observable<CuttingPlan[]> {
    
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<CuttingPlan[]>(`${this.baseUrl}/production_OrderId/${id}` ,{headers});
  }

}
