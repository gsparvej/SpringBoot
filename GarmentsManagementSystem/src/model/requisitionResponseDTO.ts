import { DepartmentResponseDTO } from "./departmentResponseDTO";
import { ItemResponseDTO } from "./itemResponseDTO";
import { FullOrderViewResponseDTO } from "./orderResponseDTO";

export interface RequisitionResponseDTO {
     id: number;                   
      prDate: Date;                
      requestedBy: string;         
      quantity: number;            
      approxUnitPrice: number;     
      totalEstPrice: number;       
      prStatus:  'Pending' | 'Confirmed' ;
      department: DepartmentResponseDTO; 
      item: ItemResponseDTO;   
      order: FullOrderViewResponseDTO; 
}