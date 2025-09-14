import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { map, Observable } from 'rxjs';
import { StockInModel } from '../../../model/Purchase/stockIn.model';
import { InventoryModel } from '../../../model/Purchase/inventory.model';
import { StockOutModel } from '../../../model/Purchase/stockOut.model';
import { environment } from '../../environments/environment';
import { InventoryResponseDTO } from '../../../model/stockRequestDTO';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {

  private baseUrlInventory = environment.apiBaseUrl + '/inventory';
  // private baseUrlStockIn = environment.apiBaseUrl + '/inventory/add';
  // private baseUrlStockOut = environment.apiBaseUrl + '/inventory/remove'; 

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  // Get all inventory items
  getInventories(): Observable<InventoryModel[]> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<InventoryModel[]>(this.baseUrlInventory, {headers});
  }

  // Save a new inventory item
  saveInventories(data: InventoryModel): Observable<InventoryModel> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.post<InventoryModel>(this.baseUrlInventory, data, {headers});
  }

  // // Update the quantity of an existing inventory item
  // updateQuantity(inventory: InventoryModel): Observable<any> {
  //   return this.http.post(`${this.baseUrlStockOut}`, inventory);
  // }

  // // Delete an inventory item
  // deleteInventory(id: string): Observable<void> {
  //   return this.http.delete<void>(`${this.baseUrlInventory}/${id}`);
  // }

  // // Get all stock-in records
  // getAllStockIn(): Observable<StockInModel[]> {
  //   return this.http.get<StockInModel[]>(this.baseUrlStockIn);
  // }

  // // Save a new stock-in record
  // saveStockIn(stockIn: StockInModel): Observable<StockInModel> {
  //   return this.http.post<StockInModel>(this.baseUrlStockIn, stockIn);
  // }

  // // Get all stock-out records
  // getAllStockOut(): Observable<StockOutModel[]> {
  //   return this.http.get<StockOutModel[]>(this.baseUrlStockOut);
  // }

  // // Save a new stock-out record
  // saveStockOut(stockOut: StockOutModel): Observable<StockOutModel> {
  //   return this.http.post<StockOutModel>(this.baseUrlStockOut, stockOut);
  // }




  //test

   private baseUrl = 'http://localhost:8080/api/inventory';

  

  // addStock(stock: InventoryModel): Observable<string> {
  //   let headers = new HttpHeaders();

  //   if (isPlatformBrowser(this.platformId)) {
  //     const token = localStorage.getItem('authToken');
  //     if (token) {
  //       headers = headers.set('Authorization', 'Bearer ' + token);
  //     }
  //   }
  //   return this.http.post(`${this.baseUrl}/add`, stock, { responseType: 'text' });
  // }
   addStock(stock: InventoryModel): Observable<string> {
  let headers = new HttpHeaders();

  if (isPlatformBrowser(this.platformId)) {
    const token = localStorage.getItem('authToken');
    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    } else {
      console.error('No auth token found in localStorage!');
    }
  }

  // If the server is returning a binary response (e.g., ArrayBuffer), we set responseType to 'arraybuffer'
  return this.http.post(`${this.baseUrl}/add`, stock, {
    headers,
    responseType: 'arraybuffer'  // or 'text' depending on the backend response type
  }).pipe(
    // If you want to convert ArrayBuffer to string (for example, if you expect a plain string response)
    map((response: ArrayBuffer) => {
      const decoder = new TextDecoder();  // This will decode the ArrayBuffer to a string
      return decoder.decode(response);
    })
  );
}


  // removeStock(stock: InventoryModel): Observable<string> {
  //   let headers = new HttpHeaders();

  //   if (isPlatformBrowser(this.platformId)) {
  //     const token = localStorage.getItem('authToken');
  //     if (token) {
  //       headers = headers.set('Authorization', 'Bearer ' + token);
  //     }
  //   }
  //   return this.http.post(`${this.baseUrl}/remove`, stock, { responseType: 'text' });
  // }


  removeStock(stock: InventoryModel): Observable<string> {
  let headers = new HttpHeaders();

  if (isPlatformBrowser(this.platformId)) {
    const token = localStorage.getItem('authToken');
    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    } else {
      console.error('No auth token found in localStorage!');
    }
  }

  return this.http.post(`${this.baseUrl}/remove`, stock, {
    headers,
    responseType: 'arraybuffer' // or 'text' if the backend sends plain text
  }).pipe(
    map((response: ArrayBuffer) => {
      const decoder = new TextDecoder();
      return decoder.decode(response);
    })
  );
}

  getAllInventories(): Observable<InventoryResponseDTO[]> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<InventoryResponseDTO[]>(this.baseUrl, {headers});
  }
}
