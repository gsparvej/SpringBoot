import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DayWiseProduction } from '../../../model/Production/dayWiseProduction.model';
import { Order } from '../../../model/Merchandiser/order.model';
import { ProductionOrder } from '../../../model/Production/productionOrder.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductionOrderService } from '../../service/Production/production-order-service';
import { MerchandiserService } from '../../service/Merchandiser/merchandiser-service';
import { DayWiseProService } from '../../service/Production/day-wise-pro-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-day-wise-production',
  standalone: false,
  templateUrl: './add-day-wise-production.html',
  styleUrl: './add-day-wise-production.css'
})
export class AddDayWiseProduction implements OnInit {



  dayWisePro: DayWiseProduction[] = [];

  productionOrder: ProductionOrder[] = [];
  order: Order[] = [];

  selectedBuyerStyleCode: string = '';


  dayWiseProForm!: FormGroup;
  editingOrder: ProductionOrder | null = null;

  constructor(
    private fb: FormBuilder,
    private productionOrderService: ProductionOrderService,
    private merchandiserService: MerchandiserService,
    private dayWiseProservice: DayWiseProService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {


    this.dayWiseProForm = this.fb.group({
      updatedDate: ['', Validators.required],
      shortSQty: [''],
      shortMQty: [''],
      shortLQty: [''],
      shortXLQty: [''],
      fullSQty: [''],
      fullMQty: [''],
      fullLQty: [''],
      fullXLQty: [''],

      productionOrder: this.fb.group({
        id: ['', Validators.required],
      }),
      order: this.fb.group({
        id: ['', Validators.required]
      })
    });

    this.dayWiseProForm.get('productionOrder')?.get('id')?.valueChanges.subscribe(id => {
      const selectedDescription = this.productionOrder.find(b => b.id === id);
      if (selectedDescription) {

        console.log('Selected Production Order:', selectedDescription);
      } else {
        console.log("Check Console");
      }
    });

    this.dayWiseProForm.get('order')?.get('id')?.valueChanges.subscribe(id => {
      const selectedOrder = this.order.find(b => b.id === +id);
      if (selectedOrder) {
        console.log('Selected order:', selectedOrder);
      }
    });

    this.loadOrder();
    this.loadProductionOrder();



  }



  loadProductionOrder(): void {
    this.productionOrderService.getAllProductionOrder().subscribe({
      next: (or) => {
        this.productionOrder = or;
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




  addDayWisePro(): void {
    // ✅ Directly use form value
    const dayWise: DayWiseProduction = this.dayWiseProForm.value;

    this.dayWiseProservice.createDayWiseProduction(dayWise).subscribe({
      next: (or) => {
        console.log(or, 'Day Wise Successfully !');
        this.loadOrder();
        this.loadProductionOrder();
        this.dayWiseProForm.reset();

      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  edit(order: ProductionOrder): void {
    this.editingOrder = order;
    this.dayWiseProForm.patchValue(order);
  }

  delete(id: number): void {
    if (confirm('Are you sure to delete this Production Order?')) {
      this.productionOrderService.deleteProductionOrder(id).subscribe(() => {
        this.loadOrder();
        this.loadProductionOrder();
      });
    }
  }
}
