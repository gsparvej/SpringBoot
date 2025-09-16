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
  filteredOrders: Order[] = [];

  searchOrderId: number | null = null;
  errorMessage = '';

  constructor(
    private proSummarySer: ProductionSummaryService,
    private merchanService: MerchandiserService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadAllOrders();
   
  }

  loadAllOrders(): void {
    this.merchanService.getAllOrder().subscribe({
      next: (result: Order[]) => {
        this.orders = result;
        this.filteredOrders = result;
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
      this.proSummarySer.getProductionSummaryAll(order.id).subscribe({
        next: (summary) => {
          this.orderSummaries[order.id] = summary;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error(`Error loading summary for Order ${order.id}:`, err);
        }
      });
    });
  }

  searchOrder(): void {
    if (!this.searchOrderId || this.searchOrderId <= 0) {
      this.errorMessage = 'Please enter a valid Order ID.';
      return;
    }

    const found = this.orders.find(order => order.id === this.searchOrderId);
    if (found) {
      this.filteredOrders = [found];
      this.errorMessage = '';
    } else {
      this.filteredOrders = [];
      this.errorMessage = `Order with ID ${this.searchOrderId} not found.`;
    }
  }

  resetSearch(): void {
    this.filteredOrders = this.orders;
    this.searchOrderId = null;
    this.errorMessage = '';
  }


}
