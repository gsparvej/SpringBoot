import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HrService } from '../../service/HR/hr-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-leave',
  standalone: false,
  templateUrl: './view-all-leave.html',
  styleUrl: './view-all-leave.css'
})
export class ViewAllLeave implements OnInit{

  leave: any;

   constructor(
private hrService: HrService,
private cdr: ChangeDetectorRef,
private router: Router


){}
  ngOnInit(): void {
   this.loadAllLeave();
  }


     loadAllLeave(){
this.leave = this.hrService.getAllLeave();


  }

    getLeaveById(id:string): void{
      this.router.navigate(['/updateLeave',id]); 
  }

  addLeave() {
  // Navigate to attendance form or open modal
  this.router.navigate(['/addLeave']);
}

goBack() {
  // Navigate to previous or dashboard
  this.router.navigate(['']);
}

}
