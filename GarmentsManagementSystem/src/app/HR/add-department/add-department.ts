import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HrService } from '../../service/HR/hr-service';
import { Router } from '@angular/router';
import { Department } from '../../../model/HR/department.model';

@Component({
  selector: 'app-add-department',
  standalone: false,
  templateUrl: './add-department.html',
  styleUrl: './add-department.css'
})
export class AddDepartment implements OnInit {

  departments: Department[] = [];
  departForm!: FormGroup;
  editMode = false;
  editId?: number;

  constructor(
    private hrService: HrService,
    private router: Router,
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
     this.loadDepartments();
    this.departForm = this.formBuilder.group({
      name: ['', Validators.required]
    });

   
  }

  loadDepartments(): void {
    this.hrService.getAllDepartment().subscribe(data => {
      this.departments = data;
      this.cdr.markForCheck();
    });
  }

  onSubmit(): void {
    if (this.departForm.invalid) {
      this.departForm.markAllAsTouched(); 
      return;
    }

    const departData: Department = this.departForm.value;

    if (this.editMode && this.editId !== undefined) {
      this.hrService.updateDepartment(this.editId, departData).subscribe(() => {
        this.loadDepartments(); 
        this.resetForm();
        this.cdr.markForCheck();
      });
    } else {
      this.hrService.saveDepartment(departData).subscribe(() => {
        this.loadDepartments();
        this.resetForm();
        this.cdr.markForCheck();
      });
    }
  }

  onEdit(depart: Department): void {
    this.editMode = true;
    this.editId = depart.id;
    this.departForm.patchValue({
      name: depart.name
    });
    this.cdr.markForCheck();
  }

  onDelete(id?: number): void {
    if (id && confirm('Are you sure you want to delete this department?')) {
      this.hrService.deleteDepartment(id).subscribe(() => {
        this.loadDepartments();
        this.cdr.markForCheck();
      });
    }
  }

  resetForm(): void {
    this.editMode = false;
    this.editId = undefined;
    this.departForm.reset();
  }
}
