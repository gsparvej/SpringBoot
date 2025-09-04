import { BomStyle } from "./bom.model";
import { Uom } from "./uom.model";

export interface Bomview{

    id: number;
    serial: number;
    material: string;
    unit: string;
    quantity: number;
    unitPrice: number;
    totalCost: number;
    uom: Uom;
    bom: BomStyle;

}