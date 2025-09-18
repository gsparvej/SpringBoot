import { CuttingPlan } from "./cuttingPlan.model";

export class CutBundle {
  id?: number;
  bundleNo!: string;
  color!: string;
  plannedQty!: number;
  cutBundleDate!: Date;
  size!: 'S' | 'M' | 'L' | 'XL' ;

  cuttingPlan?: CuttingPlan;   
           
  
}