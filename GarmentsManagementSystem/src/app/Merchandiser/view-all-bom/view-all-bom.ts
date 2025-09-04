import { Component, OnInit } from '@angular/core';
import { MerchandiserService } from '../../service/Merchandiser/merchandiser-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-bom',
  standalone: false,
  templateUrl: './view-all-bom.html',
  styleUrl: './view-all-bom.css'
})
export class ViewAllBom implements OnInit {
  bom: any;

  constructor(
    private merchandiserService: MerchandiserService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.loadAllBom();
  }

  loadAllBom() {
    this.bom = this.merchandiserService.getAllBom();
  }

  // bomDetails(id: string):void{
  //   this.router.navigate(['viewBomBomView', id]);
  // }


   bomDetails(styleCode: string) {
    // Navigate to BOM details page with styleCode as route param
    this.router.navigate(['viewBomBomView', styleCode]);
  }

}
