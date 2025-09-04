import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MerchandiserService } from '../../service/Merchandiser/merchandiser-service';
import { ActivatedRoute, Router } from '@angular/router';
import { BomResponseDTO } from '../../../model/bomResponseDTO';

@Component({
  selector: 'app-view-full-bom-view',
  standalone: false,
  templateUrl: './view-full-bom-view.html',
  styleUrl: './view-full-bom-view.css'
})
export class ViewFullBomView implements OnInit {

  // styleCode!: string;
  // total!: number;
  // bomview: any;


   styleCode: string = '';
  boms: BomResponseDTO[] = [];


  constructor(
    private merchandiserService: MerchandiserService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private ar: ActivatedRoute
  ) { }


ngOnInit(): void {
  console.log("**********************************")
  // Get styleCode from route param
  this.styleCode = this.ar.snapshot.paramMap.get('styleCode') || '';
  console.log(this.styleCode+"+++++++++++++++++++++++++");

  if (this.styleCode) {
    this.merchandiserService.getBomsByStyleCode(this.styleCode).subscribe({
      next: (data) => {
        this.boms = data;
        console.log(data);
        this.cdr.markForCheck(); // optional if using OnPush
      },
      error: (err) => console.error(err)
    });
  }
}


  // loadAllBomView(){
  //   this.bomview = this.merchandiserService.getAllBomView();
  // }

  // viewBomDetails(styleCode: string) {
  //   this.bomview = this.merchandiserService.getBomByStyle(styleCode);
  // }

  // totalHisab(id: string): void {
  //   this.merchandiserService.getBomByStyle(id).subscribe({
  //     next: (data) => {
  //       this.total = data.reduce((sum: number, item: any) => sum + (item.totalCost || 0), 0);
  //     }
  //   });
  // }

}
