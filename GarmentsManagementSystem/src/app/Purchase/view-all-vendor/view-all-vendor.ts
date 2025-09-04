import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../service/Purchase/vendor-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-vendor',
  standalone: false,
  templateUrl: './view-all-vendor.html',
  styleUrl: './view-all-vendor.css'
})
export class ViewAllVendor implements OnInit{

  vendor!: any;

  constructor(
    private vs: VendorService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.loadAllVendor();
  }

  loadAllVendor(){
this.vendor = this.vs.getAllVendor();


  }

   getVendorById(id:string): void{
      this.router.navigate(['/viewVendorPro',id]); 
  }

}
