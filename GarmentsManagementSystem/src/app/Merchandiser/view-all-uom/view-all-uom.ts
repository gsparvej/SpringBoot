import { Component, OnInit } from '@angular/core';
import { Uom } from '../../../model/Merchandiser/uom.model';
import { MerchandiserService } from '../../service/Merchandiser/merchandiser-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-uom',
  standalone: false,
  templateUrl: './view-all-uom.html',
  styleUrl: './view-all-uom.css'
})
export class ViewAllUom implements OnInit {

  uom: any;
  uomModel: Uom[] = [];

  constructor(
    private merchandiserService: MerchandiserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAllUom();

  }
  loadAllUom() {
    this.uom = this.merchandiserService.getAllUom();
  }

  getUomById(id: string): void {
    this.merchandiserService.getUomById(id).subscribe({
      next: (res) => {
        this.uom = res;
        console.log(res, "Id Get Successfully");
        this.router.navigate(['/updateUom', id]);    // ekhane kaj baki ase *** 
      },
      error: (err) => {
        console.log('err');
      }
    })
  }

  deleteUom(id: string): void {
    if (confirm('Are You sure ! want to delete this employee?')) {
      this.merchandiserService.deleteUom(id).subscribe(() => {
        this.loadAllUom();
        this.router.navigate(['/viewAllUom'])
      });
    }
  }

}



