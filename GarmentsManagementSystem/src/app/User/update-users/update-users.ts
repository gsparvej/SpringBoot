import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User } from '../../../model/Auth/user.model';
import { UserService } from '../../service/user/user-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-users',
  standalone: false,
  templateUrl: './update-users.html',
  styleUrl: './update-users.css'
})
export class UpdateUsers implements OnInit {

  id: string = '';
  user: User = new User();

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadUserById();
    
   
  }


  loadUserById(): void {
    this.userService.getUserById(this.id).subscribe(data => {
      this.user = data;
      this.cdr.detectChanges();
    });
  }


   updateUser(): void {
    this.userService.updateUser(this.id, this.user).subscribe({
      next: (emp) => {
        this.router.navigate(['/viewAllUser']);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
