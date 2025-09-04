import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../../model/Purchase/item.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
private baseUrlItem = environment.apiBaseUrl + '/item';
  constructor(private http: HttpClient) { }

  getAllItem(): Observable<any>{
      
  return this.http.get(this.baseUrlItem);
      
        }
      
  saveItem(item: Item) : Observable<any> {
        
  return this.http.post(this.baseUrlItem,item);
  }
}
