import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/Auth/user.model';
import { Subscription } from 'rxjs';
import { UserService } from '../../service/user/user-service';

@Component({
  selector: 'app-hr-executive',
  standalone: false,
  templateUrl: './hr-executive.html',
  styleUrl: './hr-executive.css'
})
export class HrExecutive implements OnInit{


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
