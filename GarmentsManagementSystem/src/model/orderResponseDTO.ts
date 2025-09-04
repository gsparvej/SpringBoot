import { BomStyleResponseDTO } from "./bomStyleResponseDTO";
import { BuyerResponseDTO } from "./buyerResponseDTO";


export interface FullOrderViewResponseDTO {
  id: number;

  orderDate?: Date;
  deliveryDate?: Date;

  shortSmallSize?: number;
  shortSPrice?: number;
  shortMediumSize?: number;
  shortMPrice?: number;
  shortLargeSize?: number;
  shortLPrice?: number;
  shortXLSize?: number;
  shortXLPrice?: number;

  fullSmallSize?: number;
  fullSPrice?: number;
  fullMediumSize?: number;
  fullMPrice?: number;
  fullLargeSize?: number;
  fullLPrice?: number;
  fullXLSize?: number;
  fullXLPrice?: number;

  subTotal?: number;
  vat?: number;
  paidAmount?: number;
  dueAmount?: number;
  total?: number;
  remarks?: string;
  orderStatus?: 'Pending' | 'Confirmed';

  bomStyle: BomStyleResponseDTO;
  buyer: BuyerResponseDTO;
}
