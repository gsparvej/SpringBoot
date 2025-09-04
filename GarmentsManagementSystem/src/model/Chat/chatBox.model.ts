export interface ChatMessage {
  id?: number;
  sender: string;    
  content: string;
  timestamp: Date;
}