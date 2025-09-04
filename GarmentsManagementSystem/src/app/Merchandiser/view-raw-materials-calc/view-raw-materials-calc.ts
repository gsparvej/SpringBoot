import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RawMaterialsModel } from '../../../model/Merchandiser/raw.model';
import { MerchandiserService } from '../../service/Merchandiser/merchandiser-service';

@Component({
  selector: 'app-view-raw-materials-calc',
  standalone: false,
  templateUrl: './view-raw-materials-calc.html',
  styleUrl: './view-raw-materials-calc.css'
})
export class ViewRawMaterialsCalc implements OnInit{

  
  rawMaterials: RawMaterialsModel[] = [];
  filteredOrders: RawMaterialsModel[] = [];

  searchOrderId!: number;

  constructor(
    private merchandiserService: MerchandiserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getAllRawMaterials(); 
  }

  getAllRawMaterials(): void {
    this.merchandiserService.getAllRawMaterials().subscribe((data) => {
      
      this.rawMaterials = data;
      this.filteredOrders = data;
      this.cdr.detectChanges();
    });
  }

  searchByOrderId(): void {
    if (this.searchOrderId != null) {
      this.filteredOrders = this.rawMaterials.filter(
        (order) => order.order?.id === this.searchOrderId,
        console.log("++++++++", this.filteredOrders)
      );
    } else {
      this.filteredOrders = this.rawMaterials;
    }
  }

   reset(): void {
    this.searchOrderId = null as any;
    this.filteredOrders = [...this.rawMaterials];
     this.getAllRawMaterials();
    this.cdr.detectChanges();
  }
}
