import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductionOrderService } from '../../service/Production/production-order-service';
import { ProductionOrder } from '../../../model/Production/productionOrder.model';
import { BomStyle } from '../../../model/Merchandiser/bom.model';
import { Order } from '../../../model/Merchandiser/order.model';
import { MerchandiserService } from '../../service/Merchandiser/merchandiser-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-production-order-componenet',
  standalone: false,
  templateUrl: './production-order-componenet.html',
  styleUrl: './production-order-componenet.css'
})
export class ProductionOrderComponenet implements OnInit {


  productionOrders: ProductionOrder[] = [];

  bomStyle: BomStyle[] = [];
  order: Order[] = [];

  selectedBuyerStyleCode: string = '';


  productionOrderForm!: FormGroup;
  editingOrder: ProductionOrder | null = null;

  constructor(
    private fb: FormBuilder,
    private productionOrderService: ProductionOrderService,
    private merchandiserService: MerchandiserService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {


    this.productionOrderForm = this.fb.group({
      planQty: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['', Validators.required],
      description: ['', Validators.required],
      size: ['', Validators.required],

      bomStyle: this.fb.group({
        id: ['', Validators.required],
        styleCode: ['', Validators.required]
      }),
      order: this.fb.group({
        id: ['', Validators.required]
      })
    });

    this.productionOrderForm.get('bomStyle')?.get('id')?.valueChanges.subscribe(id => {
      const selectedDescription = this.bomStyle.find(b => b.id === id);
      if (selectedDescription) {
        this.selectedBuyerStyleCode = selectedDescription.styleCode;
        console.log('Selected BOMStyle:', selectedDescription);
      } else {
        this.selectedBuyerStyleCode = '';
      }
    });

    this.productionOrderForm.get('order')?.get('id')?.valueChanges.subscribe(id => {
      const selectedOrder = this.order.find(b => b.id === +id);
      if (selectedOrder) {
        console.log('Selected order:', selectedOrder);
      }
    });

    this.loadOrder();
    this.loadStyle();



  }



  loadStyle(): void {
    this.merchandiserService.getAllBom().subscribe({
      next: (styleList) => {
        this.bomStyle = styleList;
        this.cdr.detectChanges();

      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  loadOrder(): void {
    this.merchandiserService.getAllOrder().subscribe({
      next: (order) => {
        this.order = order;
        this.cdr.detectChanges();

      },
      error: (err) => {
        console.log(err);
      }
    });
  }



  
  addProductionOrder(): void {
    // ✅ Directly use form value
    const productionOrder: ProductionOrder = this.productionOrderForm.value;

    this.productionOrderService.createProductionOrder(productionOrder).subscribe({
      next: (or) => {
        console.log(or, 'ordered Successfully !');
        this.loadOrder();
    this.loadStyle();
        this.productionOrderForm.reset();
        this.router.navigate(['productionorderList']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  edit(order: ProductionOrder): void {
    this.editingOrder = order;
    this.productionOrderForm.patchValue(order);
  }

  delete(id: number): void {
    if (confirm('Are you sure to delete this Production Order?')) {
      this.productionOrderService.deleteProductionOrder(id).subscribe(() => {
        this.loadOrder();
        this.loadStyle();
      });
    }
  }
}
