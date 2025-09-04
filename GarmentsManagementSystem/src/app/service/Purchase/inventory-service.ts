import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockInModel } from '../../../model/Purchase/stockIn.model';
import { InventoryModel } from '../../../model/Purchase/inventory.model';
import { StockOutModel } from '../../../model/Purchase/stockOut.model';
import { environment } from '../../environments/environment';
import { InventoryResponseDTO } from '../../../model/stockRequestDTO';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private baseUrlInventory = environment.apiBaseUrl + '/inventory';
  // private baseUrlStockIn = environment.apiBaseUrl + '/inventory/add';
  // private baseUrlStockOut = environment.apiBaseUrl + '/inventory/remove'; 

  constructor(private http: HttpClient) {}

  // Get all inventory items
  getInventories(): Observable<InventoryModel[]> {
    return this.http.get<InventoryModel[]>(this.baseUrlInventory);
  }

  // Save a new inventory item
  saveInventories(data: InventoryModel): Observable<InventoryModel> {
    return this.http.post<InventoryModel>(this.baseUrlInventory, data);
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

  

  addStock(stock: InventoryModel): Observable<string> {
    return this.http.post(`${this.baseUrl}/add`, stock, { responseType: 'text' });
  }

  removeStock(stock: InventoryModel): Observable<string> {
    return this.http.post(`${this.baseUrl}/remove`, stock, { responseType: 'text' });
  }

  getAllInventories(): Observable<InventoryResponseDTO[]> {
    return this.http.get<InventoryResponseDTO[]>(this.baseUrl);
  }
}
