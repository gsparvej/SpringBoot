import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CutBundle } from '../../../model/Production/cutBundle.model';

@Injectable({
  providedIn: 'root'
})
export class CutBundleService {
  private baseUrl = environment.apiBaseUrl + '/cutBundle';

  constructor(private http: HttpClient) { }

  getAllCutBundle(): Observable<CutBundle[]> {
      return this.http.get<CutBundle[]>(`${this.baseUrl}`);
    }
  
    getById(id: number): Observable<CutBundle> {
      return this.http.get<CutBundle>(`${this.baseUrl}/${id}`);
    }
  
    createCutBundle(cutBundle: CutBundle): Observable<CutBundle> {
      return this.http.post<CutBundle>(`${this.baseUrl}`, cutBundle);
    }
  
    updateCutBundle(id: number, cutBundle: CutBundle): Observable<CutBundle> {
      return this.http.put<CutBundle>(`${this.baseUrl}/${id}`, cutBundle);
    }
  
    deleteCutBundle(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
