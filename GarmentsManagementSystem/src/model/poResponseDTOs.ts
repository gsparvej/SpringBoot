import { ItemResponseDTO } from "./itemResponseDTO";
import { VendorResponseDTO } from "./vendorResponseDTOs";

export interface PurchaseOrderResponseDTO {
    id: number;

    poNumber: string;
    poDate: Date;
    quantity:number;
    rate:number;
    subTotal:number;
    totalAmount:number;
    tax:number;
    deliveryDate:Date;
    termsAndCondition:string;

    vendor: VendorResponseDTO;
    item:ItemResponseDTO;
}