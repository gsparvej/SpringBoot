import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HrAdminService } from '../../service/Auth/hr-admin-service';

@Component({
  selector: 'app-hr-admin-profile',
  standalone: false,
  templateUrl: './hr-admin-profile.html',
  styleUrl: './hr-admin-profile.css'
})
export class HrAdminProfile implements OnInit {


  profile: any = null;
  loading = true;
  error = '';

  imageUrl: string = "http://localhost:8080/images/roleHRAdmin/";

  constructor(private hrAdminService: HrAdminService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.hrAdminService.getProfile().subscribe({
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
