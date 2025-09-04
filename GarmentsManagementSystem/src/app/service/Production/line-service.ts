import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Line } from '../../../model/Production/line.model';

@Injectable({
  providedIn: 'root'
})
export class LineService {
  private baseUrl = environment.apiBaseUrl + '/line';

  constructor(private http: HttpClient) { }

   getAllLine(): Observable<Line[]> {
    return this.http.get<Line[]>(this.baseUrl);
  }

  getLineById(id: number): Observable<Line> {
    return this.http.get<Line>(`${this.baseUrl}/${id}`);
  }

  createLine(line: Line): Observable<Line> {
    return this.http.post<Line>(this.baseUrl, line);
  }

  updateLine(id: number, line: Line): Observable<Line> {
    return this.http.put<Line>(`${this.baseUrl}/${id}`, line);
  }

  deleteLine(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
