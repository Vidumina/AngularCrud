import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Employee } from "../models/employee.model";
import { Observable, of } from "rxjs";
import { EmployeeService } from "./employee.service";
import { Injectable } from "@angular/core";
import { map, catchError } from 'rxjs/operators';
import { ResolveEmployeeList } from "./resolved-employeelist.model";

@Injectable()


export class EmployeeListResolverService implements Resolve<Employee[]|string> {

    constructor(private _employeeService: EmployeeService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]|string> {
        return this._employeeService.getEmployees().pipe(
            catchError((err: string) => of(err))
        );
    }


}