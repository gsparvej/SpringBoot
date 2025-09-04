import { Item } from "./item.model";

export class StockOutModel {
  id!: number;
  quantity!: number;
  transactionDate!: Date;

  item!:Item;
}