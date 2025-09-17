import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ViewAllEmployee } from './HR/view-all-employee/view-all-employee';
import { AddEmployee } from './HR/add-employee/add-employee';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { Header } from './header/header';

import { AddDepartment } from './HR/add-department/add-department';
import { ViewAllDepartment } from './HR/view-all-department/view-all-department';
import { UpdateEmployee } from './HR/update-employee/update-employee';
import { UpdateDepartment } from './HR/update-department/update-department';
import { AddDesignation } from './HR/add-designation/add-designation';
import { ViewAllDesignation } from './HR/view-all-designation/view-all-designation';
import { ViewAllAttendance } from './HR/view-all-attendance/view-all-attendance';
import { AddAttendance } from './HR/add-attendance/add-attendance';
import { ViewAllLeave } from './HR/view-all-leave/view-all-leave';
import { AddLeave } from './HR/add-leave/add-leave';

import { Home } from './home/home';
import { ViewAllBuyer } from './Merchandiser/view-all-buyer/view-all-buyer';
import { AddBuyer } from './Merchandiser/add-buyer/add-buyer';
import { AddUom } from './Merchandiser/add-uom/add-uom';
import { ViewAllUom } from './Merchandiser/view-all-uom/view-all-uom';
import { AddBom } from './Merchandiser/add-bom/add-bom';
import { ViewAllBom } from './Merchandiser/view-all-bom/view-all-bom';
import { AddBomView } from './Merchandiser/add-bom-view/add-bom-view';
import { ViewFullBomView } from './Merchandiser/view-full-bom-view/view-full-bom-view';
import { CreateOrder } from './Merchandiser/create-order/create-order';
import { HalfViewOrder } from './Merchandiser/half-view-order/half-view-order';
import { FullOrderView } from './Merchandiser/full-order-view/full-order-view';
import { AddVendor } from './Purchase/add-vendor/add-vendor';
import { ViewAllVendor } from './Purchase/view-all-vendor/view-all-vendor';
import { ViewVendorPro } from './Purchase/view-vendor-pro/view-vendor-pro';
import { ViewEmpProfile } from './HR/view-emp-profile/view-emp-profile';
import { AddItemList } from './Purchase/add-item-list/add-item-list';
import { ViewAllItem } from './Purchase/view-all-item/view-all-item';
import { Inventory } from './Purchase/inventory/inventory';
import { StockOut } from './Purchase/stock-out/stock-out';
import { StockIn } from './Purchase/stock-in/stock-in';
import { CreateRequisition } from './Purchase/create-requisition/create-requisition';
import { CreatePO } from './Purchase/create-po/create-po';
import { ViewAllPO } from './Purchase/view-all-po/view-all-po';
import { ViewPODetails } from './Purchase/view-podetails/view-podetails';
import { ViewAllRequ } from './Purchase/view-all-requ/view-all-requ';
import { ViewRequDetails } from './Purchase/view-requ-details/view-requ-details';
import { UpdateBuyer } from './Merchandiser/update-buyer/update-buyer';
import { UpdateLeave } from './HR/update-leave/update-leave';

import { ViewUsers } from './User/view-users/view-users';
import { UpdateUsers } from './User/update-users/update-users';
import { ChatComponent } from './Chat/chat-component/chat-component';





import { RawMaterialsCalc } from './Merchandiser/raw-materials-calc/raw-materials-calc';
import { ProductionOrderComponenet } from './Production/production-order-componenet/production-order-componenet';
import { ProductionOrderList } from './Production/production-order-list/production-order-list';
import { LineListComponent } from './Production/line-list-component/line-list-component';
import { MachineListComponent } from './Production/machine-list-component/machine-list-component';
import { AddCuttingPlanComponent } from './Production/add-cutting-plan-component/add-cutting-plan-component';
import { ViewCuttingPlan } from './Production/view-cutting-plan/view-cutting-plan';
import { AddCutBundle } from './Production/add-cut-bundle/add-cut-bundle';
import { ViewCutBundle } from './Production/view-cut-bundle/view-cut-bundle';
import { AddDayWiseProduction } from './Production/add-day-wise-production/add-day-wise-production';
import { ViewDayWiseProduction } from './Production/view-day-wise-production/view-day-wise-production';
import { ViewRawMaterialsCalc } from './Merchandiser/view-raw-materials-calc/view-raw-materials-calc';
import { ProductionSummaryCompo } from './Production/production-summary-compo/production-summary-compo';
import { ProductionReport } from './Production/production-report/production-report';
import { Admin } from './Registration/admin/admin';
import { SuperAdmin } from './Registration/super-admin/super-admin';
import { Login } from './Registration/login/login';
import { AdminProfile } from './Profile/admin-profile/admin-profile';
import { SuperAdminProfile } from './Profile/super-admin-profile/super-admin-profile';
import { AuthInterceptor } from './service/Auth/auth-interceptor';
import { MerchandiserManagerProfile } from './Profile/merchandiser-manager-profile/merchandiser-manager-profile';
import { ProductionManagerProfile } from './Profile/production-manager-profile/production-manager-profile';
import { PurchaseManagerProfile } from './Profile/purchase-manager-profile/purchase-manager-profile';
import { HrAdmin } from './Registration/hr-admin/hr-admin';
import { MerchandiserManager } from './Registration/merchandiser-manager/merchandiser-manager';
import { PurchaseManager } from './Registration/purchase-manager/purchase-manager';
import { ProductionManager } from './Registration/production-manager/production-manager';
import { HrAdminProfile } from './Profile/hr-admin-profile/hr-admin-profile';
import { Navbar } from './navbar/navbar';


@NgModule({
  declarations: [
    App,
    ViewAllEmployee,
    AddEmployee,
    Header,

    AddDepartment,
    ViewAllDepartment,
    UpdateEmployee,
    UpdateDepartment,
    AddDesignation,
    ViewAllDesignation,
    ViewAllAttendance,
    AddAttendance,
    ViewAllLeave,
    AddLeave,
  

   
    Home,
    ViewAllBuyer,
    AddBuyer,
    AddUom,
    ViewAllUom,
    AddBom,
    ViewAllBom,
    AddBomView,
    ViewFullBomView,
    CreateOrder,
    HalfViewOrder,
    FullOrderView,
    AddVendor,
    ViewAllVendor,
    ViewVendorPro,
    ViewEmpProfile,
    AddItemList,
    ViewAllItem,
    Inventory,
    StockOut,
    StockIn,
    CreateRequisition,
    CreatePO,
    ViewAllPO,
    ViewPODetails,
    ViewAllRequ,
    ViewRequDetails,
    UpdateBuyer,
    UpdateLeave,
   
    ViewUsers,
    UpdateUsers,
    ChatComponent,
  

    RawMaterialsCalc,
    ProductionOrderComponenet,
    ProductionOrderList,
    LineListComponent,
    MachineListComponent,
    AddCuttingPlanComponent,
    ViewCuttingPlan,
    AddCutBundle,
    ViewCutBundle,
    AddDayWiseProduction,
    ViewDayWiseProduction,
    ViewRawMaterialsCalc,
    ProductionSummaryCompo,
    ProductionReport,
    Admin,
    SuperAdmin,
    Login,
    AdminProfile,
    SuperAdminProfile,
    MerchandiserManagerProfile,
    ProductionManagerProfile,
    PurchaseManagerProfile,
    HrAdmin,
    MerchandiserManager,
    PurchaseManager,
    ProductionManager,
    HrAdminProfile,
    Navbar

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
    provideHttpClient(withFetch()),

    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [App]
})
export class AppModule { }
