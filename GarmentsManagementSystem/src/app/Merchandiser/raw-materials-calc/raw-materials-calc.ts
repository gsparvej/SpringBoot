import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Uom } from '../../../model/Merchandiser/uom.model';
import { Order } from '../../../model/Merchandiser/order.model';
import { Bomview } from '../../../model/Merchandiser/bomview.model';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MerchandiserService } from '../../service/Merchandiser/merchandiser-service';
import { Router } from '@angular/router';
import { RawMaterialsModel } from '../../../model/Merchandiser/raw.model';
import { error } from 'node:console';

@Component({
  selector: 'app-raw-materials-calc',
  standalone: false,
  templateUrl: './raw-materials-calc.html',
  styleUrl: './raw-materials-calc.css'
})
export class RawMaterialsCalc implements OnInit {

  order: any[] = [];  // Replace with your Order[] model
  uom: any[] = [];    // Replace with your Uom[] model

  formRawMaterials!: FormGroup;
  totalCalculatedFabric: number = 0;

  constructor(
    private merchandiserService: MerchandiserService,
    private router: Router,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.formRawMaterials = this.fb.group({
      selectedStyle: [''],
      order: this.fb.group({
        shortSmallSize: [''],
        shortMediumSize: [''],
        shortLargeSize: [''],
        shortXLSize: [''],
        fullSmallSize: [''],
        fullMediumSize: [''],
        fullLargeSize: [''],
        fullXLSize: ['']
      }),
      uoms: this.fb.array([])
    });

    this.loadOrder();
    this.loadUom();

    // initialize 8 rows
    for (let i = 0; i < 8; i++) {
      this.addUomRow();
    }
  }

  loadOrder(): void {
    this.merchandiserService.getAllOrder().subscribe({
      next: res => {
        this.order = res;
        this.cdr.detectChanges();
      },
      error: err => console.error(err)
    });
  }

  loadUom(): void {
    this.merchandiserService.getAllUom().subscribe({
      next: res => {
        this.uom = res;
        this.cdr.detectChanges();
      },
      error: err => console.error(err)
    });
  }

  onStyleChange(): void {
    const styleCode = this.formRawMaterials.get('selectedStyle')?.value;
    if (!styleCode) {
      this.formRawMaterials.get('order')?.reset();
      this.totalCalculatedFabric = 0;
      return;
    }

    this.merchandiserService.getOrderByStyle(styleCode).subscribe({
      next: (data: any[]) => {
        if (data.length > 0) {
          this.patchOrderForm(data[0]);
          this.calculateFabricRequirement();
        } else {
          this.formRawMaterials.get('order')?.reset();
          this.totalCalculatedFabric = 0;
        }
      },
      error: err => {
        console.error(err);
        this.formRawMaterials.get('order')?.reset();
        this.totalCalculatedFabric = 0;
      }
    });
  }

  patchOrderForm(orderData: any): void {
    this.formRawMaterials.get('order')?.patchValue({
      shortSmallSize: orderData.shortSmallSize || 0,
      shortMediumSize: orderData.shortMediumSize || 0,
      shortLargeSize: orderData.shortLargeSize || 0,
      shortXLSize: orderData.shortXLSize || 0,
      fullSmallSize: orderData.fullSmallSize || 0,
      fullMediumSize: orderData.fullMediumSize || 0,
      fullLargeSize: orderData.fullLargeSize || 0,
      fullXLSize: orderData.fullXLSize || 0
    });
  }

  createUomRow(): FormGroup {
    const row = this.fb.group({
      id: [''],
      productName: [''],
      size: [''],
      type: [''],
      baseFabric: [''],
      calculatedFabric: ['']
    });

    row.get('id')?.valueChanges.subscribe(id => {
      if (!id) {
        row.patchValue({
          productName: '',
          size: '',
          type: '',
          baseFabric: '',
          calculatedFabric: ''
        }, { emitEvent: false });
        this.calculateFabricRequirement();
        return;
      }

      const selected = this.uom.find(u => u.id === +id);
      if (selected) {
        // infer type from productName or any logic you want
        let inferredType = '';
        if (selected.productName.toLowerCase().includes('short')) {
          inferredType = 'SHORT';
        } else if (selected.productName.toLowerCase().includes('full')) {
          inferredType = 'FULL';
        }

        row.patchValue({
          productName: selected.productName,
          size: selected.size,
          type: inferredType,
          baseFabric: selected.baseFabric.toString(),
          calculatedFabric: ''
        }, { emitEvent: false });
      } else {
        row.patchValue({
          productName: '',
          size: '',
          type: '',
          baseFabric: '',
          calculatedFabric: ''
        }, { emitEvent: false });
      }

      this.calculateFabricRequirement();
    });

    return row;
  }

