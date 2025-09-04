import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HrService } from '../../service/HR/hr-service';
import { Router } from '@angular/router';
import { AuthService } from '../../service/Auth/auth-service';

@Component({
  selector: 'app-view-all-attendance',
  standalone: false,
  templateUrl: './view-all-attendance.html',
  styleUrl: './view-all-attendance.css'
})
export class ViewAllAttendance implements OnInit {
  attendance: any;
  role: string | null = null;

  constructor(
    private hrService: HrService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private authService: AuthService


  ) { }
  ngOnInit(): void {
    this.loadAllAttendance(),
    this.getRole()
  }

  loadAllAttendance() {
    this.attendance = this.hrService.getAllAttendance();


  }


  getAttenById(id: string): void {

    this.hrService.getAttendanceById(id).subscribe({

      next: (res) => {

        console.log(res, "Id Get Successfully");
        this.router.navigate(['/', id]);    // ekhane kaj baki ase *** 

      },
      error: (err) => {
        console.log(err);


      }


    });



  }



  deleteAtten(id: string): void {

    this.hrService.deleteAttendance(id).subscribe({

      next: (res) => {

        this.cdr.reattach();
        this.loadAllAttendance();
      },
      error: (err) => {
        console.log(err);
      }


    })

  }

  addAttendance() {
    // Navigate to attendance form or open modal
    this.router.navigate(['/addAtten']);
  }

  goBack() {
    // Navigate to previous or dashboard
    this.router.navigate(['']);
  }

  getRole(): void {
    this.role = this.authService.getUserRole();
  }


}
