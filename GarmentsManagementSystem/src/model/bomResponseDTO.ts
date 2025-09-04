import { BomStyleResponseDTO } from "./bomStyleResponseDTO";
import { UomResponseDTO } from "./uomResponseDTO";

export interface BomResponseDTO {
  id: number;
  serial: number;
  material: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  totalCost: number;
  uom: UomResponseDTO;
  bomStyle: BomStyleResponseDTO;
}