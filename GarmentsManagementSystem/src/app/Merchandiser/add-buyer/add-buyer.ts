import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MerchandiserService } from '../../service/Merchandiser/merchandiser-service';
import { Router } from '@angular/router';
import { Buyer } from '../../../model/Merchandiser/buyer.model';

@Component({
  selector: 'app-add-buyer',
  standalone: false,
  templateUrl: './add-buyer.html',
  styleUrl: './add-buyer.css'
})
export class AddBuyer implements OnInit{

  formGroup!: FormGroup;

  constructor(
    private merchandiserService: MerchandiserService,
    private router: Router,
    private formBuilder: FormBuilder, 
  ){}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({

       name :[''],
       country :[''],
       contactPerson :[''],
       phone :[''],
       email :[''],
       address :[''],
       website :['']


    });
  }


  addBuyer(): void {
      const buyer : Buyer = {...this.formGroup.value};
      this.merchandiserService.saveBuyer(buyer).subscribe({
    
        next: (res) => {
    
          console.log(res,'Added Succesfully');
          this.formGroup.reset();
          this.router.navigate(['/viewAllBuyer']);
    
        },
        error: (err) => {
          console.log(err,'Data Not Saved ! Please Check Console')
    
        }
    
    
    
      });
    
    
    
      }



}
