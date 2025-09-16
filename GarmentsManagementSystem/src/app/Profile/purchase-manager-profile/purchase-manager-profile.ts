import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PurchaseManagerService } from '../../service/Auth/purchase-manager-service';

@Component({
  selector: 'app-purchase-manager-profile',
  standalone: false,
  templateUrl: './purchase-manager-profile.html',
  styleUrl: './purchase-manager-profile.css'
})
export class PurchaseManagerProfile implements OnInit{

  
  profile: any = null;
  loading = true;
  error = '';

  imageUrl: string = "http://localhost:8080/images/rolePurchaseManager/";

  constructor(private purchaseManagerService: PurchaseManagerService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.purchaseManagerService.getProfile().subscribe({
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
