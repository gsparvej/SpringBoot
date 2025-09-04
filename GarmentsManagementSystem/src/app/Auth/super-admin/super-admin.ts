import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/Auth/user.model';
import { Subscription } from 'rxjs';
import { UserService } from '../../service/user/user-service';

@Component({
  selector: 'app-super-admin',
  standalone: false,
  templateUrl: './super-admin.html',
  styleUrl: './super-admin.css'
})
export class SuperAdmin implements OnInit{

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
