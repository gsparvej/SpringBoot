import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DayWiseProduction } from '../../../model/Production/dayWiseProduction.model';
import { DayWiseProService } from '../../service/Production/day-wise-pro-service';

@Component({
  selector: 'app-view-day-wise-production',
  standalone: false,
  templateUrl: './view-day-wise-production.html',
  styleUrl: './view-day-wise-production.css'
})
export class ViewDayWiseProduction implements OnInit {


  dayWise: DayWiseProduction[] = [];
  filteredOrders: DayWiseProduction[] = [];

  searchOrderId!: number;
  fromDate!: Date;
  toDate!: Date;

  constructor(
    private dayWiseService: DayWiseProService,
    private cdr: ChangeDetectorRef
  ) { }

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

 searchByDateRange(): void {
    if (this.fromDate && this.toDate) {
      const from = new Date(this.fromDate);
      const to = new Date(this.toDate);
      to.setHours(23, 59, 59, 999); // include the full end date

      this.filteredOrders = this.dayWise.filter((item) => {
        const prodDate = new Date(item.updatedDate); // replace with your actual date field name
        return prodDate >= from && prodDate <= to;
      });
    } else {
      this.filteredOrders = [...this.dayWise];
    }
    this.cdr.detectChanges();
  }

  reset(): void {
    this.searchOrderId = null as any;
    this.fromDate = null as any;
    this.toDate = null as any;
    this.filteredOrders = [...this.dayWise];
    this.getAllDayWise();
    this.cdr.detectChanges();
  }
}
