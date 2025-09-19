import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductionOrder } from '../../../model/Production/productionOrder.model';
import { ProductionOrderService } from '../../service/Production/production-order-service';

@Component({
  selector: 'app-production-order-list',
  standalone: false,
  templateUrl: './production-order-list.html',
  styleUrl: './production-order-list.css'
})
export class ProductionOrderList implements OnInit{

  productionOrders: ProductionOrder[] = [];
  filteredOrders: ProductionOrder[] = [];

  searchOrderId!: number;
  fromDate!: Date;
  toDate!: Date;

  constructor(
    private productionOrderService: ProductionOrderService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getAllProductionOrders(); 
  }

  getAllProductionOrders(): void {
    this.productionOrderService.getAllProductionOrder().subscribe((data) => {
      
      this.productionOrders = data;
      this.filteredOrders = data;
      this.cdr.detectChanges();
    });
  }

  searchByOrderId(): void {
    if (this.searchOrderId != null) {
      this.filteredOrders = this.productionOrders.filter(
        (order) => order.order?.id === this.searchOrderId,
        console.log("++++++++", this.filteredOrders)
      );
    } else {
      this.filteredOrders = this.productionOrders;
    }
  }


  searchByDateRange(): void {
    if (this.fromDate && this.toDate) {
      const from = new Date(this.fromDate);
      const to = new Date(this.toDate);
      to.setHours(23, 59, 59, 999); // Include entire end date

      this.filteredOrders = this.productionOrders.filter(order => {
        const orderDate = new Date(order.startDate); // Update this property if your date field is named differently
        return orderDate >= from && orderDate <= to;
      });
    } else {
      this.filteredOrders = [...this.productionOrders];
    }

    this.cdr.detectChanges();
  }


    reset(): void {
    this.searchOrderId = null as any;
    this.fromDate = null as any;
    this.toDate = null as any;
    this.filteredOrders = [...this.productionOrders];
    this.getAllProductionOrders();
    this.cdr.detectChanges();
  }
}
