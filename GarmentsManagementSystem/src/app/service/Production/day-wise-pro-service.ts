import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DayWiseProduction } from '../../../model/Production/dayWiseProduction.model';
import { DayWiseProductionResponseDTO } from '../../../model/productionReportResponseDTO';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DayWiseProService {
  private baseUrl = environment.apiBaseUrl + '/dayWisePro';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  getAllDayWisePro(): Observable<DayWiseProduction[]> {

    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<DayWiseProduction[]>(this.baseUrl+"/all", { headers });
  }

  getDayWiseProById(id: number): Observable<DayWiseProduction> {

    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<DayWiseProduction>(`${this.baseUrl}/${id}`, { headers });
  }

  createDayWiseProduction(order: DayWiseProduction): Observable<DayWiseProduction> {

    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.post<DayWiseProduction>(this.baseUrl, order, { headers });
  }

  updateDayWiseProduction(id: number, order: DayWiseProduction): Observable<DayWiseProduction> {

    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.put<DayWiseProduction>(`${this.baseUrl}/${id}`, order, { headers });
  }

  deleteDayWiseProduction(id: number): Observable<void> {

    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.delete<void>(`${this.baseUrl}/${id}`, { headers });
  }



  // testing production report 
  getDayWiseProByOrderId(orderId: number): Observable<DayWiseProduction[]> {

    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<DayWiseProduction[]>(`${this.baseUrl}/searchByOrderId/${orderId}`, { headers });
  }


  getDayWiseProductionDTOs(): Observable<DayWiseProductionResponseDTO[]> {

    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<DayWiseProductionResponseDTO[]>(this.baseUrl, { headers });
  }

}
