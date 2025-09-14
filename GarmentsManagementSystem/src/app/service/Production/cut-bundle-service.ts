import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CutBundle } from '../../../model/Production/cutBundle.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CutBundleService {
  private baseUrl = environment.apiBaseUrl + '/cutBundle';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  getAllCutBundle(): Observable<CutBundle[]> {

    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<CutBundle[]>(`${this.baseUrl}`, { headers });
  }

  getById(id: number): Observable<CutBundle> {
    
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.get<CutBundle>(`${this.baseUrl}/${id}` ,{ headers});
  }

  createCutBundle(cutBundle: CutBundle): Observable<CutBundle> {
    
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.post<CutBundle>(`${this.baseUrl}`, cutBundle , {headers});
  }

  updateCutBundle(id: number, cutBundle: CutBundle): Observable<CutBundle> {
    
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.put<CutBundle>(`${this.baseUrl}/${id}`, cutBundle , {headers});
  }

  deleteCutBundle(id: number): Observable<void> {
    
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.delete<void>(`${this.baseUrl}/${id}` , {headers});
  }
}
