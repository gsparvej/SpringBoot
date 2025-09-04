import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../../model/HR/employee.model';
import { Department } from '../../../model/HR/department.model';
import { Designation } from '../../../model/HR/designation.model';
import { Attendance } from '../../../model/HR/attendance.model';
import { Leave } from '../../../model/HR/leave.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HrService {

  private baseUrlEmp = environment.apiBaseUrl + '/employee';
  private baseUrlDepart = environment.apiBaseUrl + '/department';
  private baseUrlDesig = environment.apiBaseUrl + '/designation';




private  baseUrlAtten = environment.apiBaseUrl + '/attendance';


private  baseUrlLeave = environment.apiBaseUrl + '/leave';

  
  baseUrlPay: string = "http://localhost:3000/payroll";


  

  constructor(private http: HttpClient) { }


  // Employee add, delete, Update start

  getAllEmployee(): Observable<any> {

    return this.http.get(this.baseUrlEmp);

  }

  getDesignationByDepartment(departmentId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrlDesig}/by-department/${departmentId}`);

  }


  deleteEmployee(id: number): Observable<any> {

    return this.http.delete(this.baseUrlEmp + '/' + id);
  }

  saveEmployee(emp: Employee): Observable<any> {

    return this.http.post(this.baseUrlEmp, emp);
  }

  getEmployeeById(id: number): Observable<any> {

    return this.http.get(this.baseUrlEmp + '/' + id);
  }
  updateEmployee(id: number, emp: Employee): Observable<any> {

    return this.http.put(this.baseUrlEmp + '/' + id, emp);
  }

  // Employee add, delete, Update end



  // Designation add, delete , update start

  getAllDesignation(): Observable<Designation[]> {

    return this.http.get<Designation[]>(this.baseUrlDesig);

  }

  deleteDesignation(id: number): Observable<void> {
    // ekhane sir / ta rakhe ni return line e 
    return this.http.delete<void>(`${this.baseUrlDesig}/${id}`);
  }

  saveDesignation(deisg: Designation): Observable<Designation> {

    return this.http.post<Designation>(this.baseUrlDesig, deisg);
  }

  updateDesignation(id: number, desig: Designation): Observable<Designation> {
    // ekhane sir / ta rakhe ni return line e 
    return this.http.put<Designation>(`${this.baseUrlDesig}${id}`, desig);
  }

  // Designation add, delete , update end





  //  Department add, delete , update start

  getAllDepartment(): Observable<Department[]> {

    return this.http.get<Department[]>(this.baseUrlDepart);

  }

  deleteDepartment(id: number): Observable<void> {

    return this.http.delete<void>(`${this.baseUrlDepart}/${id}`);
  }

  saveDepartment(dep: Department): Observable<Department> {

    return this.http.post<Department>(this.baseUrlDepart, dep);
  }

  getDepartmentById(id: number): Observable<Department> {

    return this.http.get<Department>(`${this.baseUrlDepart}${id}`);
  }


  updateDepartment(id: number, depart: Department): Observable<Department> {
    return this.http.put<Department>(`${this.baseUrlDepart}/${id}`, depart);
  }


  //  Department add, delete , update end


  // ?Attendance add, delete, view update start

  getAllAttendance(): Observable<any> {

    return this.http.get(this.baseUrlAtten);

  }

  deleteAttendance(id: string): Observable<any> {

    return this.http.delete(this.baseUrlAtten + '/' + id);
  }

  saveAttendance(atten: Attendance): Observable<any> {

    return this.http.post(this.baseUrlAtten, atten);
  }

  getAttendanceById(id: string): Observable<any> {

    return this.http.get(this.baseUrlAtten + '/' + id);
  }
  updateAttendance(id: string, atten: Attendance): Observable<any> {

    return this.http.put(this.baseUrlAtten + '/' + id, atten);
  }


  // ?Attendance add, delete, view update end






  // Leave add, delete, view , update start 

  getAllLeave(): Observable<any> {

    return this.http.get(this.baseUrlLeave);

  }

  deleteLeave(id: string): Observable<any> {

    return this.http.delete(this.baseUrlLeave + '/' + id);
  }

  saveLeave(leave: Leave): Observable<any> {

    return this.http.post(this.baseUrlLeave, leave);
  }

  getLeaveById(id: string): Observable<any> {

    return this.http.get(this.baseUrlLeave + '/' + id);
  }
  updateLeave(id: string, leave: Leave): Observable<any> {

    return this.http.put(this.baseUrlLeave + '/' + id, leave);
  }


  // Leave add, delete, view , update end 



  
 

}
