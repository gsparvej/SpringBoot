import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BomStyle } from '../../../model/Merchandiser/bom.model';
import { OrderStatus } from '../../../model/Merchandiser/orderStatus.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MerchandiserService } from '../../service/Merchandiser/merchandiser-service';
import { Router } from '@angular/router';
import { Order } from '../../../model/Merchandiser/order.model';
import { Buyer } from '../../../model/Merchandiser/buyer.model';

@Component({
  selector: 'app-create-order',
  standalone: false,
  templateUrl: './create-order.html',
  styleUrl: './create-order.css'
})
export class CreateOrder implements OnInit {


  orderDate!: Date;
  deliveryDate!: Date;

  shortSmallSize!: number;
  shortSPrice!: number;
  shortMediumSize!: number;
  shortMPrice!: number;
  shortLargeSize!: number;
  shortLPrice!: number;
  shortXLSize!: number;
  shortXLPrice!: number;

  fullSmallSize!: number;
  fullSPrice!: number;
  fullMediumSize!: number;
  fullMPrice!: number;
  fullLargeSize!: number;
  fullLPrice!: number;
  fullXLSize!: number;
  fullXLPrice!: number;

  subTotal!: number;
  vat!: number;
  paidAmount!: number;
  dueAmount!: number;
  total!: number;
  remarks!: string;
  orderStatus!: string;


  bomStyle: BomStyle[] = [];
  buyer: Buyer[] = [];

  selectedBuyerAddress: string = '';

  orderForm!: FormGroup;

