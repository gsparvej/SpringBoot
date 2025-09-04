import { Department } from "../HR/department.model";
import { Order } from "../Merchandiser/order.model";
import { Item } from "./item.model";
import { PurchaseStatus } from "./PRstatus.model";


export class PurchaseRequisition {
  id?: number;                   
  prDate!: Date;                
  requestedBy!: string;         
  quantity!: number;            
  approxUnitPrice!: number;     
  totalEstPrice!: number;       
  prStatus!:  'Pending' | 'Confirmed' ;
  department!: Department; 
  item!: Item;   
  order!: Order;           
}