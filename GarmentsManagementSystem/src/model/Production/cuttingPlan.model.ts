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

    actualPcs!: number;
    markerEfficiency!: number;
    fabricLength!: number;
    markerCount!: number;
    remarks!: string;
    createdBy!: string;
    
    markerOutput!: number;
    description!: 'Short Sleeve Shirt' | 'Full Sleeve Shirt';


    uom!: Uom;
    productionOrder!: ProductionOrder;
}