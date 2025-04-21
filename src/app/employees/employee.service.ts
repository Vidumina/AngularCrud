import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";
import { catchError, Observable, throwError } from "rxjs";
import { of } from 'rxjs';
import { delay } from 'rxjs';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";





@Injectable()
export class EmployeeService {


  /**
   *
   */
  constructor(private HttpClient: HttpClient) {


  }

  private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: '3',
      isActive: true,
      photoPath: 'assets/images/mark.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: '2',
      isActive: true,
      photoPath: 'assets/images/mary.png'


    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976'),
      department: '3',
      isActive: false,
      photoPath: 'assets/images/john.png'
    },



  ]

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

    return this.HttpClient.get<Employee[]>('http://localhost:3000/employees1').pipe(catchError(this.handleError));

  }

  





  getEmployeeById(id: number): Employee {
    const employee = this.listEmployees.find(e => e.id === id);
    if (!employee) {
      throw new Error(`Employee with ID ${id} not found`);
    }
    return employee;
  }

 


  save(employee: Employee): void {
    if (!employee.id) {
      // Assign new ID
      const maxId = this.listEmployees.length > 0
        ? Math.max(...this.listEmployees.map(e => e.id ?? 0))
        : 0;
      employee.id = maxId + 1;
      this.listEmployees.push(employee);
    } else {
      // Update existing employee
      const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id);
      if (foundIndex !== -1) {
        this.listEmployees[foundIndex] = employee;
      } else {
        throw new Error(`Employee with ID ${employee.id} not found for update`);
      }
    }
  }


  deleteEmployee(id: number): Observable<void> {
    const i = this.listEmployees.findIndex(e => e.id === id);
    if (i !== -1) {
      this.listEmployees.splice(i, 1);
    }
    return of(undefined);
  }






}