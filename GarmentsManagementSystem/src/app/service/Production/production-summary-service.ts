import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProductionSummary } from '../../../model/Production/producSummary.model';
import { Observable } from 'rxjs';
import { Order } from '../../../model/Merchandiser/order.model';

@Injectable({
  providedIn: 'root'
})
export class ProductionSummaryService {
  private baseUrl = environment.apiBaseUrl + '/proSummaryorder';

  constructor(private http: HttpClient) { }

  getProductionSummary(orderId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/production-summary`, {
      params: { orderId: orderId.toString() }
    });
  }


}
