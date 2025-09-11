import { Component } from '@angular/core';
import { SuperAdminService } from '../../service/Auth/super-admin-service';

@Component({
  selector: 'app-super-admin',
  standalone: false,
  templateUrl: './super-admin.html',
  styleUrl: './super-admin.css'
})
export class SuperAdmin {


  // ✅ User fields
  user: any = {
    name: '',
    email: '',
    password: '',
    phone: '',
    photo: '',
    role: 'SUPERADMIN'
  };

  // ✅ Super Admin fields
  superadmin: any = {
    name: '',
    email: '',
    phone: '',
    gender: '',
    address: '',
    dateOfBirth: '',
    photo: ''
  };

 
  photoFile: File | null = null;

  constructor(private superAdminService: SuperAdminService) { }

  onFileSelected(event: any) {
    this.photoFile = event.target.files[0];
  }

  registerSuperAdmin() {
    if (!this.photoFile) {
      alert("Please select a logo/photo before submitting");
      return;
    }

    this.superAdminService.registerSuperAdmin(this.user, this.superadmin, this.photoFile)
      .subscribe({
        next: (res) => {
          alert("Super Admin registered successfully ✅");
          console.log(res);
        },
        error: (err) => {
          alert("Registration failed ❌");
          console.error(err);
        }
      });
  }

}
