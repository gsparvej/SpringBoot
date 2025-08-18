import { Component, OnInit } from '@angular/core';
import { FabricReceive } from '../../model/fabricReceive.model';
import { FabricReceiveService } from '../../service/fabric-receive-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-fabric-receive',
  standalone: false,
  templateUrl: './view-fabric-receive.html',
  styleUrl: './view-fabric-receive.css'
})
export class ViewFabricReceive implements OnInit{

   fabrics: FabricReceive[] = [];
  loading: boolean = true;

  constructor(private fabricService: FabricReceiveService, private router: Router) {}

  ngOnInit(): void {
    this.loadFabrics();
  }

  loadFabrics(): void {
    this.fabricService.getAllFabricReceives().subscribe({
      next: (data) => {
        this.fabrics = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  deleteFabric(id?: number): void {
    if (!id) return;
    if (confirm('Are you sure you want to delete this fabric receive entry?')) {
      this.fabricService.deleteFabricReceive(id).subscribe({
        next: () => {
          this.fabrics = this.fabrics.filter(f => f.id !== id);
          alert('✅ Fabric Receive deleted successfully');
        },
        error: (err) => {
          console.error(err);
          alert('❌ Failed to delete fabric receive');
        }
      });
    }
  }

  addFabric(): void {
    this.router.navigate(['/fabric-receive-add']);
  }
}
