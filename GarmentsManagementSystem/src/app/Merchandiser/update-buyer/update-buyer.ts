import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Buyer } from '../../../model/Merchandiser/buyer.model';
import { MerchandiserService } from '../../service/Merchandiser/merchandiser-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-buyer',
  standalone: false,
  templateUrl: './update-buyer.html',
  styleUrl: './update-buyer.css'
})
export class UpdateBuyer implements OnInit{
  id: string = '';
  buyer:any;

  constructor(
    private merchandiserService: MerchandiserService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadBuyerById();
  }



  updateBuyer() : void {
    this.merchandiserService.updateBuyer(this.id, this.buyer).subscribe({
      next: (emp) => {
        this.router.navigate(['/viewAllBuyer'])
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  loadBuyerById(): void {
  this.merchandiserService.getBuyerById(this.id).subscribe(data => {
    this.buyer = data;
    this.cdr.detectChanges();
  });
}

}
