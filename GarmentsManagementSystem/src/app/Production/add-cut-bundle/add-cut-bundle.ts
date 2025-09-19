import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CutBundle } from '../../../model/Production/cutBundle.model';
import { CuttingPlan } from '../../../model/Production/cuttingPlan.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CuttingPlanService } from '../../service/Production/cutting-plan-service';
import { CutBundleService } from '../../service/Production/cut-bundle-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cut-bundle',
  standalone: false,
  templateUrl: './add-cut-bundle.html',
  styleUrl: './add-cut-bundle.css'
})
export class AddCutBundle implements OnInit{

  
  cutBundles: CutBundle[] = [];

  cuttingPlan: CuttingPlan[] = [];


  selectedBaseFabric: string = '';


  cutBundleForm!: FormGroup;
  editingOrder: CutBundle | null = null;

  constructor(
    private fb: FormBuilder,
    private cuttingPlanService: CuttingPlanService,
    private cutBundleService: CutBundleService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {


    this.cutBundleForm = this.fb.group({
      bundleNo: ['', Validators.required],
      color: ['', Validators.required],
      plannedQty: ['', Validators.required],
      size: ['', Validators.required],
      cutBundleDate: ['' , Validators.required],
      

      cuttingPlan: this.fb.group({

        id: ['', Validators.required],

      }),
    });
   
    this.cutBundleForm.get('cuttingPlan')?.get('id')?.valueChanges.subscribe(id => {
      const selectedOrder = this.cuttingPlan.find(b => b.id === +id);
      if (selectedOrder) {
        console.log('Selected cutting Plan :', selectedOrder);
      }
    });

    this.loadCuttingPlan();
    



  }



  loadCuttingPlan(): void {
    this.cuttingPlanService.getAllCuttingPlan().subscribe({
      next: (cut) => {
        this.cuttingPlan = cut;
        this.cdr.detectChanges();

      },
      error: (err) => {
        console.log(err);
      }
    });
  }






  addCutBundle(): void {
   
    const cutt: CutBundle = this.cutBundleForm.value;

    this.cutBundleService.createCutBundle(cutt).subscribe({
      next: (or) => {
        console.log(or, 'Cut Bundle Successfully !');
        this.loadCuttingPlan();
        this.cutBundleForm.reset();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  edit(cut: CutBundle): void {
    this.editingOrder = cut;
    this.cutBundleForm.patchValue(cut);
  }

  delete(id: number): void {
    if (confirm('Are you sure to delete this Cutting Plan?')) {
      this.cuttingPlanService.deleteCuttingPlan(id).subscribe(() => {
        this.loadCuttingPlan();
       
      });
    }
  }
}
