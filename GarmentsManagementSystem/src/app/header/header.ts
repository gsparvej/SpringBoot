import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from '../service/Auth/auth-service';
import { User } from '../../model/Auth/user.model';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  protected title = 'GarmentsManagementSystem';

  userRole: string | null = '';
  currentUser: User | null = null;

  constructor(
    private authService: AuthService
  ) { }


  ngOnInit(): void {
    // Subscribe to role changes
    this.authService.userRole$.subscribe(role => {
      this.userRole = role;
    });

    // Also initialize with current role (in case of refresh)
    this.userRole = this.authService.getUserRole();
  }


}
