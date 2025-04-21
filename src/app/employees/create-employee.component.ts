import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import {  ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {

  @ViewChild('employeeForm') public createEmployeeForm:NgForm | undefined;
  previewPhoto:boolean=false;
  panelTitle:string | undefined;
  employee:Employee|any;

datePickerConfig:Partial<BsDatepickerConfig>;


/**
 *
 */
constructor(private _employeeService:EmployeeService,private _router:Router,private _route:ActivatedRoute) {
  
  this.datePickerConfig=Object.assign({},{
    containerClass:'theme-dark-blue',
  
    dateInputFormat:'DD/MM/YYYY'

  });
}

  departments:Department[]=[

    {id:1,name:'Help Desk'},
    {id:2,name:'HR'},
    {id:3,name:'IT'},
    {id:4,name:'Payroll'},
    {id:5,name:'Admin'}
  ];

  

  saveEmployee():void{

const newEmployee= Object.assign({},this.employee);
  this._employeeService.save(newEmployee);
  if (this.createEmployeeForm) {
    this.createEmployeeForm.reset();
  }
  this._router.navigate(['list']);


  }


  ngOnInit():void{
    this._route.paramMap.subscribe(parameterMap=>{
    const id = Number(parameterMap.get('id'));
    this.getEmployee(id);
    });
  }

  private getEmployee(id:number){
    if(id===0){
      this.employee={

        id:undefined,
        name:'',
        gender: '',
        email: '',
        phoneNumber: undefined,
        contactPreference: '',
        dateOfBirth: undefined,
        department:"Select",
        isActive: undefined,
        photoPath: '',
        password:undefined,
        confirmPassword:undefined
        
      };
this.panelTitle='Create Employee';
  this.createEmployeeForm?.reset();

    }
    else{
this.panelTitle='Edit Employee';

  this.employee= Object.assign({},this._employeeService.getEmployeeById(id))   ;
    }

  }

  togglePhotoPreview():void{
    this.previewPhoto=!this.previewPhoto;
    
  }

}
