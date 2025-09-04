import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { InventoryService } from '../../service/Purchase/inventory-service';
import { ItemService } from '../../service/Purchase/item-service';
import { InventoryModel } from '../../../model/Purchase/inventory.model';
import { StockInModel } from '../../../model/Purchase/stockIn.model';
import { Item } from '../../../model/Purchase/item.model';
import { ViewStockService } from '../../service/Purchase/view-stock-service';

@Component({
  selector: 'app-stock-in',
  standalone: false,
  templateUrl: './stock-in.html',
  styleUrl: './stock-in.css'
})

export class StockIn  {
   stock: InventoryModel = {
    item: { id: 0, categoryName: '',unit:'' },
    quantity: 0
  };

  items: Item[] = [];
  stockIn: StockInModel[] = [];
  message = '';


  constructor(
    private inventoryService: InventoryService,
    private itemService: ItemService,
    private cdr: ChangeDetectorRef,
    private viewStockService: ViewStockService
  ) {}

  ngOnInit(): void {
    this.loadAllStockIn();
    this.loadAllItems();

  }

  loadAllItems(): void {
   
      po: this.itemService.getAllItem().subscribe({
      next: (result) => {
        this.items = result;     

        console.log('Items:', this.items);
        this.cdr.detectChanges();


        
      },
      error: (err) => {
        console.error('Error loading data:', err);
        alert('Failed to load POs data');
      }
    });
  }

    loadAllStockIn(): void {
   
      stock: this.viewStockService.getAllStockIn().subscribe({
      next: (result) => {
        this.stockIn = result;     

        console.log('stockIn:', this.stockIn);
        this.cdr.detectChanges();


        
      },
      error: (err) => {
        console.error('Error loading data:', err);
        alert('Failed to load Stock In data');
      }
    });
  }
  //   loadAll(): void {
   
  //     stock: this.viewStockService.getAllStockIn().subscribe({
  //     next: (result) => {
  //       this.stockIn = result;     

  //       console.log('stockIn:', this.stockIn);
  //       this.cdr.detectChanges();


        
  //     },
  //     error: (err) => {
  //       console.error('Error loading data:', err);
  //       alert('Failed to load Stock In data');
  //     }
  //   });
  // }






  addStock(): void {
    if (this.stock.item.id > 0 && this.stock.quantity > 0) {
      this.inventoryService.addStock(this.stock).subscribe({
        next: (res) => {
          this.message = res;
          this.stock.quantity = 0;
          this.stock.item.id = 0;
        },
        error: (err) => this.message = err.error || 'Failed to add stock.'
      });
    } else {
      this.message = 'Please select an item and enter a quantity.';
    }
  }


}
