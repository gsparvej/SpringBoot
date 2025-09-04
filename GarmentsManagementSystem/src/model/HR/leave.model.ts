import { Employee } from "./employee.model";



export class Leave {

    id !: number;
    leaveType !: string;
    fromDate !: Date;
    toDate !: Date;
    status !: 'Rejected' | 'Pending'| 'Confirmed' ;
    employee! : Employee;
    

}