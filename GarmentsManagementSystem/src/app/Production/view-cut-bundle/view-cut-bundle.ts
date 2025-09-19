import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CutBundle } from '../../../model/Production/cutBundle.model';
import { CutBundleService } from '../../service/Production/cut-bundle-service';

@Component({
  selector: 'app-view-cut-bundle',
  standalone: false,
  templateUrl: './view-cut-bundle.html',
  styleUrl: './view-cut-bundle.css'
})
export class ViewCutBundle implements OnInit {


  cutBundles: CutBundle[] = [];
  filteredBundles: CutBundle[] = [];

  searchOrderId!: number;
  fromDate!: Date;
  toDate!: Date;

  constructor(
    private cutBundleService: CutBundleService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getAllCutbundles();
  }

  getAllCutbundles(): void {
    this.cutBundleService.getAllCutBundle().subscribe((data) => {

      this.cutBundles = data;
      this.filteredBundles = data;
      this.cdr.detectChanges();
    });
  }

  searchByOrderId(): void {
    if (this.searchOrderId != null) {
      this.filteredBundles = this.cutBundles.filter(
        (order) => order.cuttingPlan?.id === this.searchOrderId,
        console.log("++++++++", this.filteredBundles)
      );
    } else {
      this.filteredBundles = this.cutBundles;
    }
  }




searchByDateRange(): void {
  if (this.fromDate && this.toDate) {
    const from = new Date(this.fromDate);
    const to = new Date(this.toDate);

    // Ensure the end date includes the full day
    to.setHours(23, 59, 59, 999);

    this.filteredBundles = this.cutBundles.filter((bundle) => {
      const bundleDate = new Date(bundle.cutBundleDate);
      return bundleDate >= from && bundleDate <= to;
    });

    this.cdr.detectChanges();
  } else {
    this.filteredBundles = [...this.cutBundles]; // fallback
  }
}



  reset(): void {
  this.searchOrderId = null as any;
  this.fromDate = null as any;
  this.toDate = null as any;
  this.filteredBundles = [...this.cutBundles];
  this.getAllCutbundles();
  this.cdr.detectChanges();
}


}
