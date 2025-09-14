import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { PurchaseRequisition } from '../../../model/Purchase/requisition.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RequisitionResponseDTO } from '../../../model/requisitionResponseDTO';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RequisitionService {


  baseUrlRequision = environment.apiBaseUrl + '/requisition';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }


  // Create PR
  createPR(pr: PurchaseRequisition): Observable<any> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.post(this.baseUrlRequision, pr ,{headers});
  }

  getAllRequisition(): Observable<any> {
let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get(this.baseUrlRequision , {headers});
  }

  viewPRDetails(id: number): Observable<any> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get(this.baseUrlRequision + '/' + id , {headers});
  }



  
  getRequisitionById(id: number): Observable<RequisitionResponseDTO> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<RequisitionResponseDTO>(`http://localhost:8080/api/requisition/id/${id}` , {headers});
  }



  // // Get All PRs
  // getAllPRs(): Observable<PurchaseRequisition[]> {
  //   return this.http.get<PurchaseRequisition[]>(this.baseUrlRequision);
  // }

  // // Get PR by ID
  // getPRById(id: string): Observable<PurchaseRequisition> {
  //   return this.http.get<PurchaseRequisition>(`${this.baseUrlRequision}/${id}`);
  // }

  // // Update PR
  // updatePR(id: string, pr: PurchaseRequisition): Observable<PurchaseRequisition> {
  //   return this.http.put<PurchaseRequisition>(`${this.baseUrlRequision}/${id}`, pr);
  // }

  // // Delete PR
  // deletePR(id: string): Observable<void> {
  //   return this.http.delete<void>(`${this.baseUrlRequision}/${id}`);
  // }
}
