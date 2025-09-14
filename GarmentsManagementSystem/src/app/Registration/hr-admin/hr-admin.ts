import { Component } from '@angular/core';
import { HrAdminService } from '../../service/Auth/hr-admin-service';

@Component({
  selector: 'app-hr-admin',
  standalone: false,
  templateUrl: './hr-admin.html',
  styleUrl: './hr-admin.css'
})
export class HrAdmin {


  // ✅ User fields
  user: any = {
    name: '',
    email: '',
    password: '',
    phone: '',
    photo: '',
    role: 'HRADMIN'
  };

  // ✅ HR Admin fields
  hradmin: any = {
    name: '',
    email: '',
    phone: '',
    gender: '',
    address: '',
    dateOfBirth: '',
    photo: ''
  };


  photoFile: File | null = null;

  constructor(private hrAdminService: HrAdminService) { }

  onFileSelected(event: any) {
    this.photoFile = event.target.files[0];
  }

  registerHRAdmin() {
    if (!this.photoFile) {
      alert("Please select a logo/photo before submitting");
      return;
    }

    this.hrAdminService.registerHRAdmin(this.user, this.hradmin, this.photoFile)
      .subscribe({
        next: (res) => {
          alert(" HR Admin registered successfully ");
          this.resetForm();
          console.log(res);
        },
        error: (err) => {
          alert("Registration failed ❌");
          console.error(err);
        }
      });
  }


   resetForm() {
  // Reset user fields
  this.user = {
    name: '',
    email: '',
    password: '',
    phone: '',
    photo: '',
    role: 'HRADMIN'
  };

  // Reset admin fields
  this.hradmin = {
    name: '',
    email: '',
    phone: '',
    gender: '',
    address: '',
    dateOfBirth: '',
    photo: ''
  };

  // Reset photo file
  this.photoFile = null;

  // Also clear the file input element value if you want
  const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
  if (fileInput) {
    fileInput.value = '';
  }
}
}
