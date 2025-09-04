import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VendorModel } from '../../../model/Purchase/vendor.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VendorService {
private baseUrlVendor = environment.apiBaseUrl + '/vendor';

  constructor(private http: HttpClient) { }


  getAllVendor(): Observable<any>{
    
        return this.http.get(this.baseUrlVendor);
    
      }
    
  saveVendor(ven: VendorModel) : Observable<any> {
      
  return this.http.post(this.baseUrlVendor,ven);
  }

   viewVendorProfile(id: number): Observable<any> {
    return this.http.get(this.baseUrlVendor+'/'+id);
  }
  


}
