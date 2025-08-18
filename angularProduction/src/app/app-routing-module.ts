import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrder } from './Order/add-order/add-order';
import { ViewOrder } from './Order/view-order/view-order';
import { AddFabricReceive } from './Fabric/add-fabric-receive/add-fabric-receive';
import { ViewFabricReceive } from './Fabric/view-fabric-receive/view-fabric-receive';


const routes: Routes = [
  {path: 'addOrder', component: AddOrder},
  {path: 'viewOrder', component: ViewOrder},
  {path: 'addFabricReceive', component: AddFabricReceive},
  {path: 'viewFabRe', component: ViewFabricReceive}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
