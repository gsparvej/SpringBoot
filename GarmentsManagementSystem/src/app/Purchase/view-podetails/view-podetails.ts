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
printPage(): void {
  const printContents = document.getElementById('po-details')?.innerHTML;
  if (printContents) {
    const popupWin = window.open('', '_blank', 'width=800,height=1000');
    popupWin?.document.open();
    popupWin?.document.write(`
      <html>
        <head>
          <title>Print PO</title>
          <style>
            /* Landscape mode */
            @page {
              size: landscape;
              margin: 20mm;
            }

            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              overflow: hidden;
            }

            .content {
              width: 100%;
              max-width: 90%; /* Ensure it doesn't overflow */
              padding: 20px;
              box-sizing: border-box;
              overflow: auto;
            }

            table {
              width: 100%;
              border-collapse: collapse;
            }

            th, td {
              border: 1px solid #ccc;
              padding: 8px;
              text-align: left;
            }
          </style>
        </head>
        <body onload="window.print(); window.close();">
          <div class="content">
            ${printContents}
          </div>
        </body>
      </html>
    `);
    popupWin?.document.close();
  }
}


}
