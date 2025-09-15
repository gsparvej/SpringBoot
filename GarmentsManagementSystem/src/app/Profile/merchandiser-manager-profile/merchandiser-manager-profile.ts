import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MerchandiserManagerService } from '../../service/Auth/merchandiser-manager-service';

@Component({
  selector: 'app-merchandiser-manager-profile',
  standalone: false,
  templateUrl: './merchandiser-manager-profile.html',
  styleUrl: './merchandiser-manager-profile.css'
})
export class MerchandiserManagerProfile implements OnInit{

  
 

  profile: any = null;
  loading = true;
  error = '';

  imageUrl: string = "http://localhost:8080/images/roleMerchandiserManager/";

  constructor(private merchandiserService: MerchandiserManagerService,
    private cdr: ChangeDetectorRef 
  ) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.merchandiserService.getProfile().subscribe({
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
