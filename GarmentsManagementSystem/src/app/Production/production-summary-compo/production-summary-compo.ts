import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductionSummary } from '../../../model/Production/producSummary.model';
import { ProductionSummaryService } from '../../service/Production/production-summary-service';
import { MerchandiserService } from '../../service/Merchandiser/merchandiser-service';
import { Order } from '../../../model/Merchandiser/order.model';

@Component({
  selector: 'app-production-summary-compo',
  standalone: false,
  templateUrl: './production-summary-compo.html',
  styleUrls: ['./production-summary-compo.css']
})
export class ProductionSummaryCompo implements OnInit {

  orders: Order[] = [];
  orderSummaries: { [orderId: number]: any } = {};

  constructor(
    private proSummarySer: ProductionSummaryService,
    private merchanService: MerchandiserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadAllOrders();
  }

  loadAllOrders(): void {
    this.merchanService.getAllOrder().subscribe({
      next: (result: Order[]) => {
        this.orders = result;
        console.log('Orders:', this.orders);
        this.cdr.detectChanges();
        this.loadAllSummaries();
      },
      error: (err) => {
        console.error('Error loading orders:', err);
        alert('Failed to load orders');
      }
    });
  }

  loadAllSummaries(): void {
    this.orders.forEach(order => {
      this.proSummarySer.getProductionSummary(order.id).subscribe({
        next: (summary) => {
          this.orderSummaries[order.id] = summary;
          console.log(`Summary for Order ${order.id}:`, summary);
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error(`Error loading summary for Order ${order.id}:`, err);
        }
      });
    });
  }


}
