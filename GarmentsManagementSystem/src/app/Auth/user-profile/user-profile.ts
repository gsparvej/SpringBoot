import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/Auth/user.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../../service/Auth/auth-service';
import { Router } from '@angular/router';
import { UserService } from '../../service/user/user-service';
import { error } from 'console';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfile implements OnInit{
  user: User | null = null;
  private subscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService, 
    private router: Router,
    private userSer: UserService
  ) { }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void{
    this.userSer.getUserProfile().subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
