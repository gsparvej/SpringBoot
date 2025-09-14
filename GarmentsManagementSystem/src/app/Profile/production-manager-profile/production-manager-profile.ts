import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductionManagerService } from '../../service/Auth/production-manager-service';

@Component({
  selector: 'app-production-manager-profile',
  standalone: false,
  templateUrl: './production-manager-profile.html',
  styleUrl: './production-manager-profile.css'
})
export class ProductionManagerProfile implements OnInit{

  profile: any = null;
  loading = true;
  error = '';

  

  constructor(private productionManagerService: ProductionManagerService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.productionManagerService.getProfile().subscribe({
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
