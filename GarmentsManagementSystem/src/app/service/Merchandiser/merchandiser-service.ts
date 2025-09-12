import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { Buyer } from '../../../model/Merchandiser/buyer.model';
import { Uom } from '../../../model/Merchandiser/uom.model';
import { BomStyle } from '../../../model/Merchandiser/bom.model';
import { Bomview } from '../../../model/Merchandiser/bomview.model';
import { Order } from '../../../model/Merchandiser/order.model';
import { RawMaterialsModel } from '../../../model/Merchandiser/raw.model';
import { environment } from '../../environments/environment';
import { BomResponseDTO } from '../../../model/bomResponseDTO';
import { FullOrderViewResponseDTO } from '../../../model/orderResponseDTO';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MerchandiserService {

  private baseUrlBuyer = environment.apiBaseUrl + '/buyer';

  private baseUrlUOM = environment.apiBaseUrl + '/uom';




  private baseUrlBom = environment.apiBaseUrl + '/bomstyle';




  private baseUrlBomView = environment.apiBaseUrl + '/bom';




  private baseUrlOrder = environment.apiBaseUrl + '/order';


  private baseUrlRawMaterials = environment.apiBaseUrl + '/raw_materials';








  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }


  // buyer add, update, delete ,view start
  getAllBuyer(): Observable<any> {

    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.get(this.baseUrlBuyer, { headers });

  }

  saveBuyer(buy: Buyer): Observable<any> {


    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.post(this.baseUrlBuyer, buy, { headers });
  }



  getBuyerById(id: string): Observable<any> {


    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.get(this.baseUrlBuyer + '/' + id, { headers });
  }


  updateBuyer(id: string, buy: Buyer): Observable<any> {

    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.put(this.baseUrlBuyer + '/' + id, buy, { headers });
  }



  // buyer add, update, delete ,view end 

  // UOM add, update , delete , view start

  getAllUom(): Observable<any> {

    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.get(this.baseUrlUOM, { headers });
  }

  saveUom(uom: Uom): Observable<any> {

    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.post(this.baseUrlUOM, uom, { headers });
  }
  deleteUom(id: string): Observable<any> {

    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.delete(this.baseUrlUOM + '/' + id, { headers });
  }

  getUomById(id: string): Observable<any> {

    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.get(this.baseUrlUOM + '/' + id, { headers });
  }
  updateManagement(id: string, uom: Uom): Observable<any> {

    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.put(this.baseUrlUOM + '/' + id, uom, { headers });
  }


  // UOM add, update , delete , view end



  // BOM add, update , delete , view start

  getAllBom(): Observable<any> {

    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.get(this.baseUrlBom, { headers });
  }

  saveBom(bom: BomStyle): Observable<any> {

    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.post(this.baseUrlBom, bom, { headers });
  }

  // BOM add, update , delete , view end

  // BOMBOMVIEW add, update , delete , view start

  getAllBomView(): Observable<any> {

    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.get(this.baseUrlBomView, { headers });
  }

  saveBomView(bomview: Bomview): Observable<any> {


    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.post(this.baseUrlBomView, bomview, { headers });
  }

  getBomByStyle(styleCode: string): Observable<any> {


    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get(this.baseUrlBomView + "?bom.styleCode=" + styleCode, { headers });
  }

  // BOMBOMVIEW add, update , delete , view end

  // Order add, update, delete, view start


  getAllOrder(): Observable<any> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get(this.baseUrlOrder, { headers });
  }


  saveOder(order: Order): Observable<any> {


    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.post(this.baseUrlOrder, order, { headers });
  }



  // Order add, update, delete, view end


  getOrderByStyle(styleCode: string): Observable<FullOrderViewResponseDTO[]> {


    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<FullOrderViewResponseDTO[]>(`${this.baseUrlOrder}/by-style/${styleCode}`, { headers });
  }



  viewFullOrder(id: number): Observable<any> {


    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get(this.baseUrlOrder + '/' + id, { headers });
  }

  // raw materials /////////////////


  getAllRawMaterials(): Observable<any> {


    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get(this.baseUrlRawMaterials, { headers });
  }
  saveRawMaterials(raw: RawMaterialsModel): Observable<any> {


    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.post(this.baseUrlRawMaterials, raw, { headers });
  }





  getBomsByStyleCode(styleCode: string): Observable<BomResponseDTO[]> {


    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<BomResponseDTO[]>(`http://localhost:8080/api/bom/style/${styleCode}`, { headers });
  }


  getFullOrderById(id: number): Observable<FullOrderViewResponseDTO> {


    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<FullOrderViewResponseDTO>(`http://localhost:8080/api/order/${id}`, { headers });
  }




}
