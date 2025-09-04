import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HrService } from '../../service/HR/hr-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-department',
  standalone: false,
  templateUrl: './view-all-department.html',
  styleUrl: './view-all-department.css'
})
export class ViewAllDepartment implements OnInit{

  department: any;

  constructor(
     private hrService: HrService,
     private cdr: ChangeDetectorRef,
     private router: Router

  ){}
  ngOnInit(): void {
   this.loadAllDepartment();
  }
  loadAllDepartment(){
    this.department = this.hrService.getAllDepartment(); 
  }

  getDepartById(id:number): void{

      this.hrService.getDepartmentById(id).subscribe({

      next: (res) => {

      console.log(res,"Id Get Successfully");
      this.router.navigate(['/updateDepart',id]);    // ekhane kaj baki ase *** 

                    },
      error: (err) => {
      console.log(err);


  }


});


  
  }


deleteDepart(id: number ): void {

this.hrService.deleteDepartment(id).subscribe({

  next: (res) => {
    console.log(res)
    this.cdr.reattach();
    this.loadAllDepartment();
  },
  error: (err) => {
    console.log(err);
  }


})

  }

}
