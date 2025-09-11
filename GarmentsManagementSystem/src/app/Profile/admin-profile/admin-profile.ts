import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/Auth/admin-service';

@Component({
  selector: 'app-admin-profile',
  standalone: false,
  templateUrl: './admin-profile.html',
  styleUrl: './admin-profile.css'
})
export class AdminProfile implements OnInit{

 

  profile: any = null;
  loading = true;
  error = '';

   imageUrl: string = "http://localhost:8080/images/roleAdmin/";

  constructor(private adminService: AdminService,
    private cd: ChangeDetectorRef 
  ) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.adminService.getProfile().subscribe({
      next: (data) => {
        this.profile = data;
        this.cd.markForCheck();
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load profile ❌';
        console.error(err);
        this.loading = false;
      }
    });
  }
}
