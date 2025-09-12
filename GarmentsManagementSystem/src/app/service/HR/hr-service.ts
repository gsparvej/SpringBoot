import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../../model/HR/employee.model';
import { Department } from '../../../model/HR/department.model';
import { Designation } from '../../../model/HR/designation.model';
import { Attendance } from '../../../model/HR/attendance.model';
import { Leave } from '../../../model/HR/leave.model';
import { environment } from '../../environments/environment';
import { isPlatformBrowser } from '@angular/common';

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


  

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }



  // Employee add, delete, Update start

  getAllEmployee(): Observable<any> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.get(this.baseUrlEmp , {headers});

  }

  getDesignationByDepartment(departmentId: number): Observable<any[]> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.get<any[]>(`${this.baseUrlDesig}/by-department/${departmentId}` ,{headers});

  }


  deleteEmployee(id: number): Observable<any> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.delete(this.baseUrlEmp + '/' + id , {headers});
  }

  saveEmployee(emp: Employee): Observable<any> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.post(this.baseUrlEmp, emp , {headers});
  }

  getEmployeeById(id: number): Observable<any> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.get(this.baseUrlEmp + '/' + id ,{headers});
  }
  updateEmployee(id: number, emp: Employee): Observable<any> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.put(this.baseUrlEmp + '/' + id, emp, {headers});
  }

  // Employee add, delete, Update end



  // Designation add, delete , update start

  getAllDesignation(): Observable<Designation[]> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.get<Designation[]>(this.baseUrlDesig , {headers});

  }

  deleteDesignation(id: number): Observable<void> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.delete<void>(`${this.baseUrlDesig}/${id}` , {headers});
  }

  saveDesignation(deisg: Designation): Observable<Designation> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.post<Designation>(this.baseUrlDesig, deisg , {headers});
  }

  updateDesignation(id: number, desig: Designation): Observable<Designation> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.put<Designation>(`${this.baseUrlDesig}${id}`, desig, {headers});
  }

  // Designation add, delete , update end





  //  Department add, delete , update start

  getAllDepartment(): Observable<Department[]> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.get<Department[]>(this.baseUrlDepart, {headers});

  }

  deleteDepartment(id: number): Observable<void> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.delete<void>(`${this.baseUrlDepart}/${id}` ,{headers});
  }

  saveDepartment(dep: Department): Observable<Department> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.post<Department>(this.baseUrlDepart, dep, {headers});
  }

  getDepartmentById(id: number): Observable<Department> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.get<Department>(`${this.baseUrlDepart}${id}` , {headers});
  }


  updateDepartment(id: number, depart: Department): Observable<Department> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }
    return this.http.put<Department>(`${this.baseUrlDepart}/${id}`, depart ,{headers});
  }


  //  Department add, delete , update end


  // ?Attendance add, delete, view update start

  getAllAttendance(): Observable<any> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.get(this.baseUrlAtten , {headers});

  }

  deleteAttendance(id: string): Observable<any> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.delete(this.baseUrlAtten + '/' + id ,{headers});
  }

  saveAttendance(atten: Attendance): Observable<any> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.post(this.baseUrlAtten, atten, {headers});
  }

  getAttendanceById(id: string): Observable<any> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.get(this.baseUrlAtten + '/' + id, {headers});
  }
  updateAttendance(id: string, atten: Attendance): Observable<any> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.put(this.baseUrlAtten + '/' + id, atten, {headers});
  }


  // ?Attendance add, delete, view update end






  // Leave add, delete, view , update start 

  getAllLeave(): Observable<any> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.get(this.baseUrlLeave, {headers});

  }

  deleteLeave(id: string): Observable<any> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.delete(this.baseUrlLeave + '/' + id, {headers});
  }

  saveLeave(leave: Leave): Observable<any> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.post(this.baseUrlLeave, leave, {headers});
  }

  getLeaveById(id: string): Observable<any> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.get(this.baseUrlLeave + '/' + id, {headers});
  }
  updateLeave(id: string, leave: Leave): Observable<any> {
     let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
      }
    }

    return this.http.put(this.baseUrlLeave + '/' + id, leave, {headers});
  }


  // Leave add, delete, view , update end 



  
 

}
