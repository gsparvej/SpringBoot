import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PurchaseRequisition } from '../../../model/Purchase/requisition.model';
import { RequisitionService } from '../../service/Purchase/requisition-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-requ',
  standalone: false,
  templateUrl: './view-all-requ.html',
  styleUrl: './view-all-requ.css'
})
export class ViewAllRequ implements OnInit{

  requisition: PurchaseRequisition[] = [];

  constructor(
    private requisitionService: RequisitionService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ){}
  ngOnInit(): void {
    this.loadAllRequisition();
  }


  loadAllRequisition(): void {
   
      requisition: this.requisitionService.getAllRequisition().subscribe({
      next: (result) => {
        this.requisition = result;     

        console.log('requisitions:', this.requisition);
        this.cdr.detectChanges();


        // ⚠️ Don't navigate here unless needed
        // this.router.navigate(['/viewHalfOrder']);
      },
      error: (err) => {
        console.error('Error loading data:', err);
        alert('Failed to load Req"s data');
      }
    });
  }

    getRequisitionById(id: number): void {
    this.router.navigate(['/viewRequDetails', id]);
  }

}
