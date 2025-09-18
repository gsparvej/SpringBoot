import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CuttingPlan } from '../../../model/Production/cuttingPlan.model';
import { Uom } from '../../../model/Merchandiser/uom.model';
import { ProductionOrder } from '../../../model/Production/productionOrder.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CuttingPlanService } from '../../service/Production/cutting-plan-service';
import { MerchandiserService } from '../../service/Merchandiser/merchandiser-service';
import { Router } from '@angular/router';
import { ProductionOrderService } from '../../service/Production/production-order-service';

@Component({
  selector: 'app-add-cutting-plan-component',
  standalone: false,
  templateUrl: './add-cutting-plan-component.html',
  styleUrl: './add-cutting-plan-component.css'
})
export class AddCuttingPlanComponent implements OnInit {

  uomList: Uom[] = [];
  productionOrders: ProductionOrder[] = [];

  selectedBaseFabric: string = '';
  cuttingForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cuttingPlanService: CuttingPlanService,
    private merchandiserService: MerchandiserService,
    private productionOrderService: ProductionOrderService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadUoms();
    this.loadProductionOrders();
    this.setupFormListeners();
  }

  // 👉 Initialize form with all controls and default values
  private initializeForm(): void {
    this.cuttingForm = this.fb.group({
      markerNo: ['', Validators.required],
      fabricWidth: [0, [Validators.required, Validators.min(1)]],
      layCount: [0, [Validators.required, Validators.min(1)]],
      plannedPcs: [0, [Validators.required, Validators.min(1)]],
      fabricUsed: [0, [Validators.required, Validators.min(0)]],
      status: ['', Validators.required],
      cuttingDate: ['', Validators.required],

      actualPcs: [0],
      markerEfficiency: [{ value: 0, disabled: true }],
      fabricLength: [0],
      markerCount: [0],
      remarks: [''],
      createdBy: [''],

      uom: this.fb.group({
        id: ['', Validators.required]
      }),
      productionOrder: this.fb.group({
        id: ['', Validators.required]
      })
    });
  }

  // 👉 Listen to form changes for dynamic behaviors
  private setupFormListeners(): void {
    // Auto-calculate efficiency on actual or planned change
    this.cuttingForm.get('actualPcs')?.valueChanges.subscribe(() => {
      this.calculateEfficiency();
    });

    this.cuttingForm.get('plannedPcs')?.valueChanges.subscribe(() => {
      this.calculateEfficiency();
    });

    // Show selected UOM size
    this.cuttingForm.get('uom.id')?.valueChanges.subscribe((id: number) => {
      const selected = this.uomList.find(u => u.id === +id);
      this.selectedBaseFabric = selected?.size || '';
    });

    // Make actualPcs required if status is 'Completed'
    this.cuttingForm.get('status')?.valueChanges.subscribe((status: string) => {
      const actualPcsControl = this.cuttingForm.get('actualPcs');
      if (status === 'Completed') {
        actualPcsControl?.setValidators([Validators.required, Validators.min(0)]);
      } else {
        actualPcsControl?.clearValidators();
      }
      actualPcsControl?.updateValueAndValidity();
    });
  }

  // 👉 Load UOM from API
  private loadUoms(): void {
    this.merchandiserService.getAllUom().subscribe({
      next: (data) => {
        this.uomList = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error loading UOMs:', err)
    });
  }

  // 👉 Load Production Orders
  private loadProductionOrders(): void {
    this.productionOrderService.getAllProductionOrder().subscribe({
      next: (data) => {
        this.productionOrders = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error loading production orders:', err)
    });
  }

  // 👉 Calculate marker efficiency
  private calculateEfficiency(): void {
    const actual = +this.cuttingForm.get('actualPcs')?.value || 0;
    const planned = +this.cuttingForm.get('plannedPcs')?.value || 0;

    if (planned > 0 && actual >= 0) {
      const efficiency = (actual / planned) * 100;
      this.cuttingForm.get('markerEfficiency')?.setValue(+efficiency.toFixed(2), { emitEvent: false });
    } else {
      this.cuttingForm.get('markerEfficiency')?.setValue(0, { emitEvent: false });
    }
  }

  // 👉 Submit form data to backend
  addCuttingPlan(): void {
    if (this.cuttingForm.invalid) {
      this.cuttingForm.markAllAsTouched();
      return;
    }

    // Enable markerEfficiency to include it in form.value
    this.cuttingForm.get('markerEfficiency')?.enable();

    const cuttingPlan: CuttingPlan = this.cuttingForm.value;

    this.cuttingPlanService.createCuttingPlan(cuttingPlan).subscribe({
      next: (res) => {
        console.log('✅ Cutting Plan created successfully:', res);
        this.resetForm();
        this.router.navigate(['productionorderList']);
      },
      error: (err) => {
        console.error('❌ Error creating cutting plan:', err);
      }
    });
  }

  // 👉 Reset the form to defaults
  private resetForm(): void {
    this.cuttingForm.reset({
      markerNo: '',
      fabricWidth: 0,
      layCount: 0,
      plannedPcs: 0,
      fabricUsed: 0,
      status: '',
      cuttingDate: '',
      actualPcs: 0,
      markerEfficiency: 0,
      fabricLength: 0,
      markerCount: 0,
      remarks: '',
      createdBy: '',
      uom: { id: '' },
      productionOrder: { id: '' }
    });

    // Disable efficiency again
    this.cuttingForm.get('markerEfficiency')?.disable();
    this.selectedBaseFabric = '';
    this.cdr.detectChanges();
  }

  // 👉 Optional Edit method (if using edit mode)
  edit(plan: CuttingPlan): void {
    this.cuttingForm.patchValue(plan);
    this.selectedBaseFabric = plan.uom?.size || '';
  }

  // 👉 Delete Cutting Plan
  delete(id: number): void {
    if (confirm('Are you sure to delete this Cutting Plan?')) {
      this.cuttingPlanService.deleteCuttingPlan(id).subscribe(() => {
        console.log('🗑️ Deleted Cutting Plan:', id);
        this.loadUoms();
        this.loadProductionOrders();
      });
    }
  }



































  // cuttingPlans: CuttingPlan[] = [];

  // uom: Uom[] = [];
  // productionOrder: ProductionOrder[] = [];

  // selectedBaseFabric: string = '';


  // cuttingForm!: FormGroup;
  // editingOrder: CuttingPlan | null = null;

  // constructor(
  //   private fb: FormBuilder,
  //   private cuttingPlanService: CuttingPlanService,
  //   private merchandiserService: MerchandiserService,
  //   private productionService: ProductionOrderService,
  //   private cdr: ChangeDetectorRef,
  //   private router: Router
  // ) { }

  // ngOnInit(): void {


  //   this.cuttingForm = this.fb.group({
  //     markerNo: ['', Validators.required],
  //     fabricWidth: ['', Validators.required],
  //     layCount: ['', Validators.required],
  //     plannedPcs: ['', Validators.required],
  //     fabricUsed: ['', Validators.required],
  //     status: ['', Validators.required],
  //     cuttingDate: ['', Validators.required],

  //     uom: this.fb.group({

  //       id: ['', Validators.required],

  //     }),
  //     productionOrder: this.fb.group({
  //       id: ['', Validators.required]
  //     })
  //   });
  //   this.cuttingForm.get('uom.id')?.valueChanges.subscribe((id: number) => {
  //     const selected = this.uom.find(i => i.id === +id);
  //     if (selected) {
  //       this.selectedBaseFabric = selected.size;
  //       console.log('Selected size:', selected.size);
  //     } else {
  //       this.selectedBaseFabric = '';
  //     }
  //   });

  //   this.cuttingForm.get('productionOrder')?.get('id')?.valueChanges.subscribe(id => {
  //     const selectedOrder = this.productionOrder.find(b => b.id === +id);
  //     if (selectedOrder) {
  //       console.log('Selected Production Order:', selectedOrder);
  //     }
  //   });

  //   this.loadBaseFabric();
  //   this.loadProductionOrder();



  // }



  // loadBaseFabric(): void {
  //   this.merchandiserService.getAllUom().subscribe({
  //     next: (baseFabric) => {
  //       this.uom = baseFabric;
  //       this.cdr.detectChanges();

  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   });
  // }

  // loadProductionOrder(): void {
  //   this.productionService.getAllProductionOrder().subscribe({
  //     next: (order) => {
  //       this.productionOrder = order;
  //       this.cdr.detectChanges();

  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   });
  // }




  // addCuttingPlan(): void {
  //   // ✅ Directly use form value
  //   const cutting: CuttingPlan = this.cuttingForm.value;

  //   this.cuttingPlanService.createCuttingPlan(cutting).subscribe({
  //     next: (or) => {
  //       console.log(or, 'Cutting Successfully !');
  //       this.loadBaseFabric();
  //       this.loadProductionOrder();
  //       this.cuttingForm.reset({
  //         markerNo: '',
  //         fabricWidth: '',
  //         layCount: '',
  //         plannedPcs: '',
  //         fabricUsed: '',
  //         status: '',
  //         cuttingDate: '',
  //         uom: { id: '' },
  //         productionOrder: { id: '' }
  //       });

  //       this.router.navigate(['productionorderList']);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   });
  // }

  // edit(cut: CuttingPlan): void {
  //   this.editingOrder = cut;
  //   this.cuttingForm.patchValue(cut);
  // }

  // delete(id: number): void {
  //   if (confirm('Are you sure to delete this Cutting Plan?')) {
  //     this.cuttingPlanService.deleteCuttingPlan(id).subscribe(() => {
  //       this.loadBaseFabric();
  //       this.loadProductionOrder();
  //     });
  //   }
  // }


}
