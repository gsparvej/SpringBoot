import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MerchandiserService } from '../../service/Merchandiser/merchandiser-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-buyer',
  standalone: false,
  templateUrl: './view-all-buyer.html',
  styleUrl: './view-all-buyer.css'
})
export class ViewAllBuyer implements OnInit{

  buyer: any;

  constructor(
    private merchandiserService: MerchandiserService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ){}

  ngOnInit(): void {
    this.loadAllBuyer();
  }

   loadAllBuyer(){
this.buyer = this.merchandiserService.getAllBuyer();


  }

   getBuyById(id:string): void{
      this.router.navigate(['/updateBuy',id]); 
  }


}
