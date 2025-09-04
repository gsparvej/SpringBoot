import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../service/Purchase/item-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-item',
  standalone: false,
  templateUrl: './view-all-item.html',
  styleUrl: './view-all-item.css'
})
export class ViewAllItem implements OnInit{

  item! : any;

   constructor(
    private is: ItemService,
    private router: Router
  ){}
  ngOnInit(): void {
    this.loadAllItem();
  }

   loadAllItem(){
this.item = this.is.getAllItem();


  }


}
