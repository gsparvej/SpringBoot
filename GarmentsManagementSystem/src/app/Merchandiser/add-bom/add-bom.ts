import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MerchandiserService } from '../../service/Merchandiser/merchandiser-service';
import { Router } from '@angular/router';
import { BomStyle } from '../../../model/Merchandiser/bom.model';

@Component({
  selector: 'app-add-bom',
  standalone: false,
  templateUrl: './add-bom.html',
  styleUrl: './add-bom.css'
})
export class AddBom implements OnInit{

  formBom!: FormGroup;

   constructor(
    private merchandiserService: MerchandiserService,
    private router: Router,
    private formBuilder: FormBuilder, 
  ){}


  ngOnInit(): void {
   this.formBom = this.formBuilder.group({

    styleCode :[''],
    styleType:[''],
    description :['']

   });
  }
  addBom(): void {
        const bom : BomStyle = {...this.formBom.value};
        this.merchandiserService.saveBom(bom).subscribe({
      
          next: (res) => {
      
            console.log(res,'Added Succesfully');
            this.formBom.reset();
            this.router.navigate(['']);
      
          },
          error: (err) => {
            console.log(err,'Data Not Saved ! Please Check Console')
      
          }
      
      
      
        });
      
      
      
        }

}
