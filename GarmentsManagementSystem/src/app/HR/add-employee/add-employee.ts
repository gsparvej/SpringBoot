import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HrService } from '../../service/HR/hr-service';
import { Designation } from '../../../model/HR/designation.model';

@Component({
  selector: 'app-add-employee',
  standalone: false,
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css'
})
export class AddEmployee implements OnInit {

  allDepartments: any[] = [];
  allDesignations: Designation[] = [];

  selectedDepartment: number = 0;

  formGroup!: FormGroup;

  constructor(
    private hrService: HrService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { 
    this.formGroup = formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      joinDate: ['', Validators.required],
      department: ['', Validators.required],
      designation: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadDepartment();
    this.loadDesignation();
  }

  loadDepartment(): void {
    this.hrService.getAllDepartment().subscribe({
      next: (dep) => {
        this.allDepartments = dep;
        // force Angular to detect changes after async load
        this.cdr.detectChanges();
      },
      error: (err) => console.log(err)
    });
  }

  loadDesignation(): void {
    this.hrService.getAllDesignation().subscribe({
      next: (des) => {
        // wrap in setTimeout to avoid ExpressionChangedAfterItHasBeenCheckedError
        setTimeout(() => {
          this.allDesignations = des;
        });
      },
      error: (err) => console.log(err)
    });
  }

  onDepartmentChange() {
    this.selectedDepartment = this.formGroup.get('department')?.value;

    this.allDesignations = [];
    this.formGroup.get('designation')?.setValue(null);

    if (this.selectedDepartment) {
      this.hrService.getDesignationByDepartment(this.selectedDepartment).subscribe(data => {
        setTimeout(() => {
          this.allDesignations = data;
        });
      });
    }
  }

  onSubmit() {
    if (this.formGroup.invalid) return;

    const formValue = this.formGroup.value;

    const employee: any = {
    name: formValue.name,
    phoneNumber: formValue.phoneNumber,
    email: formValue.email,
    joinDate: formValue.joinDate,
    department: { id: formValue.department },
    designation: { id: formValue.designation }
  };

    this.hrService.saveEmployee(employee).subscribe(() => {
      alert('Employee Saved Successfully!');
      this.formGroup.reset();
      this.allDesignations = [];
      this.router.navigate(['/viewAllEmp']);
    });
  }
}
