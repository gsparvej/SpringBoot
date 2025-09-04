import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PurchaseOrder } from '../../../model/Purchase/po.model';
import { PoService } from '../../service/Purchase/po-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-po',
  standalone: false,
  templateUrl: './view-all-po.html',
  styleUrl: './view-all-po.css'
})
export class ViewAllPO implements OnInit{

  po: PurchaseOrder[] = [];

  constructor(
    private poService: PoService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.loadAllPOs();
  }

  loadAllPOs(): void {
   
      po: this.poService.getAllPO().subscribe({
      next: (result) => {
        this.po = result;     

        console.log('po:', this.po);
        this.cdr.detectChanges();


        // ⚠️ Don't navigate here unless needed
        // this.router.navigate(['/viewHalfOrder']);
      },
      error: (err) => {
        console.error('Error loading data:', err);
        alert('Failed to load POs data');
      }
    });
  }

  getPOById(id: number): void {
    this.router.navigate(['/viewPODetails', id]);
  }

}
