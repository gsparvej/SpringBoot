import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/Auth/user.model';
import { Subscription } from 'rxjs';
import { UserService } from '../../service/user/user-service';
import { AdminModel } from '../../../model/Auth/admin.model';

@Component({
  selector: 'app-admin-profile',
  standalone: false,
  templateUrl: './admin-profile.html',
  styleUrl: './admin-profile.css'
})
export class AdminProfile implements OnInit {
  user: User | null = null;
  private subscription: Subscription = new Subscription();

  constructor(
    private userSer: UserService
  ) { }
  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
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
