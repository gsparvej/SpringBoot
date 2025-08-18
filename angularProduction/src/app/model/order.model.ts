export interface Order {
  id?: number;
  poNumber: string;
  buyerName: string;
  styleName: string;
  orderQuantity: number;
  deliveryDate: string;   // ISO date string
}