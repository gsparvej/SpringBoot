import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Designation } from '../../../model/HR/designation.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HrService } from '../../service/HR/hr-service';
import { Department } from '../../../model/HR/department.model';

@Component({
  selector: 'app-add-designation',
  standalone: false,
  templateUrl: './add-designation.html',
  styleUrl: './add-designation.css'
})
export class AddDesignation implements OnInit{

  designations: Designation[] = [];
  departments: Department[] = [];
  desigForm!: FormGroup;
  editing : boolean = false;
  currentId?: number;

  constructor(
    private formBuilder : FormBuilder,
    private hrService: HrService,
    private cdr: ChangeDetectorRef
  ){}


  
  ngOnInit(): void {
    this.loadDesignation();
    this.loadDepartment();

    this.desigForm = this.formBuilder.group({
      designationTitle: ['', Validators.required],
      department: this.formBuilder.group({
        id: [null, Validators.required]
      })
    });
  }
  loadDepartment(): void {
    this.hrService.getAllDepartment().subscribe(data =>{
      this.departments = data;
      this.cdr.markForCheck();
    });
  }

  loadDesignation(): void{
    this.hrService.getAllDesignation().subscribe(data =>{
      this.designations = data;
      this.cdr.detectChanges();
    });
  }

  onSubmit(): void {
    if (this.desigForm.invalid) return;

    const formValue = this.desigForm.value;
    const designation: Designation = {
      designationTitle: formValue.designationTitle,
      department: { id: formValue.department.id }
    };

    if (this.editing && this.currentId != null) {
      this.hrService.updateDesignation(this.currentId, designation).subscribe(() => {
        this.loadDesignation();
        this.resetForm();
      });
    } else {
      this.hrService.saveDesignation(designation).subscribe(() => {
        this.loadDesignation();
        this.resetForm();
      });
    }
  }

  onEdit(desig: Designation): void {
    this.editing = true;
    this.currentId = desig.id;
    this.desigForm.patchValue({
      name: desig.designationTitle,
      depart: { id: desig.department?.id }
    });
  }
  onDelete(id: number | undefined): void {
    if (id && confirm('Are you sure to delete this Designation?')) {
      this.hrService.deleteDesignation(id).subscribe(() => {
        this.loadDesignation();
      });
    }
  }

  resetForm() {
    this.editing = false;
    this.desigForm.reset();
    this.currentId = undefined;
  }

}
