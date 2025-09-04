import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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




 



  constructor(private http: HttpClient) { }


  // buyer add, update, delete ,view start
  getAllBuyer(): Observable<any> {

    return this.http.get(this.baseUrlBuyer);

  }

  saveBuyer(buy: Buyer): Observable<any> {

    return this.http.post(this.baseUrlBuyer, buy);
  }



  getBuyerById(id: string): Observable<any> {

    return this.http.get(this.baseUrlBuyer + '/' + id);
  }
  updateBuyer(id: string, buy: Buyer): Observable<any> {

    return this.http.put(this.baseUrlBuyer + '/' + id, buy);
  }



  // buyer add, update, delete ,view end 

  // UOM add, update , delete , view start

  getAllUom(): Observable<any> {

    return this.http.get(this.baseUrlUOM);
  }

  saveUom(uom: Uom): Observable<any> {

    return this.http.post(this.baseUrlUOM, uom);
  }
  deleteUom(id: string): Observable<any> {

    return this.http.delete(this.baseUrlUOM + '/' + id);
  }

  getUomById(id: string): Observable<any> {

    return this.http.get(this.baseUrlUOM + '/' + id);
  }
  updateManagement(id: string, uom: Uom): Observable<any> {

    return this.http.put(this.baseUrlUOM + '/' + id, uom);
  }


  // UOM add, update , delete , view end



  // BOM add, update , delete , view start

  getAllBom(): Observable<any> {

    return this.http.get(this.baseUrlBom);
  }

  saveBom(bom: BomStyle): Observable<any> {

    return this.http.post(this.baseUrlBom, bom);
  }

  // BOM add, update , delete , view end

  // BOMBOMVIEW add, update , delete , view start

  getAllBomView(): Observable<any> {

    return this.http.get(this.baseUrlBomView);
  }

  saveBomView(bomview: Bomview): Observable<any> {

    return this.http.post(this.baseUrlBomView, bomview);
  }

  getBomByStyle(styleCode: string): Observable<any> {
    return this.http.get(this.baseUrlBomView + "?bom.styleCode=" + styleCode);
  }

  // BOMBOMVIEW add, update , delete , view end

  // Order add, update, delete, view start


  getAllOrder(): Observable<any> {
    return this.http.get(this.baseUrlOrder);
  }
  saveOder(order: Order): Observable<any> {
    return this.http.post(this.baseUrlOrder, order);
  }



  // Order add, update, delete, view end


  getOrderByStyle(styleCode: string): Observable<FullOrderViewResponseDTO[]> {
    return this.http.get<FullOrderViewResponseDTO[]>(`${this.baseUrlOrder}/by-style/${styleCode}`);
  }

  // OrderStatus add, update, delete, view start



  // OrderStatus add, update, delete, view end


  viewFullOrder(id: number): Observable<any> {
    return this.http.get(this.baseUrlOrder + '/' + id);
  }

  // raw materials /////////////////


  getAllRawMaterials(): Observable<any> {
    return this.http.get(this.baseUrlRawMaterials);
  }
  saveRawMaterials(raw: RawMaterialsModel): Observable<any> {
    return this.http.post(this.baseUrlRawMaterials, raw);
  }





  getBomsByStyleCode(styleCode: string): Observable<BomResponseDTO[]> {
    return this.http.get<BomResponseDTO[]>(`http://localhost:8080/api/bom/style/${styleCode}`);
  }


  getFullOrderById(id: number): Observable<FullOrderViewResponseDTO> {
    return this.http.get<FullOrderViewResponseDTO>(`http://localhost:8080/api/order/${id}`);
  }




}
