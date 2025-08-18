import { Order } from './order.model';

export interface FabricReceive {
  id?: number;
  order: Order;              // relation to Order
  receiveDate: string;       // ISO date string
  quantityInMeters: number;
  challanNo: string;
  supplierName: string;
}
