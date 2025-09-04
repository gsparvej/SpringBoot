import { Order } from "../Merchandiser/order.model";
import { ProductionOrder } from "./productionOrder.model";

export class DayWiseProduction {
    id?: number;

    updatedDate!: Date;
    shortSQty!: number;
    shortMQty!: number;
    shortLQty!: number;
    shortXLQty!: number;
    fullSQty!: number;
    fullMQty!: number;
    fullLQty!: number;
    fullXLQty!: number;

    productionOrder?: ProductionOrder;
    order?: Order;

}