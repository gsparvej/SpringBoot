import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorService } from '../../service/Purchase/vendor-service';
import { VendorModel } from '../../../model/Purchase/vendor.model';


@Component({
  selector: 'app-add-vendor',
  standalone: false,
  templateUrl: './add-vendor.html',
  styleUrl: './add-vendor.css'
})
export class AddVendor implements OnInit{

  formVendor!: FormGroup;

   constructor(
    private vs: VendorService,
    private router: Router,
    private formBuilder: FormBuilder, 
  ){}
  ngOnInit(): void {
     this.formVendor = this.formBuilder.group({

       vendorName :[''],
       companyName :[''],
       contactPerson :[''],
       email :[''],
       phone :[''],
       address :[''],
       tin :[''],
       bin :[''],
       vat :[''],


    });
  }


  addVendor(): void {
        const vendor : VendorModel = {...this.formVendor.value};
        this.vs.saveVendor(vendor).subscribe({
      
          next: (res) => {
      
            console.log(res,'Added Succesfully');
            this.formVendor.reset();
            this.router.navigate(['/viewAllVendor']);
      
          },
          error: (err) => {
            console.log(err,'Data Not Saved ! Please Check Console')
      
          }
      
      
      
        });
      
      
      
        }

}
