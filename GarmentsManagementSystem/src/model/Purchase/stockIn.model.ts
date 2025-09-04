import { Item } from "./item.model";


export class StockInModel{
    id!: string;
    receivedTransactionDate!: Date;
    itemId!: string;
    quantity!:number;

    item!: Item;
}