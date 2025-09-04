import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Order } from '../../../model/Merchandiser/order.model';
import { BomStyle } from '../../../model/Merchandiser/bom.model';
import { MerchandiserService } from '../../service/Merchandiser/merchandiser-service';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Buyer } from '../../../model/Merchandiser/buyer.model';
import { FullOrderViewResponseDTO } from '../../../model/orderResponseDTO';
import { BomStyleResponseDTO } from '../../../model/bomStyleResponseDTO';
import { BuyerResponseDTO } from '../../../model/buyerResponseDTO';

@Component({
  selector: 'app-full-order-view',
  standalone: false,
  templateUrl: './full-order-view.html',
  styleUrl: './full-order-view.css'
})
export class FullOrderView implements OnInit {

  id: number = 0;

  order!: FullOrderViewResponseDTO;

  //  order: FullOrderViewResponseDTO = {
  //   id: 0,
  //   orderDate: undefined,
  //   deliveryDate: undefined,

  //   shortSmallSize: 0,
  //   shortSPrice: 0,
  //   shortMediumSize: 0,
  //   shortMPrice: 0,
  //   shortLargeSize: 0,
  //   shortLPrice: 0,
  //   shortXLSize: 0,
  //   shortXLPrice: 0,

  //   fullSmallSize: 0,
  //   fullSPrice: 0,
  //   fullMediumSize: 0,
  //   fullMPrice: 0,
  //   fullLargeSize: 0,
  //   fullLPrice: 0,
  //   fullXLSize: 0,
  //   fullXLPrice: 0,

  //   subTotal: 0,
  //   vat: 0,
  //   paidAmount: 0,
  //   dueAmount: 0,
  //   total: 0,
  //   remarks: '',
  //   orderStatus: 'Pending',

  //   bomStyle: {
  //     id: 0,
  //     styleCode: '',
  //     description: ''
  //   } as BomStyleResponseDTO,

  //   buyer: {
  //     id: 0,
  //     name: '',
  //     address: '',
  //     email: ''
  //   } as BuyerResponseDTO
  // };





  constructor(
    private merchandiserService: MerchandiserService,
    private ar: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id'];
    console.log("++++++++++++++++++++++++++"+ this.id);
    this.viewOrder();
  }

  // viewOrder(): void {
  //   this.merchandiserService.getFullOrderById(this.id).subscribe({
  //     next: (data) => {
  //       this.order = data;  // 👈 assign object
  //       console.log("Full Order:", data);
  //       this.cdr.markForCheck();
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     }
  //   });
  // }


viewOrder(): void {
  this.merchandiserService.getFullOrderById(this.id).subscribe({
    next: (data) => {
      if (Array.isArray(data) && data.length > 0) {
        this.order = data[0];  // take the first object
        this.cdr.markForCheck();
      } else {
        console.warn('No order found for ID:', this.id);
      }
      console.log("Full Order:", this.order);
    },
    error: (error) => {
      console.log(error);
    }
  });
}



    getStatusClass(status: string): string {
    switch (status?.toLowerCase()) {
      case 'pending':
        return 'bg-warning';
      case 'confirmed':
        return 'bg-success';
      default:
        return 'bg-secondary';
    }
  }

  // getStatusClass(status: string): string {
  //   switch (status.toLowerCase()) {
  //     case 'pending':
  //       return 'bg-warning';
  //     case 'confirmed':
  //       return 'bg-success';
  //     default:
  //       return 'bg-secondary';
  //   }
  // }
}
