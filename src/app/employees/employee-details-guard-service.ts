import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { EmployeeService } from "./employee.service";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";


@Injectable()
export class EmployeeDetailsGuardService implements CanActivate {


  constructor(private _employeeService: EmployeeService, private _router: Router) {

  }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{

  //     const idParam=route.paramMap.get('id');
  //     const employeeId=idParam?+idParam:NaN;
  //    const employeeExits= !!this._employeeService.getEmployeeById(employeeId);
  //    if(employeeExits){
  //     console.log('Employee exists');
  //     return true;
  //    }
  //    else{
  //     this._router.navigate(['/notFound']);
  //     return false; 
  //    }

  // }



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const idParam = route.paramMap.get('id');
    const employeeId = idParam ? +idParam : NaN;

    return this._employeeService.getEmployeeById(employeeId).pipe(
      map(employee => {

        const employeeExists = !!employee;
        if (employeeExists) {
          console.log('Employee exists');
          return true;
        }
        else {
          this._router.navigate(['/notFound']);
          return false;
        }


      }), catchError((err) => {

        console.log(err);
        return of(false);
      })




    );




  }



}