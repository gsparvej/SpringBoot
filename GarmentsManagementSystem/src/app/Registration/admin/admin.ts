import { Component } from '@angular/core';
import { AdminService } from '../../service/Auth/admin-service';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {


  
    // ✅ User fields
    user: any = {
      name: '',
      email: '',
      password: '',
      phone: '',
      photo: '',
      role: 'ADMIN'
    };
  
    // ✅ Super Admin fields
    admin: any = {
      name: '',
      email: '',
      phone: '',
      gender: '',
      address: '',
      dateOfBirth: '',
      photo: ''
    };
  
   
    photoFile: File | null = null;
  
    constructor(private adminService: AdminService) { }
  
    onFileSelected(event: any) {
      this.photoFile = event.target.files[0];
    }
  
    registerSuperAdmin() {
      if (!this.photoFile) {
        alert("Please select a logo/photo before submitting");
        return;
      }
  
      this.adminService.registerAdmin(this.user, this.admin, this.photoFile)
        .subscribe({
          next: (res) => {
            alert("Admin registered successfully ✅");
            console.log(res);
          },
          error: (err) => {
            alert("Registration failed ❌");
            console.error(err);
          }
        });
    }
}
