import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Employee } from '../../../model/HR/employee.model';
import { Department } from '../../../model/HR/department.model';
import { Designation } from '../../../model/HR/designation.model';
import { HrService } from '../../service/HR/hr-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: false,
  templateUrl: './update-employee.html',
  styleUrl: './update-employee.css'
})
export class UpdateEmployee implements OnInit {
  id: number = 0;
  employee: Employee = new Employee();
  depart: Department[] = [];
  desig: Designation[] = [];

  constructor(
    private hrService: HrService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadDepartment();
    this.loadDesignation();
    this.loadEmployeeById();
  }


  updateEmployee(): void {
    this.hrService.updateEmployee(this.id, this.employee).subscribe({
      next: (emp) => {
        this.router.navigate(['/viewAllEmp'])
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  loadEmployeeById(): void {
    this.hrService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    });
  }

  loadDepartment(): void {
    this.hrService.getAllDepartment().subscribe({
      next: (de) => {
        this.depart = de;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  loadDesignation(): void {
    this.hrService.getAllDesignation().subscribe({
      next: (de) => {
        this.desig = de;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  compareDepartment(d1: any, d2: any): boolean {
  return d1 && d2 ? d1.id === d2.id : d1 === d2;
}

compareDesignation(d1: any, d2: any): boolean {
  return d1 && d2 ? d1.id === d2.id : d1 === d2;
}

}
