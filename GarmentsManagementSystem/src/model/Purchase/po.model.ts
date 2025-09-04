import { Item } from "./item.model";
import { VendorModel } from "./vendor.model";

export class PurchaseOrder{

    id!: number;
    poNumber!: string;
    poDate!: Date;
    quantity!: number;
    rate!: number;
    subTotal!: number;
    totalAmount!: number;
    tax!: number;
    deliveryDate!: Date;
    termsAndCondition!: string;
    vendor!: VendorModel;
    item!:Item;


}