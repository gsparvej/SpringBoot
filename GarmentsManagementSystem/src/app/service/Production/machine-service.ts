import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Machine } from '../../../model/Production/machine.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  private baseUrl = environment.apiBaseUrl + '/machine';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  getAllMachine(): Observable<Machine[]> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<Machine[]>(this.baseUrl, { headers });
  }

  getByLine(lineId: number): Observable<Machine[]> {
  let headers = new HttpHeaders();
  
  // Check if running in browser
  if (isPlatformBrowser(this.platformId)) {
    const token = localStorage.getItem('authToken');
    if (token) {
      // Set Authorization header correctly
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
  }
  
  // Prepare query parameters
  const params = new HttpParams().set('lineId', lineId.toString());

  // Send HTTP GET request with headers and params
  return this.http.get<Machine[]>(this.baseUrl, { headers, params });
}


  createMachine(machine: Machine): Observable<Machine> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.post<Machine>(this.baseUrl, machine, { headers });
  }

  updateMachine(id: number, machine: Machine): Observable<Machine> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.put<Machine>(`${this.baseUrl}/${id}`, machine, {headers});
  }

  deleteMachine(id: number): Observable<void> {
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
