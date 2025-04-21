import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  
  employee:Employee | any;
  private _id:number|undefined;
  constructor(private _route:ActivatedRoute,private _employeeService:EmployeeService, private _router:Router) {
    
  }

  ngOnInit(){
   this._route.paramMap.subscribe(params=>{
  this._id = +params.get('id')!;
  this.employee= this._employeeService.getEmployeeById(this._id);


   });
  }

  viewNextEmployee(){
    if (this._id !== undefined) {


      if(this._id<3){
        this._id = this._id + 1;

      }
      else{
        this._id=1;
      }
      this._router.navigate(['/employees',this._id],{
        queryParamsHandling:'preserve'
      });
    }

  }
}
