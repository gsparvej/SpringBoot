import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DayWiseProduction } from '../../../model/Production/dayWiseProduction.model';
import { DayWiseProductionResponseDTO } from '../../../model/productionReportResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class DayWiseProService {
  private baseUrl = environment.apiBaseUrl + '/dayWisePro';

  constructor(private http: HttpClient) { }

  getAllDayWisePro(): Observable<DayWiseProduction[]> {
    return this.http.get<DayWiseProduction[]>(this.baseUrl);
  }

  getDayWiseProById(id: number): Observable<DayWiseProduction> {
    return this.http.get<DayWiseProduction>(`${this.baseUrl}/${id}`);
  }

  createDayWiseProduction(order: DayWiseProduction): Observable<DayWiseProduction> {
    return this.http.post<DayWiseProduction>(this.baseUrl, order);
  }

  updateDayWiseProduction(id: number, order: DayWiseProduction): Observable<DayWiseProduction> {
    return this.http.put<DayWiseProduction>(`${this.baseUrl}/${id}`, order);
  }

  deleteDayWiseProduction(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }



  // testing production report 
  getDayWiseProByOrderId(orderId: number): Observable<DayWiseProduction[]> {
    return this.http.get<DayWiseProduction[]>(`${this.baseUrl}/searchByOrderId/${orderId}`);
  }


  getDayWiseProductionDTOs(): Observable<DayWiseProductionResponseDTO[]> {
  return this.http.get<DayWiseProductionResponseDTO[]>(this.baseUrl);
}

}
