import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PurchaseRequisition } from '../../../model/Purchase/requisition.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RequisitionResponseDTO } from '../../../model/requisitionResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class RequisitionService {


  baseUrlRequision = environment.apiBaseUrl + '/requisition';




  baseUrlPRstatus: string = "http://localhost:3000/prStatus";

  constructor(private http: HttpClient) { }

  // Create PR
  createPR(pr: PurchaseRequisition): Observable<any> {
    return this.http.post(this.baseUrlRequision, pr);
  }

  getAllRequisition(): Observable<any> {

    return this.http.get(this.baseUrlRequision);
  }

  viewPRDetails(id: number): Observable<any> {
    return this.http.get(this.baseUrlRequision + '/' + id);
  }



  getAllPRstatus(): Observable<any> {

    return this.http.get(this.baseUrlPRstatus);
  }
  getRequisitionById(id: number): Observable<RequisitionResponseDTO> {
    return this.http.get<RequisitionResponseDTO>(`http://localhost:8080/api/requisition/id/${id}`);
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