  addUomRow(): void {
    this.uomsFormArray.push(this.createUomRow());
  }

  get uomsFormArray(): FormArray {
    return this.formRawMaterials.get('uoms') as FormArray;
  }

  calculateFabricRequirement(): void {
    const orderGroup = this.formRawMaterials.get('order');
    if (!orderGroup) return;

    let total = 0;

    this.uomsFormArray.controls.forEach((control, index) => {
      const row = control as FormGroup;

      const size = (row.get('size')?.value || '').toString().trim().toUpperCase();
      const type = (row.get('type')?.value || '').toString().trim().toUpperCase();
      const baseFabric = parseFloat(row.get('baseFabric')?.value) || 0;

      let quantity = 0;

      if (type === 'SHORT') {
        switch (size) {
          case 'S':
          case 'SMALL':
            quantity = parseInt(orderGroup.get('shortSmallSize')?.value) || 0;
            break;
          case 'M':
          case 'MEDIUM':
            quantity = parseInt(orderGroup.get('shortMediumSize')?.value) || 0;
            break;
          case 'L':
          case 'LARGE':
            quantity = parseInt(orderGroup.get('shortLargeSize')?.value) || 0;
            break;
          case 'XL':
          case 'X-LARGE':
          case 'EXTRA LARGE':
            quantity = parseInt(orderGroup.get('shortXLSize')?.value) || 0;
            break;
          default:
            console.warn(`Row ${index + 1}: Unknown SHORT size '${size}'`);
        }
      } else if (type === 'FULL') {
        switch (size) {
          case 'S':
          case 'SMALL':
            quantity = parseInt(orderGroup.get('fullSmallSize')?.value) || 0;
            break;
          case 'M':
          case 'MEDIUM':
            quantity = parseInt(orderGroup.get('fullMediumSize')?.value) || 0;
            break;
          case 'L':
          case 'LARGE':
            quantity = parseInt(orderGroup.get('fullLargeSize')?.value) || 0;
            break;
          case 'XL':
          case 'X-LARGE':
          case 'EXTRA LARGE':
            quantity = parseInt(orderGroup.get('fullXLSize')?.value) || 0;
            break;
          default:
            console.warn(`Row ${index + 1}: Unknown FULL size '${size}'`);
        }
      } else {
        console.warn(`Row ${index + 1}: Unknown type '${type}'`);
      }

      const calculated = quantity * baseFabric;
      row.get('calculatedFabric')?.setValue(calculated.toFixed(2));
      total += calculated;
    });

    this.totalCalculatedFabric = total;
  }


submitFabricData() {
  const orderGroup = this.formRawMaterials.get('order');
  if (!orderGroup) return;

  const fabricData: RawMaterialsModel = {
    shortSTotalQuantity: orderGroup.get('shortSmallSize')?.value || 0,
    shortMTotalQuantity: orderGroup.get('shortMediumSize')?.value || 0,
    shortLTotalQuantity: orderGroup.get('shortLargeSize')?.value || 0,
    shortXLTotalQuantity: orderGroup.get('shortXLSize')?.value || 0,

    fullSTotalQuantity: orderGroup.get('fullSmallSize')?.value || 0,
    fullMTotalQuantity: orderGroup.get('fullMediumSize')?.value || 0,
    fullLTotalQuantity: orderGroup.get('fullLargeSize')?.value || 0,
    fullXLTotalQuantity: orderGroup.get('fullXLSize')?.value || 0,

    totalFabric: this.totalCalculatedFabric,

    order: this.order.find(o => o.bomStyle.styleCode === this.formRawMaterials.get('selectedStyle')?.value) 
  };

  this.merchandiserService.saveRawMaterials(fabricData).subscribe({
    next: res => {
      alert('Fabric data saved successfully!');
    },
    error: err => {
      console.error(err);
      alert('Error saving fabric data.');
    }
  });
}



}
