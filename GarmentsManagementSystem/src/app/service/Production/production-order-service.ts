import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductionOrder } from '../../../model/Production/productionOrder.model';


@Injectable({
  providedIn: 'root'
})
export class ProductionOrderService {

  private baseUrl = environment.apiBaseUrl + '/production_order';

  constructor(private http: HttpClient) { }

  getAllProductionOrder(): Observable<ProductionOrder[]> {
    return this.http.get<ProductionOrder[]>(this.baseUrl);
  }

  getProductionOrderById(id: number): Observable<ProductionOrder> {
    return this.http.get<ProductionOrder>(`${this.baseUrl}/${id}`);
  }

  createProductionOrder(order: ProductionOrder): Observable<ProductionOrder> {
    return this.http.post<ProductionOrder>(this.baseUrl, order);
  }

  update(id: number, order: ProductionOrder): Observable<ProductionOrder> {
    return this.http.put<ProductionOrder>(`${this.baseUrl}/${id}`, order);
  }

  deleteProductionOrder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // getProductionOrderByOrderId(id: number): Observable<ProductionOrder[]> {
  //   return this.http.get<ProductionOrder[]>(`${this.baseUrl}/production_OrderId/${id}`);
  // }
}