  constructor(
    private merchandiserService: MerchandiserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {

    this.orderForm = this.formBuilder.group({
      orderDate: ['', Validators.required],
      deliveryDate: ['', Validators.required],

      shortSmallSize: [''],
      shortSPrice: [''],
      shortMediumSize: [''],
      shortMPrice: [''],
      shortLargeSize: [''],
      shortLPrice: [''],
      shortXLSize: [''],
      shortXLPrice: [''],


      fullSmallSize: [''],
      fullSPrice: [''],
      fullMediumSize: [''],
      fullMPrice: [''],
      fullLargeSize: [''],
      fullLPrice: [''],
      fullXLSize: [''],
      fullXLPrice: [''],

      subTotal: [''],
      vat: [''],
      paidAmount: [''],
      dueAmount: [''],
      total: [''],
      remarks: [''],
      orderStatus: [''],

      bomStyle: this.formBuilder.group({
        id: ['', Validators.required]
      }),
      buyer: this.formBuilder.group({
        id: ['', Validators.required],
        address: ['', Validators.required]
      })
    });

    //  Subscribe for Style Code Changes
    this.orderForm.get('bom')?.get('id')?.valueChanges.subscribe(id => {
      const selectedDescription = this.bomStyle.find(b => b.id === id);
      if (selectedDescription) {
        console.log('Selected BOM:', selectedDescription);
      }
    });

    this.orderForm.get('buyer')?.get('id')?.valueChanges.subscribe(id => {
      const selectedBuyer = this.buyer.find(b => b.id === +id); // convert id to number
      if (selectedBuyer) {
        this.selectedBuyerAddress = selectedBuyer.address;
        console.log('Selected buyer:', selectedBuyer);
      } else {
        this.selectedBuyerAddress = '';
      }
    });







    this.loadStyle();
    this.loadBuyer();
  }

  //  Add Order Method
  // addOrder(): void {
  //   if (this.orderForm.invalid) {
  //     console.log('Form Invalid');
  //     return;
  //   }

  //   const order: Order = {
  //     ...this.orderForm.value,

  //     subTotal: this.subTotal,
  //     total: this.total,
  //     dueAmount: this.dueAmount
  //   };
  //   this.merchandiserService.saveOder(order).subscribe({
  //     next: (savedOrder) => {
  //       console.log(savedOrder, 'Order Successfully Saved!');
  //       this.loadStyle();
  //       this.orderForm.reset();
  //       this.router.navigate(['']);  // Redirect after save
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   });
  // }




  addOrder(): void {
    // ✅ Directly use form value
    const order: Order = this.orderForm.value;

    this.merchandiserService.saveOder(order).subscribe({
      next: (or) => {
        console.log(or, 'ordered Successfully !');
        this.loadBuyer();
        this.loadStyle();
        this.orderForm.reset();
        this.router.navigate(['']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }










  //  Load BOM Styles List
  loadStyle(): void {
    this.merchandiserService.getAllBom().subscribe({
      next: (styleList) => {
        this.bomStyle = styleList;
        this.cdr.detectChanges();

      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  loadBuyer(): void {
    this.merchandiserService.getAllBuyer().subscribe({
      next: (bu) => {
        this.buyer = bu;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }



  subTotalCalculation(): void {

    this.shortSmallSize = this.orderForm.value.shortSmallSize;
    this.shortSPrice = this.orderForm.value.shortSPrice;
    this.shortMediumSize = this.orderForm.value.shortMediumSize;
    this.shortMPrice = this.orderForm.value.shortMPrice;
    this.shortLargeSize = this.orderForm.value.shortLargeSize;
    this.shortLPrice = this.orderForm.value.shortLPrice;
    this.shortXLSize = this.orderForm.value.shortXLSize;
    this.shortXLPrice = this.orderForm.value.shortXLPrice;

    this.fullSmallSize = this.orderForm.value.fullSmallSize;
    this.fullSPrice = this.orderForm.value.fullSPrice;
    this.fullMediumSize = this.orderForm.value.fullMediumSize;
    this.fullMPrice = this.orderForm.value.fullMPrice;
    this.fullLargeSize = this.orderForm.value.fullLargeSize;
    this.fullLPrice = this.orderForm.value.fullLPrice;
    this.fullXLSize = this.orderForm.value.fullXLSize;
    this.fullXLPrice = this.orderForm.value.fullXLPrice;



    this.subTotal = (this.shortSmallSize * this.shortSPrice) +
      (this.shortMediumSize * this.shortMPrice) +
      (this.shortLargeSize * this.shortLPrice) +
      (this.shortXLSize * this.shortXLPrice) +
      (this.fullSmallSize * this.fullSPrice) +
      (this.fullMediumSize * this.fullMPrice) +
      (this.fullLargeSize * this.fullLPrice) +
      (this.fullXLSize * this.fullXLPrice);


  }
  dueAmountCalculation() {

    this.shortSmallSize = this.orderForm.value.shortSmallSize;
    this.shortSPrice = this.orderForm.value.shortSPrice;
    this.shortMediumSize = this.orderForm.value.shortMediumSize;
    this.shortMPrice = this.orderForm.value.shortMPrice;
    this.shortLargeSize = this.orderForm.value.shortLargeSize;
    this.shortLPrice = this.orderForm.value.shortLPrice;
    this.shortXLSize = this.orderForm.value.shortXLSize;
    this.shortXLPrice = this.orderForm.value.shortXLPrice;

    this.fullSmallSize = this.orderForm.value.fullSmallSize;
    this.fullSPrice = this.orderForm.value.fullSPrice;
    this.fullMediumSize = this.orderForm.value.fullMediumSize;
    this.fullMPrice = this.orderForm.value.fullMPrice;
    this.fullLargeSize = this.orderForm.value.fullLargeSize;
    this.fullLPrice = this.orderForm.value.fullLPrice;
    this.fullXLSize = this.orderForm.value.fullXLSize;
    this.fullXLPrice = this.orderForm.value.fullXLPrice;



    this.subTotal = (this.shortSmallSize * this.shortSPrice) +
      (this.shortMediumSize * this.shortMPrice) +
      (this.shortLargeSize * this.shortLPrice) +
      (this.shortXLSize * this.shortXLPrice) +
      (this.fullSmallSize * this.fullSPrice) +
      (this.fullMediumSize * this.fullMPrice) +
      (this.fullLargeSize * this.fullLPrice) +
      (this.fullXLSize * this.fullXLPrice);

    this.vat = this.orderForm.value.vat;
    this.paidAmount = this.orderForm.value.paidAmount;

    this.dueAmount = this.subTotal + (this.vat / 100) - this.paidAmount;
  }

  totalCalculations() {
    this.shortSmallSize = this.orderForm.value.shortSmallSize;
    this.shortSPrice = this.orderForm.value.shortSPrice;
    this.shortMediumSize = this.orderForm.value.shortMediumSize;
    this.shortMPrice = this.orderForm.value.shortMPrice;
    this.shortLargeSize = this.orderForm.value.shortLargeSize;
    this.shortLPrice = this.orderForm.value.shortLPrice;
    this.shortXLSize = this.orderForm.value.shortXLSize;
    this.shortXLPrice = this.orderForm.value.shortXLPrice;

    this.fullSmallSize = this.orderForm.value.fullSmallSize;
    this.fullSPrice = this.orderForm.value.fullSPrice;
    this.fullMediumSize = this.orderForm.value.fullMediumSize;
    this.fullMPrice = this.orderForm.value.fullMPrice;
    this.fullLargeSize = this.orderForm.value.fullLargeSize;
    this.fullLPrice = this.orderForm.value.fullLPrice;
    this.fullXLSize = this.orderForm.value.fullXLSize;
    this.fullXLPrice = this.orderForm.value.fullXLPrice;



    this.subTotal = (this.shortSmallSize * this.shortSPrice) +
      (this.shortMediumSize * this.shortMPrice) +
      (this.shortLargeSize * this.shortLPrice) +
      (this.shortXLSize * this.shortXLPrice) +
      (this.fullSmallSize * this.fullSPrice) +
      (this.fullMediumSize * this.fullMPrice) +
      (this.fullLargeSize * this.fullLPrice) +
      (this.fullXLSize * this.fullXLPrice);
    this.vat = this.orderForm.value.vat;
    this.total = this.subTotal + this.vat;
  }

  onFocusLost() {
    this.dueAmountCalculation();
    this.totalCalculations();
  }
}
