import { Component, OnInit } from '@angular/core';
import { User } from '../model/Auth/user.model';
import { AuthService } from './service/Auth/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit{

  protected title = 'GarmentsManagementSystem';

   userRole: string | null = '';
  currentUser: User | null = null;

  constructor(
    private authService: AuthService
  ){}


   ngOnInit(): void {
    this.authService.currentUser$.subscribe(user=>{
      this.currentUser = user;
      this.userRole = user?.role || null;

    });
  }
}
