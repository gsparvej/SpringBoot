import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SuperAdminService } from '../../service/Auth/super-admin-service';

@Component({
  selector: 'app-super-admin-profile',
  standalone: false,
  templateUrl: './super-admin-profile.html',
  styleUrl: './super-admin-profile.css'
})
export class SuperAdminProfile implements OnInit{
  
  
  profile: any = null;
  loading = true;
  error = '';

  imageUrl: string = "http://localhost:8080/images/roleSuperAdmin/";

  constructor(private superAdminService: SuperAdminService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.superAdminService.getProfile().subscribe({
      next: (data) => {
        this.profile = data;
        this.cdr.markForCheck();
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
