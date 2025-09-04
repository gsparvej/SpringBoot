import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Machine } from '../../../model/Production/machine.model';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
    private baseUrl = environment.apiBaseUrl + '/machine';

  constructor(private http: HttpClient) { }

   getAllMachine(): Observable<Machine[]> {
      return this.http.get<Machine[]>(this.baseUrl);
    }

  getByLine(lineId: number): Observable<Machine[]> {
    const params = new HttpParams().set('lineId', lineId);
    return this.http.get<Machine[]>(this.baseUrl, { params });
  }

  createMachine(machine: Machine): Observable<Machine> {
    return this.http.post<Machine>(this.baseUrl, machine);
  }

  updateMachine(id: number, machine: Machine): Observable<Machine> {
    return this.http.put<Machine>(`${this.baseUrl}/${id}`, machine);
  }

  deleteMachine(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
