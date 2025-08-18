import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FabricReceive } from '../model/fabricReceive.model';

@Injectable({
  providedIn: 'root'
})
export class FabricReceiveService {
   private baseUrl = environment.apiBaseUrl + '/fabric-receive';
  

   constructor(private http: HttpClient) {}

  getAllFabricReceives(): Observable<FabricReceive[]> {
    return this.http.get<FabricReceive[]>(this.baseUrl);
  }

  getFabricReceiveById(id: number): Observable<FabricReceive> {
    return this.http.get<FabricReceive>(`${this.baseUrl}/${id}`);
  }

  getFabricReceivesByOrder(orderId: number): Observable<FabricReceive[]> {
    return this.http.get<FabricReceive[]>(`${this.baseUrl}/order/${orderId}`);
  }

  createFabricReceive(fabricReceive: FabricReceive): Observable<FabricReceive> {
    return this.http.post<FabricReceive>(this.baseUrl, fabricReceive);
  }

  deleteFabricReceive(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
