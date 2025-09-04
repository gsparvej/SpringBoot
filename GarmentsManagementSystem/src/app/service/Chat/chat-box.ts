import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatMessage } from '../../../model/Chat/chatBox.model';

@Injectable({
  providedIn: 'root'
})
export class ChatBox {
   baseUrlChat: string = "http://localhost:3000/messages";


  constructor(private http: HttpClient) { }


  getMessages(): Observable<ChatMessage[]> {
    return this.http.get<ChatMessage[]>(this.baseUrlChat);
  }

  sendMessage(message: ChatMessage): Observable<ChatMessage> {
    return this.http.post<ChatMessage>(this.baseUrlChat, message);
  }
}
