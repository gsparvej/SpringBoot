import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HrService } from '../../service/HR/hr-service';
import { Router } from '@angular/router';
import { Employee } from '../../../model/HR/employee.model';
import { Department } from '../../../model/HR/department.model';
import { Designation } from '../../../model/HR/designation.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-view-all-employee',
  standalone: false,
  templateUrl: './view-all-employee.html',
  styleUrl: './view-all-employee.css'
})
export class ViewAllEmployee implements OnInit{

emp! : Employee;

employees: Employee[] = [];
departments: Department[] = [];
designations: Designation[] = [];


constructor(
private hrService: HrService,
private cdr: ChangeDetectorRef,
private router: Router,


){}

  ngOnInit(): void {
    this.loadAllEmployee();
  }

  loadAllEmployee(){
     forkJoin({

  employees: this.hrService.getAllEmployee(),
  departments: this.hrService.getAllDepartment(),
  designations: this.hrService.getAllDesignation()

}).subscribe({
  next: ({ employees, departments, designations }) => {
    this.employees = employees;
    this.departments = departments;
    this.designations = designations;
    this.router.navigate(['/viewAllEmp']);
    this.cdr.detectChanges();
  },
  error: (err) => {
    console.log('Error loading Data : ',err);
    alert('Failed to load employees or lookup data ');

  }
});


  }
  getDepartmentName(id: number): string {
    return this.departments.find(d => d.id == id)?.name || '';
  }
  getDesignationTitle(id: number): string {
    return this.designations.find(desig => desig.id == id)?.designationTitle || '';

  }


  getEmpById(id:number): void{
      this.router.navigate(['/updateEmp',id]); 
  }


deleteEmp(id: number ): void {
if (confirm('Are You sure ! want to delete this employee?')) {
  this.hrService.deleteEmployee(id).subscribe(() => {
    alert('Deleted ! ');
    this.loadAllEmployee();
  });
}
  }
  gotoViewProfile(id: number): void{
    this.router.navigate(['/viewProfile',id]);

  }


}
