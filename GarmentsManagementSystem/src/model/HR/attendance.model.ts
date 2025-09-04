

import { Employee } from "./employee.model";

export class Attendance {

    id !: number;
    attDate !: Date;
    status! : 'Present' | 'Absent'| 'Late' ;
    employee! : Employee;

  


}