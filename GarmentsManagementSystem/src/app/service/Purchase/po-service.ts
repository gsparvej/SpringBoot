import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PurchaseOrder } from '../../../model/Purchase/po.model';
import { environment } from '../../environments/environment';
import { VendorModel } from '../../../model/Purchase/vendor.model';
import { PurchaseOrderResponseDTO } from '../../../model/poResponseDTOs';


@Injectable({
  providedIn: 'root'
})
export class PoService {
private baseUrlPO = environment.apiBaseUrl + '/po';

  constructor(private http: HttpClient) { }


  getAllPO(): Observable<any>{
      
  return this.http.get(this.baseUrlPO);
}
      
  savePO(po: PurchaseOrder) : Observable<any> {
        
  return this.http.post(this.baseUrlPO,po);
  }

   viewPODetails(id: number): Observable<any> {
    return this.http.get(this.baseUrlPO+'/'+id);
  }


  getVendorById(id: number): Observable<VendorModel> {
  return this.http.get<VendorModel>(`http://localhost:8080/api/vendor/${id}`);
}

 getFullPurchaseOrderById(id: number): Observable<PurchaseOrderResponseDTO> {
    return this.http.get<PurchaseOrderResponseDTO>(`http://localhost:8080/api/po/id/${id}`);
  }


  
}
