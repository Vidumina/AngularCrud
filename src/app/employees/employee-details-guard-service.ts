import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { EmployeeService } from "./employee.service";
import { Injectable } from "@angular/core";


@Injectable()
export class EmployeeDetailsGuardService implements CanActivate{

   
        constructor(private _employeeService:EmployeeService,private _router:Router) {
        
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



    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const idParam = route.paramMap.get('id');
        const employeeId = idParam ? +idParam : NaN;
      
        try {
          const employeeExists = !!this._employeeService.getEmployeeById(employeeId);
          if (employeeExists) {
            console.log('Employee exists');
            return true;
          }
        } catch (error) {
          console.error('Error fetching employee:', error);
        }
      
        this._router.navigate(['/notFound']);
        return false;
      }
      


}