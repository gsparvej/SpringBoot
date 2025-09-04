import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../service/user/user-service';
import { Router } from '@angular/router';
import { User } from '../../../model/Auth/user.model';

@Component({
  selector: 'app-view-users',
  standalone: false,
  templateUrl: './view-users.html',
  styleUrl: './view-users.css'
})
export class ViewUsers implements OnInit {
  user: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef
  ) { }


  ngOnInit(): void {
    this.loadAllUsers();
  }

   loadAllUsers(): void {
   
      po: this.userService.getAllUser().subscribe({
      next: (result) => {
        this.user = result;     

        console.log('po:', this.user);
        this.cdr.detectChanges();


        // ⚠️ Don't navigate here unless needed
        // this.router.navigate(['/viewHalfOrder']);
      },
      error: (err) => {
        console.error('Error loading data:', err);
        alert('Failed to load Users data');
      }
    });
  }

    getUserById(id:string): void{
      this.router.navigate(['/updateUser',id]); 
  }

}
