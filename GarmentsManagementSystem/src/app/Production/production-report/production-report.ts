import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, of, Subject, switchMap } from 'rxjs';
import { DayWiseProduction } from '../../../model/Production/dayWiseProduction.model';
import { DayWiseProService } from '../../service/Production/day-wise-pro-service';
import { DayWiseProductionResponseDTO } from '../../../model/productionReportResponseDTO';

@Component({
  selector: 'app-production-report',
  standalone: false,
  templateUrl: './production-report.html',
  styleUrl: './production-report.css'
})
export class ProductionReport implements OnInit{
dayWiseReports: DayWiseProductionResponseDTO[] = [];
  filteredReports: DayWiseProductionResponseDTO[] = [];
  searchOrderId!: number;

  constructor(private dayWiseService: DayWiseProService) {}

  ngOnInit(): void {
    this.fetchDayWiseReports();
  }

  fetchDayWiseReports(): void {
    this.dayWiseService.getDayWiseProductionDTOs().subscribe((data) => {
      this.dayWiseReports = data;
      this.filteredReports = data;
    });
  }

  onOrderIdChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = Number(input.value);

    if (value) {
      this.filteredReports = this.dayWiseReports.filter(
        (report) => report.order?.id === value
      );
    } else {
      this.filteredReports = [...this.dayWiseReports];
    }
  }

  reset(): void {
    this.searchOrderId = 0;
    this.filteredReports = [...this.dayWiseReports];
  }
}
