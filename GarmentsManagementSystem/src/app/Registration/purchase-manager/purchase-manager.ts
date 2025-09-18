import { Component } from '@angular/core';
import { PurchaseManagerService } from '../../service/Auth/purchase-manager-service';

@Component({
  selector: 'app-purchase-manager',
  standalone: false,
  templateUrl: './purchase-manager.html',
  styleUrl: './purchase-manager.css'
})
export class PurchaseManager {
resetForm() {
throw new Error('Method not implemented.');
}

  
  
    // ✅ User fields
    user: any = {
      name: '',
      email: '',
      password: '',
      phone: '',
      photo: '',
      role: 'PURCHASEMANAGER'
    };
  
    // ✅ Merchandiser Manager fields
    purManager: any = {
      name: '',
      email: '',
      phone: '',
      gender: '',
      address: '',
      dateOfBirth: '',
      photo: ''
    };
  
  
    photoFile: File | null = null;
  
    constructor(private purchaseManagerService: PurchaseManagerService) { }
  
    onFileSelected(event: any) {
      this.photoFile = event.target.files[0];
    }
  
    registerPurchaseManager() {
      if (!this.photoFile) {
        alert("Please select a logo/photo before submitting");
        return;
      }
  
      this.purchaseManagerService.registerPurchaseManager(this.user, this.purManager, this.photoFile)
        .subscribe({
          next: (res) => {
            alert("Merchandiser Manager registered successfully ✅");
            console.log(res);
          },
          error: (err) => {
            alert("Registration failed ❌");
            console.error(err);
          }
        });
    }
}
