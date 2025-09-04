import { Item } from "./item.model";

export interface InventoryModel {
  item: Item;          // ✅ This is important for binding
  quantity: number;
}