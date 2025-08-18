export interface Order {
  id?: number;
  poNumber: string;
  buyerName: string;
  styleName: string;
  orderQuantity: number;
  deliveryDate: string; 
  orderDate: string;  // ISO date string
}