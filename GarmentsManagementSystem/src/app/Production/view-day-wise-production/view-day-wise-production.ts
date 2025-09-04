import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DayWiseProduction } from '../../../model/Production/dayWiseProduction.model';
import { DayWiseProService } from '../../service/Production/day-wise-pro-service';

@Component({
  selector: 'app-view-day-wise-production',
  standalone: false,
  templateUrl: './view-day-wise-production.html',
  styleUrl: './view-day-wise-production.css'
})
export class ViewDayWiseProduction implements OnInit{

  
  dayWise: DayWiseProduction[] = [];
  filteredOrders: DayWiseProduction[] = [];

  searchOrderId!: number;

  constructor(
    private dayWiseService: DayWiseProService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getAllDayWise(); 
  }

  getAllDayWise(): void {
    this.dayWiseService.getAllDayWisePro().subscribe((data) => {
      
      this.dayWise = data;
      this.filteredOrders = data;
      this.cdr.detectChanges();
    });
  }

  searchByOrderId(): void {
    if (this.searchOrderId != null) {
      this.filteredOrders = this.dayWise.filter(
        (order) => order.order?.id === this.searchOrderId,
        console.log("++++++++", this.filteredOrders)
      );
    } else {
      this.filteredOrders = this.dayWise;
    }
  }

   reset(): void {
    this.searchOrderId = null as any;
    this.filteredOrders = [...this.dayWise];
     this.getAllDayWise();
    this.cdr.detectChanges();
  }
}
