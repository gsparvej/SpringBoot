import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from '../../model/order.model';
import { FabricReceiveService } from '../../service/fabric-receive-service';
import { OrderService } from '../../service/order-service';
import { Router } from '@angular/router';
import { FabricReceive } from '../../model/fabricReceive.model';

@Component({
  selector: 'app-add-fabric-receive',
  standalone: false,
  templateUrl: './add-fabric-receive.html',
  styleUrl: './add-fabric-receive.css'
})
export class AddFabricReceive implements OnInit {
  fabricForm: FormGroup;
  orders: Order[] = [];

  constructor(
    private fb: FormBuilder,
    private fabricService: FabricReceiveService,
    private orderService: OrderService,
    private router: Router
  ) {
    this.fabricForm = this.fb.group({
      orderId: [null, Validators.required],
      receiveDate: ['', Validators.required],
      quantityInMeters: [0, [Validators.required, Validators.min(1)]],
      challanNo: ['', Validators.required],
      supplierName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getAllOrders().subscribe({
      next: (data) => this.orders = data,
      error: (err) => console.error(err)
    });
  }

  onSubmit(): void {
    if (this.fabricForm.valid) {
      const formValue = this.fabricForm.value;
      const newFabric: FabricReceive = {
        order: { id: formValue.orderId } as Order,
        receiveDate: formValue.receiveDate,
        quantityInMeters: formValue.quantityInMeters,
        challanNo: formValue.challanNo,
        supplierName: formValue.supplierName
      };

      this.fabricService.createFabricReceive(newFabric).subscribe({
        next: () => {
          alert('✅ Fabric Receive added successfully');
          this.router.navigate(['/fabric-receive-list']);
        },
        error: (err) => {
          console.error(err);
          alert('❌ Failed to add Fabric Receive');
        }
      });
    }
  }

}
