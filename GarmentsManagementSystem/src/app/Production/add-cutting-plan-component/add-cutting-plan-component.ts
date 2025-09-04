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



  cuttingPlans: CuttingPlan[] = [];

  uom: Uom[] = [];
  productionOrder: ProductionOrder[] = [];

  selectedBaseFabric: string = '';


  cuttingForm!: FormGroup;
  editingOrder: CuttingPlan | null = null;

  constructor(
    private fb: FormBuilder,
    private cuttingPlanService: CuttingPlanService,
    private merchandiserService: MerchandiserService,
    private productionService: ProductionOrderService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {


    this.cuttingForm = this.fb.group({
      markerNo: ['', Validators.required],
      fabricWidth: ['', Validators.required],
      layCount: ['', Validators.required],
      plannedPcs: ['', Validators.required],
      fabricUsed: ['', Validators.required],
      status: ['', Validators.required],
      cuttingDate: ['', Validators.required],

      uom: this.fb.group({

        id: ['', Validators.required],

      }),
      productionOrder: this.fb.group({
        id: ['', Validators.required]
      })
    });
    this.cuttingForm.get('uom.id')?.valueChanges.subscribe((id: number) => {
      const selected = this.uom.find(i => i.id === +id);
      if (selected) {
        this.selectedBaseFabric = selected.size;
        console.log('Selected size:', selected.size);
      } else {
        this.selectedBaseFabric = '';
      }
    });

    this.cuttingForm.get('productionOrder')?.get('id')?.valueChanges.subscribe(id => {
      const selectedOrder = this.productionOrder.find(b => b.id === +id);
      if (selectedOrder) {
        console.log('Selected Production Order:', selectedOrder);
      }
    });

    this.loadBaseFabric();
    this.loadProductionOrder();



  }



  loadBaseFabric(): void {
    this.merchandiserService.getAllUom().subscribe({
      next: (baseFabric) => {
        this.uom = baseFabric;
        this.cdr.detectChanges();

      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  loadProductionOrder(): void {
    this.productionService.getAllProductionOrder().subscribe({
      next: (order) => {
        this.productionOrder = order;
        this.cdr.detectChanges();

      },
      error: (err) => {
        console.log(err);
      }
    });
  }




  addCuttingPlan(): void {
    // ✅ Directly use form value
    const cutting: CuttingPlan = this.cuttingForm.value;

    this.cuttingPlanService.createCuttingPlan(cutting).subscribe({
      next: (or) => {
        console.log(or, 'Cutting Successfully !');
        this.loadBaseFabric();
        this.loadProductionOrder();
        this.cuttingForm.reset();
        this.router.navigate(['productionorderList']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  edit(cut: CuttingPlan): void {
    this.editingOrder = cut;
    this.cuttingForm.patchValue(cut);
  }

  delete(id: number): void {
    if (confirm('Are you sure to delete this Cutting Plan?')) {
      this.cuttingPlanService.deleteCuttingPlan(id).subscribe(() => {
        this.loadBaseFabric();
        this.loadProductionOrder();
      });
    }
  }
}
