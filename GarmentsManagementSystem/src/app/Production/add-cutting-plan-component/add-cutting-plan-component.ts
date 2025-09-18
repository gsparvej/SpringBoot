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

  private initializeForm(): void {
    this.cuttingForm = this.fb.group({
      markerNo: ['', Validators.required],
      fabricWidth: [0, [Validators.required, Validators.min(1)]],
      layCount: [0, [Validators.required, Validators.min(1)]],
      plannedPcs: [0, [Validators.required, Validators.min(1)]],
      fabricUsed: [{ value: 0, disabled: true }],
      status: ['', Validators.required],
      cuttingDate: ['', Validators.required],

      actualPcs: [0],
      markerEfficiency: [{ value: 0, disabled: true }],
      fabricLength: [0],
      markerCount: [0],
      markerOutput: [0],
      remarks: [''],
      createdBy: [''],
      description: [''],

      uom: this.fb.group({
        id: ['', Validators.required],
        baseFabric: [''],
        size: ['']
      }),

      productionOrder: this.fb.group({
        id: ['', Validators.required]
      })
    });
  }

  private setupFormListeners(): void {
    this.cuttingForm.get('actualPcs')?.valueChanges.subscribe(() => {
      this.calculateEfficiency();
    });

    this.cuttingForm.get('plannedPcs')?.valueChanges.subscribe(() => {
      this.calculateMarkerCount();
      this.calculateFabricLength();
      this.calculateFabricUsed();
      this.calculateEfficiency();
    });

    this.cuttingForm.get('markerOutput')?.valueChanges.subscribe(() => {
      this.calculateMarkerCount();
      this.calculateFabricLength();
      this.calculateFabricUsed();
    });

    this.cuttingForm.get('markerCount')?.valueChanges.subscribe(() => {
      this.calculateFabricLength();
      this.calculateFabricUsed();
    });

    this.cuttingForm.get('fabricLength')?.valueChanges.subscribe(() => {
      this.calculateFabricUsed();
    });

    this.cuttingForm.get('layCount')?.valueChanges.subscribe(() => {
      this.calculateFabricUsed();
    });

    this.cuttingForm.get('fabricWidth')?.valueChanges.subscribe(() => {
      this.calculateFabricUsed();
    });

    this.cuttingForm.get('uom.size')?.valueChanges.subscribe((size: string) => {
      const selected = this.uomList.find(u => u.size === size);
      const uomGroup = this.cuttingForm.get('uom') as FormGroup;

      if (selected) {
        uomGroup.patchValue({
          id: selected.id,
          baseFabric: selected.baseFabric
        });
        this.selectedBaseFabric = selected.baseFabric.toString();
      } else {
        uomGroup.patchValue({ id: '', baseFabric: '' });
        this.selectedBaseFabric = '';
      }

      this.calculateFabricUsed();
    });

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

  private calculateMarkerCount(): void {
    const plannedPcs = +this.cuttingForm.get('plannedPcs')?.value || 0;
    const markerOutput = +this.cuttingForm.get('markerOutput')?.value || 0;

    if (markerOutput > 0) {
      const markerCount = Math.ceil(plannedPcs / markerOutput);
      this.cuttingForm.get('markerCount')?.setValue(markerCount, { emitEvent: false });
    } else {
      this.cuttingForm.get('markerCount')?.setValue(0, { emitEvent: false });
    }
  }

  private calculateFabricLength(): void {
    const markerCount = +this.cuttingForm.get('markerCount')?.value || 0;
    const baseFabric = +this.cuttingForm.get('uom.baseFabric')?.value || 0;

    const fabricLength = markerCount * baseFabric;
    this.cuttingForm.get('fabricLength')?.setValue(+fabricLength.toFixed(2), { emitEvent: false });
  }

  private calculateFabricUsed(): void {
    const fabricLength = +this.cuttingForm.get('fabricLength')?.value || 0;
    const layCount = +this.cuttingForm.get('layCount')?.value || 0;
    const fabricWidth = +this.cuttingForm.get('fabricWidth')?.value || 0;

    const fabricUsed = (fabricLength * layCount * fabricWidth) / 100;
    this.cuttingForm.get('fabricUsed')?.setValue(+fabricUsed.toFixed(2), { emitEvent: false });
  }

  private loadUoms(): void {
    this.merchandiserService.getAllUom().subscribe({
      next: (data) => {
        this.uomList = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error loading UOMs:', err)
    });
  }

  private loadProductionOrders(): void {
    this.productionOrderService.getAllProductionOrder().subscribe({
      next: (data) => {
        this.productionOrders = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error loading production orders:', err)
    });
  }

  addCuttingPlan(): void {
    if (this.cuttingForm.invalid) {
      this.cuttingForm.markAllAsTouched();
      return;
    }

    this.cuttingForm.get('markerEfficiency')?.enable();
    this.cuttingForm.get('fabricUsed')?.enable();

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
      markerOutput: 0,
      remarks: '',
      createdBy: '',
      description: '',
      uom: { id: '', baseFabric: '', size: '' },
      productionOrder: { id: '' }
    });

    this.cuttingForm.get('markerEfficiency')?.disable();
    this.cuttingForm.get('fabricUsed')?.disable();

    this.selectedBaseFabric = '';
    this.cdr.detectChanges();
  }
}
