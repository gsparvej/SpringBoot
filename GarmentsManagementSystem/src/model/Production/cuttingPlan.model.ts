import { Uom } from "../Merchandiser/uom.model";
import { ProductionOrder } from "./productionOrder.model";

export class CuttingPlan {
    id?: number;
    markerNo!: string;
    fabricWidth!: number;
    layCount!: number;
    plannedPcs!: number;
    fabricUsed!: number;
    status!: 'Planned' | 'Running' | 'Completed';
    cuttingDate!: Date;


    uom!: Uom;
    productionOrder!: ProductionOrder;
}