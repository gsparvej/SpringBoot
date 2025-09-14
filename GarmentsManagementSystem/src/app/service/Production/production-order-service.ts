import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductionOrder } from '../../../model/Production/productionOrder.model';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class ProductionOrderService {

  private baseUrl = environment.apiBaseUrl + '/production_order';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }
  getAllProductionOrder(): Observable<ProductionOrder[]> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<ProductionOrder[]>(this.baseUrl, { headers });
  }

  getProductionOrderById(id: number): Observable<ProductionOrder> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<ProductionOrder>(`${this.baseUrl}/${id}`, { headers });
  }

  createProductionOrder(order: ProductionOrder): Observable<ProductionOrder> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.post<ProductionOrder>(this.baseUrl, order, { headers });
  }

  update(id: number, order: ProductionOrder): Observable<ProductionOrder> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.put<ProductionOrder>(`${this.baseUrl}/${id}`, order, { headers });
  }

  deleteProductionOrder(id: number): Observable<void> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.delete<void>(`${this.baseUrl}/${id}`, { headers });
  }

  // getProductionOrderByOrderId(id: number): Observable<ProductionOrder[]> {
  //   return this.http.get<ProductionOrder[]>(`${this.baseUrl}/production_OrderId/${id}`);
  // }
}
