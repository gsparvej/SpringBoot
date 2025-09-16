import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ProductionSummary } from '../../../model/Production/producSummary.model';
import { Observable } from 'rxjs';
import { Order } from '../../../model/Merchandiser/order.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProductionSummaryService {
  private baseUrl = environment.apiBaseUrl + '/proSummaryorder';

 constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }


  // getProductionSummary(orderId: number): Observable<any> {
  //   let headers = new HttpHeaders();

  //   if (isPlatformBrowser(this.platformId)) {
  //     const token = localStorage.getItem('authToken');
  //     if (token) {
  //       headers = headers.set('Authorization', 'Bearer ' + token);
  //     }
  //   }
  //   return this.http.get(`${this.baseUrl}/production-summary`, {
  //     params: { orderId: orderId.toString() }
  //   });
  // }


  getProductionSummary(orderId: number): Observable<any> {
  let headers = new HttpHeaders();

  // Check if the platform is browser
  if (isPlatformBrowser(this.platformId)) {
    const token = localStorage.getItem('authToken');
    if (token) {
      // Set Authorization header with Bearer token
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
  }

  // Create HttpParams for the query parameters
  const params = new HttpParams().set('orderId', orderId.toString());

  // Make the HTTP GET request with headers and params
  return this.http.get(`${this.baseUrl}/production-summary`, { headers, params });
}

getProductionSummaryAll(orderId: number): Observable<any> {
  let headers = new HttpHeaders();

  if (isPlatformBrowser(this.platformId)) {
    const token = localStorage.getItem('authToken');
    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }
  }

  return this.http.get(`${this.baseUrl}/production-summaryAll`, {
    headers: headers,          // <-- include headers here
    params: { orderId: orderId.toString() }
  });
}


}
