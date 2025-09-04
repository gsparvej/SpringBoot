import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventoryService } from '../../service/Purchase/inventory-service';
import { Item } from '../../../model/Purchase/item.model';
import { ItemService } from '../../service/Purchase/item-service';
import { InventoryModel } from '../../../model/Purchase/inventory.model';


@Component({
  selector: 'app-inventory',
  standalone: false,
  templateUrl: './inventory.html',
  styleUrl: './inventory.css'
})
export class Inventory implements OnInit {
inventories: any[] = [];

  constructor(private inventoryService: InventoryService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadInventories();
  }

  loadInventories(): void {
    this.inventoryService.getInventories().subscribe({
      next: (data) => {
        this.inventories = data;
        this.cdr.markForCheck();
        console.log(this.inventories);
      },
      error: (err) => console.error('Error loading inventories:', err),
    });
  }
}
