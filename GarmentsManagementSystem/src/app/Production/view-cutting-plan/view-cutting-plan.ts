import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CuttingPlan } from '../../../model/Production/cuttingPlan.model';
import { CuttingPlanService } from '../../service/Production/cutting-plan-service';

@Component({
  selector: 'app-view-cutting-plan',
  standalone: false,
  templateUrl: './view-cutting-plan.html',
  styleUrl: './view-cutting-plan.css'
})
export class ViewCuttingPlan implements OnInit {

  cuttingPlans: CuttingPlan[] = [];
  filteredCuttingPlans: CuttingPlan[] = [];
  searchOrderId!: number;

  constructor(
    private cuttingPlanService: CuttingPlanService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadCuttingPlans();
  }

  loadCuttingPlans(): void {
    this.cuttingPlanService.getAllCuttingPlan().subscribe({
      next: (data) => {
        this.cuttingPlans = data;
        this.filteredCuttingPlans = [...this.cuttingPlans]; // Set initial filtered data
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading Cutting Plans:', err);
      }
    });
  }

  searchByProductionOrderId(): void {
    if (this.searchOrderId != null) {
      this.filteredCuttingPlans = this.cuttingPlans.filter(
        (order) => order.productionOrder?.id === this.searchOrderId
      );
      console.log('Filtered Results:', this.filteredCuttingPlans);
    } else {
      this.filteredCuttingPlans = [...this.cuttingPlans];
    }
  }

  reset(): void {
    this.searchOrderId = null as any;
    this.filteredCuttingPlans = [...this.cuttingPlans];
    this.cdr.detectChanges();
  }

  deleteCuttingPlan(id: number): void {
    if (confirm('Are you sure to delete this Cutting Plan?')) {
      this.cuttingPlanService.deleteCuttingPlan(id).subscribe({
        next: () => {
          this.cuttingPlans = this.cuttingPlans.filter(cp => cp.id !== id);
          this.filteredCuttingPlans = [...this.cuttingPlans];
        },
        error: (err) => {
          console.error('Error deleting Cutting Plan:', err);
        }
      });
    }
  }
}
