import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewStockService {


private baseUrlStockIn = environment.apiBaseUrl + '/stock_in';
private baseUrlStockOut = environment.apiBaseUrl + '/stock_out';

  constructor(private http: HttpClient) { }

   getAllStockIn(): Observable<any>{
        
    return this.http.get(this.baseUrlStockIn);
  }

  
   getAllStockOut(): Observable<any>{
        
    return this.http.get(this.baseUrlStockOut);
  }
}
