import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { PurchaseOrder } from '../../../model/Purchase/po.model';
import { environment } from '../../environments/environment';
import { VendorModel } from '../../../model/Purchase/vendor.model';
import { PurchaseOrderResponseDTO } from '../../../model/poResponseDTOs';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class PoService {
  private baseUrlPO = environment.apiBaseUrl + '/po';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }


  getAllPO(): Observable<any> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get(this.baseUrlPO, { headers });
  }

  savePO(po: PurchaseOrder): Observable<any> {
let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.post(this.baseUrlPO, po , {headers});
  }

  viewPODetails(id: number): Observable<any> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get(this.baseUrlPO + '/' + id , {headers});
  }


  getVendorById(id: number): Observable<VendorModel> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<VendorModel>(`http://localhost:8080/api/vendor/${id}` , {headers});
  }

  getFullPurchaseOrderById(id: number): Observable<PurchaseOrderResponseDTO> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<PurchaseOrderResponseDTO>(`http://localhost:8080/api/po/id/${id}` , {headers});
  }



}
