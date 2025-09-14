import { Component } from '@angular/core';
import { MerchandiserManagerService } from '../../service/Auth/merchandiser-manager-service';

@Component({
  selector: 'app-merchandiser-manager',
  standalone: false,
  templateUrl: './merchandiser-manager.html',
  styleUrl: './merchandiser-manager.css'
})
export class MerchandiserManager {


  // ✅ User fields
  user: any = {
    name: '',
    email: '',
    password: '',
    phone: '',
    photo: '',
    role: 'MERCHANDISERMANAGER'
  };

  // ✅ Merchandiser Manager fields
  merchandiser: any = {
    name: '',
    email: '',
    phone: '',
    gender: '',
    address: '',
    dateOfBirth: '',
    photo: ''
  };


  photoFile: File | null = null;

  constructor(private merchandiserManagerService: MerchandiserManagerService) { }

  onFileSelected(event: any) {
    this.photoFile = event.target.files[0];
  }

  registerMerchandiserManager() {
    if (!this.photoFile) {
      alert("Please select a logo/photo before submitting");
      return;
    }

    this.merchandiserManagerService.registerMerchandiserManager(this.user, this.merchandiser, this.photoFile)
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
