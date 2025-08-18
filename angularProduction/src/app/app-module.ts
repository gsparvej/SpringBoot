import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AddOrder } from './Order/add-order/add-order';
import { ViewOrder } from './Order/view-order/view-order';
import { AddFabricReceive } from './Fabric/add-fabric-receive/add-fabric-receive';
import { ViewFabricReceive } from './Fabric/view-fabric-receive/view-fabric-receive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NavCompo } from './navbar/nav-compo/nav-compo';

@NgModule({
  declarations: [
    App,
    AddOrder,
    ViewOrder,
    AddFabricReceive,
    ViewFabricReceive,
    NavCompo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [App]
})
export class AppModule { }
