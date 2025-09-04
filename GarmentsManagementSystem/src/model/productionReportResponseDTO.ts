import { FullOrderViewResponseDTO } from "./orderResponseDTO";

export interface ProductionOrderResponseDTO {
  id: number;
}

export interface DayWiseProductionResponseDTO {
  id: number;
  updatedDate: string;
  shortSQty: number;
  shortMQty: number;
  shortLQty: number;
  shortXLQty: number;
  fullSQty: number;
  fullMQty: number;
  fullLQty: number;
  fullXLQty: number;
  order: FullOrderViewResponseDTO;
  productionOrder: ProductionOrderResponseDTO;
}