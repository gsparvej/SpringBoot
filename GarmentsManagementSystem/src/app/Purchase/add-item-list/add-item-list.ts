import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemService } from '../../service/Purchase/item-service';
import { Router } from '@angular/router';
import { Item } from '../../../model/Purchase/item.model';


@Component({
  selector: 'app-add-item-list',
  standalone: false,
  templateUrl: './add-item-list.html',
  styleUrl: './add-item-list.css'
})
export class AddItemList implements OnInit{

  formItem!: FormGroup;

   constructor(
    private is: ItemService,
    private router: Router,
    private formBuilder: FormBuilder, 
  ){}
  ngOnInit(): void {
     this.formItem = this.formBuilder.group({

       
       categoryName :[''],
       unit :['']


    });
  }


  addItem(): void {
          const item : Item = {...this.formItem.value};
          this.is.saveItem(item).subscribe({
        
            next: (res) => {
        
              console.log(res,'Added Succesfully');
              this.formItem.reset();
              this.router.navigate(['/viewAllItem']);
        
            },
            error: (err) => {
              console.log(err,'Data Not Saved ! Please Check Console')
        
            }
        
        
        
          });
        
        
        
          }

}
