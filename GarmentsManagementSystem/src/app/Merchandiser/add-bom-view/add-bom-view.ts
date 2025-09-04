import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Uom } from '../../../model/Merchandiser/uom.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MerchandiserService } from '../../service/Merchandiser/merchandiser-service';
import { Router } from '@angular/router';
import { Bomview } from '../../../model/Merchandiser/bomview.model';
import { BomStyle } from '../../../model/Merchandiser/bom.model';

@Component({
  selector: 'app-add-bom-view',
  standalone: false,
  templateUrl: './add-bom-view.html',
  styleUrl: './add-bom-view.css'
})
export class AddBomView implements OnInit {

  serial!: number;
  material!: string;
  unit!: string;
  quantity!: number;
  unitPrice!: number;
  totalCost!: number;

  bomStyle: BomStyle[] = [];
  uom: Uom[] = [];

  formBomView!: FormGroup;

  constructor(
    private merchandiserService: MerchandiserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // ✅ Setup form with nested groups
    this.formBomView = this.formBuilder.group({
      serial: [''],
      material: [''],
      unit: [''],
      quantity: [''],
      unitPrice: [''],
      totalCost: [''],
      uom: this.formBuilder.group({
        id: ['']
      }),
      bomStyle: this.formBuilder.group({
        id: ['']
      })
    });

    this.loadBomBom();
    this.loadUom();

    // ✅ Watch for changes in selected BOM id
    this.formBomView.get('bomStyle')?.get('id')?.valueChanges.subscribe(id => {
      const selectedBom = this.bomStyle.find(b => b.id === id);
      if (selectedBom) {
        console.log('Selected BOM:', selectedBom);
      }
    });

    // ✅ Watch for changes in selected UOM id
    this.formBomView.get('uom')?.get('id')?.valueChanges.subscribe(id => {
      const selectedUom = this.uom.find(u => u.id === id);
      if (selectedUom) {
        console.log('Selected UOM:', selectedUom);
      }
    });
  }

  addBomBomView(): void {
    // ✅ Directly use form value
    const bomview: Bomview = this.formBomView.value;

    this.merchandiserService.saveBomView(bomview).subscribe({
      next: (bomview) => {
        console.log(bomview, 'bomview Successfully !');
        this.loadBomBom();
        this.loadUom();
        this.formBomView.reset();
        this.router.navigate(['']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  loadBomBom(): void {
    this.merchandiserService.getAllBom().subscribe({
      next: (bomStyle) => {
        this.bomStyle = bomStyle;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  loadUom(): void {
    this.merchandiserService.getAllUom().subscribe({
      next: (s) => {
        this.uom = s;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  totalCostingPerRow(): void {
    const quantity = this.formBomView.get('quantity')?.value || 0;
    const unitPrice = this.formBomView.get('unitPrice')?.value || 0;
    const totalCost = quantity * unitPrice;

    this.totalCost = totalCost;

    // 🔧 Save it in the form control as well
    this.formBomView.get('totalCost')?.setValue(totalCost);
    this.cdr.detectChanges();
  }

  onFocusLost() {
    this.totalCostingPerRow();
  }
}
