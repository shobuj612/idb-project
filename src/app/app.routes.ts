import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TenderComponent } from './notice/tender/tender.component';
import { ETenderComponent } from './notice/e-tender/e-tender.component';
import { CirculerComponent } from './notice/circuler/circuler.component';
import { BuyerListComponent } from './Marchendising/buyer-list/buyer-list.component';
import { AddBuyerComponent } from './Marchendising/add-buyer/add-buyer.component';
import { AddOrderComponent } from './Marchendising/add-order/add-order.component';
import { OrderlistComponent } from './Marchendising/orderlist/orderlist.component';
import { AddMarchendiserOrderComponent } from './Marchendising/add-marchendiser-order/add-marchendiser-order.component';
import { MarchendiserOrderlistComponent } from './Marchendising/marchendiser-orderlist/marchendiser-orderlist.component';
import { AddDesignComponent } from './Design/add-design/add-design.component';
import { DesignListComponent } from './Design/design-list/design-list.component';
import { AddFabricComponent } from './Fabric/add-fabric/add-fabric.component';
import { FabricListComponent } from './Fabric/fabric-list/fabric-list.component';
import { AddCuttingComponent } from './Cutting/add-cutting/add-cutting.component';
import { CuttingListComponent } from './Cutting/cutting-list/cutting-list.component';
import { AddSewingComponent } from './Sewing/add-sewing/add-sewing.component';
import { SewingListComponent } from './Sewing/sewing-list/sewing-list.component';
import { AddFinishingComponent } from './Finishing/add-finishing/add-finishing.component';
import { FinishingListComponent } from './Finishing/finishing-list/finishing-list.component';
import { AddQcCheckComponent } from './Qc/add-qc-check/add-qc-check.component';
import { QcListComponent } from './Qc/qc-list/qc-list.component';
import { AddCollectionComponent } from './Warehouse/add-collection/add-collection.component';
import { CollectioinListComponent } from './Warehouse/collectioin-list/collectioin-list.component';
import { ShipmentlistComponent } from './Shipping/shipmentlist/shipmentlist.component';
import { AddShipmentComponent } from './Shipping/add-shipment/add-shipment.component';
import { Roles } from './Role/role';
import { RoleGuard } from './Guard/role.guard';
import { LoginComponent } from './login/login.component';
 export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'tender', component: TenderComponent },
    { path: 'etender', component: ETenderComponent },
    { path: 'circuler', component: CirculerComponent },
    { path: 'login', component: LoginComponent },
  
    // Marchendising
    { path: 'buyer-list', component: BuyerListComponent, canActivate: [RoleGuard], data: { roles: [Roles.MARCH] } },
    { path: 'add-buyer', component: AddBuyerComponent, canActivate: [RoleGuard], data: { roles: [Roles.MARCH] } },
    { path: 'add-order', component: AddOrderComponent, canActivate: [RoleGuard], data: { roles: [Roles.MARCH] } },
    { path: 'order-list', component: OrderlistComponent, canActivate: [RoleGuard], data: { roles: [Roles.MARCH] } },
    { path: 'add-march-order', component: AddMarchendiserOrderComponent, canActivate: [RoleGuard], data: { roles: [Roles.MARCH] } },
    { path: 'march-order-list', component: MarchendiserOrderlistComponent, canActivate: [RoleGuard], data: { roles: [Roles.MARCH] } },
  
    // Design
    { path: 'add-design', component: AddDesignComponent, canActivate: [RoleGuard], data: { roles: [Roles.DESIGN, Roles.MARCH] } },
    { path: 'design-list', component: DesignListComponent, canActivate: [RoleGuard], data: { roles: [Roles.DESIGN, Roles.MARCH] } },
  
    // Fabric
    { path: 'add-fabric', component: AddFabricComponent, canActivate: [RoleGuard], data: { roles: [Roles.FABRIC, Roles.MARCH] } },
    { path: 'fabric-list', component: FabricListComponent, canActivate: [RoleGuard], data: { roles: [Roles.FABRIC, Roles.MARCH] } },
  
    // Cutting
    { path: 'add-cutting', component: AddCuttingComponent, canActivate: [RoleGuard], data: { roles: [Roles.CUTTING, Roles.MARCH] } },
    { path: 'cutting-list', component: CuttingListComponent, canActivate: [RoleGuard], data: { roles: [Roles.CUTTING, Roles.MARCH] } },
  
    // Sewing
    { path: 'add-sewing', component: AddSewingComponent, canActivate: [RoleGuard], data: { roles: [Roles.SEWING, Roles.MARCH] } },
    { path: 'sewing-list', component: SewingListComponent, canActivate: [RoleGuard], data: { roles: [Roles.SEWING, Roles.MARCH] } },
  
    // Finishing
    { path: 'add-finishing', component: AddFinishingComponent, canActivate: [RoleGuard], data: { roles: [Roles.FINISHING, Roles.MARCH] } },
    { path: 'finishing-list', component: FinishingListComponent, canActivate: [RoleGuard], data: { roles: [Roles.FINISHING, Roles.MARCH] } },
  
    // QC
    { path: 'add-qc', component: AddQcCheckComponent, canActivate: [RoleGuard], data: { roles: [Roles.QC, Roles.MARCH] } },
    { path: 'qc-list', component: QcListComponent, canActivate: [RoleGuard], data: { roles: [Roles.QC, Roles.MARCH] } },
  
    // Warehouse
    { path: 'add-collection', component: AddCollectionComponent, canActivate: [RoleGuard], data: { roles: [Roles.WAREHOUSE, Roles.MARCH] } },
    { path: 'collection-list', component: CollectioinListComponent, canActivate: [RoleGuard], data: { roles: [Roles.WAREHOUSE, Roles.MARCH] } },
  
    // Shipping
    { path: 'add-shipment', component: AddShipmentComponent, canActivate: [RoleGuard], data: { roles: [Roles.SHIPPING, Roles.MARCH] } },
    { path: 'shipment-list', component: ShipmentlistComponent, canActivate: [RoleGuard], data: { roles: [Roles.SHIPPING, Roles.MARCH] } },
  
    // Fallback
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
  ];
