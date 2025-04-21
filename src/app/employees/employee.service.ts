import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";
import { catchError, Observable, throwError } from "rxjs";
import { of } from 'rxjs';
import { delay } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";





@Injectable()
export class EmployeeService {

baseUrl='http://localhost:3000/employees';
  
  constructor(private HttpClient: HttpClient) {


  }

  

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {

      console.error('Client side error:', errorResponse.error.message)
    }
    else {
      console.error('Server side error:', errorResponse);

    }
    return throwError(() => new Error('There is a problem with the service. We are notified and working on it. Please try again later.'));

  }

  getEmployees(): Observable<Employee[]> {

    return this.HttpClient.get<Employee[]>(this.baseUrl).pipe(catchError(this.handleError));

  }

  





  getEmployeeById(id: number):Observable< Employee> {
    return this.HttpClient.get<Employee>(`${this.baseUrl}/${id}`).pipe(catchError(this.handleError));
 
  }

 


  addEmployee(employee: Employee): Observable<Employee> {
    
      return this.HttpClient.post<Employee>(this.baseUrl, employee, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(catchError(this.handleError));
    
  }


  // updateEmployee(employee: Employee): Observable<void> {
    
  //     return this.HttpClient.put<void>(`${this.baseUrl}/${employee.id}` , employee, {
  //       headers: new HttpHeaders({
  //         'Content-Type': 'application/json'
  //       })
  //     }).pipe(catchError(this.handleError));
   
  // }



  updateEmployee(employee: Employee): Observable<void> {
    const url = `${this.baseUrl}/${employee.id}`;
    return this.HttpClient.put<void>(url, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }


  
  deleteEmployee(id: number): Observable<void> {
    return this.HttpClient.delete<void>(`${this.baseUrl}/${id}`).pipe(catchError(this.handleError));
   
  }






}