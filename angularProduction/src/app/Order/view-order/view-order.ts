import { Component, OnInit } from '@angular/core';
import { Order } from '../../model/order.model';
import { OrderService } from '../../service/order-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-order',
  standalone: false,
  templateUrl: './view-order.html',
  styleUrl: './view-order.css'
})
export class ViewOrder implements OnInit {

  orders: Order[] = [];
  loading: boolean = true;

  constructor(
    private orderService: OrderService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getAllOrders().subscribe({
      next: (data) => {
        this.orders = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  deleteOrder(id?: number): void {
    if (!id) return;
    if (confirm('Are you sure you want to delete this order?')) {
      this.orderService.deleteOrder(id).subscribe({
        next: () => {
          this.orders = this.orders.filter(o => o.id !== id);
          alert('✅ Order deleted successfully');
        },
        error: (err) => {
          console.error(err);
          alert('❌ Failed to delete order');
        }
      });
    }
  }

  addOrder(): void {
    this.router.navigate(['/order-add']);
  }
}
