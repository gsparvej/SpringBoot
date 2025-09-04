import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from '../service/Auth/auth-service';
import { User } from '../../model/Auth/user.model';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit{
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
