import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/Auth/user.model';
import { Subscription } from 'rxjs';
import { UserService } from '../../service/user/user-service';

@Component({
  selector: 'app-purchase-executive',
  standalone: false,
  templateUrl: './purchase-executive.html',
  styleUrl: './purchase-executive.css'
})
export class PurchaseExecutive implements OnInit{
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
