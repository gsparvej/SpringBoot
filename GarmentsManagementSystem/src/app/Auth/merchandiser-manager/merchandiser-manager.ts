import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/Auth/user.model';
import { Subscription } from 'rxjs';
import { UserService } from '../../service/user/user-service';

@Component({
  selector: 'app-merchandiser-manager',
  standalone: false,
  templateUrl: './merchandiser-manager.html',
  styleUrl: './merchandiser-manager.css'
})
export class MerchandiserManager implements OnInit{

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
