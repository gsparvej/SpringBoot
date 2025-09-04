import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CuttingPlan } from '../../../model/Production/cuttingPlan.model';

@Injectable({
  providedIn: 'root'
})
export class CuttingPlanService {
  private baseUrl = environment.apiBaseUrl + '/cutting_plan';

  constructor(private http: HttpClient) { }

   getAllCuttingPlan(): Observable<CuttingPlan[]> {
    return this.http.get<CuttingPlan[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<CuttingPlan> {
    return this.http.get<CuttingPlan>(`${this.baseUrl}/${id}`);
  }

  createCuttingPlan(cuttingPlan: CuttingPlan): Observable<CuttingPlan> {
    return this.http.post<CuttingPlan>(`${this.baseUrl}`, cuttingPlan);
  }

  updateCuttingPlan(id: number, cuttingPlan: CuttingPlan): Observable<CuttingPlan> {
    return this.http.put<CuttingPlan>(`${this.baseUrl}/${id}`, cuttingPlan);
  }

  deleteCuttingPlan(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

   getCuttingPlanByProductionOrderId(id: number): Observable<CuttingPlan[]> {
      return this.http.get<CuttingPlan[]>(`${this.baseUrl}/production_OrderId/${id}`);
    }

}
