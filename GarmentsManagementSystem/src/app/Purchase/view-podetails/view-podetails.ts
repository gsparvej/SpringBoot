import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { VendorModel } from '../../../model/Purchase/vendor.model';
import { Item } from '../../../model/Purchase/item.model';
import { PoService } from '../../service/Purchase/po-service';
import { ActivatedRoute } from '@angular/router';
import { PurchaseOrder } from '../../../model/Purchase/po.model';

@Component({
  selector: 'app-view-podetails',
  standalone: false,
  templateUrl: './view-podetails.html',
  styleUrl: './view-podetails.css'
})
export class ViewPODetails implements OnInit{

  id!: number;
  po!: PurchaseOrder;

  constructor(
    private poService: PoService,
    private ar: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ){}

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id'];
    this.viewFullPOs();
  }

  viewFullPOs(): void {
  this.poService.getFullPurchaseOrderById(this.id).subscribe({
    next: (data) => {
      if (Array.isArray(data) && data.length > 0) {
        this.po = data[0];  // take the first object
        this.cdr.markForCheck();
      } else {
        console.warn('No order found for ID:', this.id);
      }
      console.log("Full Order:", this.po);
    },
    error: (error) => {
      console.log(error);
    }
  });
}

}
