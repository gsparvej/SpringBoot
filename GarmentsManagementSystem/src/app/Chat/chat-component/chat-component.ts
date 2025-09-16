import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../../../model/Chat/chatBox.model';
import { ChatBox } from '../../service/Chat/chat-box';
import { AuthService } from '../../service/Auth/auth-service';

@Component({
  selector: 'app-chat-component',
  standalone: false,
  templateUrl: './chat-component.html',
  styleUrls: ['./chat-component.css']
})
export class ChatComponent implements OnInit {

  messages: ChatMessage[] = [];
  newMessage: string = '';
  currentUserName: string = 'Guest'; // fallback name

  constructor(
    private chatService: ChatBox,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadMessages();

    const role = this.authService.getUserRole();
    if (role) {
      this.currentUserName = role; // 👈 আপনি চাইলে এখানে email বা name রাখতে পারেন
    }
  }

  loadMessages() {
    this.chatService.getMessages().subscribe(data => {
      this.messages = data;
    });
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      const message: ChatMessage = {
        sender: this.currentUserName, // 👈 set from decoded role
        content: this.newMessage,
        timestamp: new Date()
      };

      this.chatService.sendMessage(message).subscribe(saved => {
        this.messages.push(saved);
        this.newMessage = '';
      });
    }
  }
}
