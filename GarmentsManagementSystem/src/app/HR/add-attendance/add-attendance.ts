import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Employee } from '../../../model/HR/employee.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HrService } from '../../service/HR/hr-service';
import { Router } from '@angular/router';
import { Attendance } from '../../../model/HR/attendance.model';

@Component({
  selector: 'app-add-attendance',
  standalone: false,
  templateUrl: './add-attendance.html',
  styleUrl: './add-attendance.css'
})
export class AddAttendance implements OnInit{



  employee: Employee[] = [];


  formGroup!: FormGroup;

  constructor(
    private hrService: HrService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({

      
    attDate:  [new Date().toISOString().substring(0, 10)],  // current date neyar jnno ei code ti 
        status : [''],
    
      employee : this.formBuilder.group({
        id :['', Validators.required],
       
       
      })
    })

    this.loadEmployee();
   

    this.formGroup.get('employees')?.get('id')?.valueChanges.subscribe(id => {
    const selectedEmployee = this.employee.find(emp => emp.id === id);
    if(selectedEmployee) {

      this.formGroup.patchValue({employees: selectedEmployee});
    }
   });



  }


   addAtten(): void {

const atten : Attendance = {...this.formGroup.value};
this.hrService.saveAttendance(atten).subscribe({

  next: (attendance) => {
    console.log(attendance,'Attendance Successfully ! ');
    this.loadEmployee();
    this.formGroup.reset();
    this.router.navigate(['/viewAllAtten']);
  },
  error: (err) => {
    console.log(err);
  }


})


  }




  loadEmployee(): void {

    this.hrService.getAllEmployee().subscribe({

      next: (emp) => {
        this.employee = emp;
        this.cdr.detectChanges();

      },
      error: (err) => {

        console.log(err);
      }

    });

  }

}
