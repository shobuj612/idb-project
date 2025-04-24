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

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'tender',component:TenderComponent},
    {path:'etender',component:ETenderComponent},
    {path:'circuler',component:CirculerComponent},
    {path:'bl',component:BuyerListComponent},
    {path:'ab',component:AddBuyerComponent},
    {path:'ao',component:AddOrderComponent},
    {path:'ol',component:OrderlistComponent},
    {path:'am',component:AddMarchendiserOrderComponent},
    {path:'ml',component:MarchendiserOrderlistComponent},
    {path:'ad',component:AddDesignComponent},
    {path:'dl',component:DesignListComponent},
    {path:'fl',component:FabricListComponent},
    {path:'af',component:AddFabricComponent},
    {path:'ac',component:AddCuttingComponent},
    {path:'cl',component:CuttingListComponent},
    {path:'as',component:AddSewingComponent},
    {path:'sl',component:SewingListComponent},
    {path:'afi',component:AddFinishingComponent},
    {path:'fli',component:FinishingListComponent},
    {path:'aq',component:AddQcCheckComponent},
    {path:'ql',component:QcListComponent},
    {path:'aw',component:AddCollectionComponent},
    {path:'cwl',component:CollectioinListComponent},
    {path:'shiplist',component:ShipmentlistComponent},
    {path:'addship',component:AddShipmentComponent}
];
