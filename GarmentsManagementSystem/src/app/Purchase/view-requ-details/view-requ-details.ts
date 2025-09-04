import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PurchaseRequisition } from '../../../model/Purchase/requisition.model';
import { RequisitionService } from '../../service/Purchase/requisition-service';
import { ActivatedRoute } from '@angular/router';
import { RequisitionResponseDTO } from '../../../model/requisitionResponseDTO';

@Component({
  selector: 'app-view-requ-details',
  standalone: false,
  templateUrl: './view-requ-details.html',
  styleUrl: './view-requ-details.css'
})
export class ViewRequDetails implements OnInit{

   id: number =0;

   requi!: RequisitionResponseDTO;

 

  constructor(
    private requisitionService: RequisitionService,
    private ar: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id'];
    this.viewRequisitions();
  }

  // viewPRs(): void {
  //   this.requisitionService.viewPRDetails(this.id).subscribe({
  //     next: (data) => {
  //       this.requisition = data;
  //       console.log('PR data:', data);
  //       this.cdr.markForCheck();
  //     },
  //     error: (error) => {
  //       console.error('Error loading PR details:', error);
  //     }
  //   });
  // }


  viewRequisitions(): void {
  this.requisitionService.getRequisitionById(this.id).subscribe({
    next: (data) => {
      if (Array.isArray(data) && data.length > 0) {
        this.requi = data[0];  
        this.cdr.markForCheck();
      } else {
        console.warn('No order found for ID:', this.id);
      }
      console.log("Requisition:", this.requi);
    },
    error: (error) => {
      console.log(error);
    }
  });
}



}
