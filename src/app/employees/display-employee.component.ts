import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrl: './display-employee.component.css'
})
export class DisplayEmployeeComponent implements OnInit {
 @Input() employee:Employee|any;
 @Input() searchTerm:String|any;
 @Output() notifyDelete:EventEmitter<number>=new EventEmitter<number>();
 confrimDelete:boolean=false;
 pannelExpanded:boolean=false;
 

   public selectedEmployeeId: number|any;


 

constructor(private _route:ActivatedRoute,private _router:Router,private _employeeService:EmployeeService) {
  
  
}

  

  ngOnInit(): void {
 this.selectedEmployeeId = Number(this._route.snapshot.paramMap.get('id')) || undefined;

  }


  
  viewEmployee(){
    this._router.navigate(['/employees', this.employee.id], {
      queryParams: { 'searchTerm': this.searchTerm }
    });
  }

  editEmployee(){
    this._router.navigate(['/edit', this.employee.id], {
     });
  }
  

  


  deleteEmployee() {
    this._employeeService.deleteEmployee(this.employee.id).subscribe(
      ()=>console.log(`Employee with id =${this.employee.id}  deleted`),
      (err)=>console.log(err),
      );
    this.notifyDelete.emit(this.employee.id);
  }


  




}
