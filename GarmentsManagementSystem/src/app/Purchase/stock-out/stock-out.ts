import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventoryService } from '../../service/Purchase/inventory-service';
import { ItemService } from '../../service/Purchase/item-service';
import { Router } from '@angular/router';
import { InventoryModel } from '../../../model/Purchase/inventory.model';
import { StockOutModel } from '../../../model/Purchase/stockOut.model';
import { Item } from '../../../model/Purchase/item.model';
import { ViewStockService } from '../../service/Purchase/view-stock-service';

@Component({
  selector: 'app-stock-out',
  standalone: false,
  templateUrl: './stock-out.html',
  styleUrl: './stock-out.css'
})
export class StockOut {
  stock: InventoryModel = {
    item: { id: 0, categoryName: '', unit: '' },
    quantity: 0
  };

  items: Item[] = [];
  message: string = '';
  stockOut: StockOutModel[] = [];

  constructor(
    private inventoryService: InventoryService,
    private itemService: ItemService,
    private cdr: ChangeDetectorRef,
    private viewStockService: ViewStockService
  ) { }

  ngOnInit(): void {
    // this.itemService.getAllItem().subscribe({
    //   next: (data) => this.items = data,
    //   error: (err) => console.error('Failed to fetch items', err)
    // });

    this.loadAllItems();
    this.loadAllStockOut();
  }

  removeStock(): void {
    if (this.stock.item.id > 0 && this.stock.quantity > 0) {
      this.inventoryService.removeStock(this.stock).subscribe({
        next: (res) => {
          this.message = res;
          this.stock.quantity = 0;
          this.stock.item.id = 0;
        },
        error: (err) => {
          console.error(err);
          this.message = err.error || 'Failed to remove stock.';
        }
      });
    } else {
      this.message = 'Please select an item and enter a valid quantity.';
    }
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

  loadAllStockOut(): void {

    stock: this.viewStockService.getAllStockOut().subscribe({
      next: (result) => {
        this.stockOut = result;

        console.log('stockOut:', this.stockOut);
        console.log("=====================")
        this.cdr.detectChanges();



      },
      error: (err) => {
        console.error('Error loading data:', err);
        alert('Failed to load Stock Out data');
      }
    });
  }


}
