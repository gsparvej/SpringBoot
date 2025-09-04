import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Employee } from '../../../model/HR/employee.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HrService } from '../../service/HR/hr-service';
import { Router } from '@angular/router';
import { Leave } from '../../../model/HR/leave.model';

@Component({
  selector: 'app-add-leave',
  standalone: false,
  templateUrl: './add-leave.html',
  styleUrl: './add-leave.css'
})
export class AddLeave implements OnInit {
employee: Employee[] = [];
  formGroup!: FormGroup;

  constructor(
    private hrService: HrService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      leaveType: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      status: ['Pending', Validators.required],
      employee: this.formBuilder.group({   // ✅ FIXED NAME
        id: ['', Validators.required]
      })
    });

    this.loadEmployee();
  }

  addLeave(): void {
    const leave: Leave = this.formGroup.value;

    this.hrService.saveLeave(leave).subscribe({
      next: (response) => {
        console.log(response, 'Leave submitted successfully!');
        this.formGroup.reset();
        this.router.navigate(['/viewAllLeave']);
      },
      error: (err) => {
        console.error('Error submitting leave:', err);
      }
    });
  }

  loadEmployee(): void {
    this.hrService.getAllEmployee().subscribe({
      next: (emp) => {
        this.employee = emp;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading employees:', err);
      }
    });
  }



}
