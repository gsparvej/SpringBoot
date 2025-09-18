import { Component } from '@angular/core';
import { ProductionManagerService } from '../../service/Auth/production-manager-service';

@Component({
  selector: 'app-production-manager',
  standalone: false,
  templateUrl: './production-manager.html',
  styleUrl: './production-manager.css'
})
export class ProductionManager {
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
      role: 'PRODUCTIONMANAGER'
    };
  
    // ✅ Production Manager fields
    proManager: any = {
      name: '',
      email: '',
      phone: '',
      gender: '',
      address: '',
      dateOfBirth: '',
      photo: ''
    };
  
  
    photoFile: File | null = null;
  
    constructor(private productionManagerService: ProductionManagerService) { }
  
    onFileSelected(event: any) {
      this.photoFile = event.target.files[0];
    }
  
    registerProductionManager() {
      if (!this.photoFile) {
        alert("Please select a logo/photo before submitting");
        return;
      }
  
      this.productionManagerService.registerProductionManager(this.user, this.proManager, this.photoFile)
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
