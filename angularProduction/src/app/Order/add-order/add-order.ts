import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../service/order-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-order',
  standalone: false,
  templateUrl: './add-order.html',
  styleUrl: './add-order.css'
})
export class AddOrder {

  orderForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private router: Router
  ) {
    this.orderForm = this.fb.group({
      poNumber: ['', Validators.required],
      buyerName: ['', Validators.required],
      styleName: ['', Validators.required],
      orderQuantity: ['', [Validators.required, Validators.min(1)]],
      deliveryDate: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.orderForm.valid) {
      this.orderService.createOrder(this.orderForm.value).subscribe({
        next: () => {
          alert('✅ Order created successfully!');
          this.router.navigate(['/orders']); // list এ redirect
        },
        error: (err) => {
          console.error(err);
          alert('❌ Failed to create order');
        }
      });
    }
  }
}
