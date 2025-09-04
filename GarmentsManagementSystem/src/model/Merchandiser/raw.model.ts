import { Bomview } from "./bomview.model";
import { Order } from "./order.model";
import { Uom } from "./uom.model";

export class RawMaterialsModel {

    id?: number;

    shortSTotalQuantity!: number;
    shortMTotalQuantity!: number;
    shortLTotalQuantity!: number;
    shortXLTotalQuantity!: number;
    fullSTotalQuantity!: number;
    fullMTotalQuantity!: number;
    fullLTotalQuantity!: number;
    fullXLTotalQuantity!: number;


   
    totalFabric!: number;


    order!: Order;
    

}