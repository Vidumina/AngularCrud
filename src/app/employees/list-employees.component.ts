import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router'
import { ResolveEmployeeList } from './resolved-employeelist.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.css'
})
export class ListEmployeesComponent {

  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  private _searchTerm: string | any;
  error: any = null;

  get searchTerm(): string | any {

    return this._searchTerm;
  }

  set searchTerm(value: string | any) {
    this._searchTerm = value;
    this.filteredEmployees = value ? this.filterEmployees(value) : this.employees;
  }

  filterEmployees(searchString: string) {
    if (!this.employees) return [];
    return this.employees.filter(employee =>
      employee.name.toLowerCase().includes(searchString.toLowerCase())
    );
  }



  onDeleteNotification(Id: number) {
    const i = this.filteredEmployees.findIndex(e => e.id === Id);
    console.log(i);

    if (i !== -1) {
      console.log("Done");

      this.filteredEmployees.splice(i, 1);

    }
  }

  constructor(private _router: Router, private _route: ActivatedRoute) {

    console.log("Error is occur");


    const resolvedData: Employee[]|string = this._route.snapshot.data['employeeList'];
  
    if (Array.isArray(resolvedData)) {
      this.employees = resolvedData as Employee[];
    } else {
      this.error = resolvedData;
    }

    if (this._route.snapshot.queryParamMap.has('searchTerm')) {
      this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
    }
    else {
      this.filteredEmployees = this.employees;

    }
  }

  ngOnInit() {











  }






}
