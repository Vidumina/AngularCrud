
import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployeeForm: NgForm | undefined;
  previewPhoto: boolean = false;
  panelTitle: string | undefined;
  employee: Employee = {
    id: undefined,
    name: '',
    gender: '',
    email: '',
    phoneNumber: undefined,
    contactPreference: '',
    dateOfBirth: undefined,
    department: 'Select',
    isActive: undefined,
    photoPath: '',
    password: undefined,
    confirmPassword: undefined
  };

  datePickerConfig: Partial<BsDatepickerConfig>;
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' },
    { id: 5, name: 'Admin' }
  ];

  constructor(
    private _employeeService: EmployeeService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      dateInputFormat: 'DD/MM/YYYY'
    });
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe(parameterMap => {
      const id = Number(parameterMap.get('id'));
      this.getEmployee(id);
    });
  }

  private getEmployee(id: number) {
    if (id === 0) {
      this.employee = {
        id: undefined,
        name: '',
        gender: '',
        email: '',
        phoneNumber: undefined,
        contactPreference: '',
        dateOfBirth: undefined,
        department: 'Select',
        isActive: undefined,
        photoPath: '',
        password: undefined,
        confirmPassword: undefined
      };
      this.panelTitle = 'Create Employee';
      // No need for setTimeout here for resetting on create
    } else {
      this.panelTitle = 'Edit Employee';
      this._employeeService.getEmployeeById(id).subscribe(
        (employee) => this.employee = employee,
        (err: any) => console.log(err)
      );
    }
  }


  saveEmployee(): void {
    if (this.employee.id == null) {
      this._employeeService.addEmployee(this.employee).subscribe({
        next: (data: Employee) => {
          console.log('Employee added:', data);
          this.createEmployeeForm?.reset();
          this._router.navigate(['list']);
        },
        error: (error: any) => {
          console.error('Error adding employee:', error);
        }
      });
    } else {
      this._employeeService.updateEmployee(this.employee).subscribe({
        next: () => {
          console.log('Employee updated');
          this.createEmployeeForm?.reset();
          this._router.navigate(['list']);


        },
        error: (error: any) => {
          console.error('Error updating employee:', error);
        }
      });
    }
  }

  // saveEmployee(): void {
  //   if (this.employee.id == null) {
  //     this._employeeService.addEmployee(this.employee).subscribe(
  //       (data: Employee) => {
  //         console.log(data);
  //         this.createEmployeeForm?.reset();
  //         this._router.navigate(['list']);
  //       },
  //       (error: any) => {
  //         console.log(error);
  //       }
  //     );
  //   } else {
  //     this._employeeService.updateEmployee(this.employee).subscribe(
  //       () => {
  //         this.createEmployeeForm?.reset();
  //         this._router.navigate(['list']);
  //       },
  //       (error: any) => {
  //         console.log(error);
  //       }
  //     );
  //   }
  // }

  togglePhotoPreview(): void {
    this.previewPhoto = !this.previewPhoto;
  }
}
















// import { Component, ViewChild } from '@angular/core';
// import { FormsModule, NgForm } from '@angular/forms';
// import { Department } from '../models/department.model';
// import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
// import { Employee } from '../models/employee.model';
// import { EmployeeService } from './employee.service';
// import { ActivatedRoute, Router } from '@angular/router';




// @Component({
//   selector: 'app-create-employee',
//   templateUrl: './create-employee.component.html',
//   styleUrl: './create-employee.component.css'
// })
// export class CreateEmployeeComponent {

//   @ViewChild('employeeForm') public createEmployeeForm: NgForm | undefined;
//   previewPhoto: boolean = false;
//   panelTitle: string | undefined;
//   employee: Employee | any;

//   datePickerConfig: Partial<BsDatepickerConfig>;


//   /**
//    *
//    */
//   constructor(private _employeeService: EmployeeService, private _router: Router, private _route: ActivatedRoute) {

//     this.datePickerConfig = Object.assign({}, {
//       containerClass: 'theme-dark-blue',

//       dateInputFormat: 'DD/MM/YYYY'

//     });
//   }

//   departments: Department[] = [

//     { id: 1, name: 'Help Desk' },
//     { id: 2, name: 'HR' },
//     { id: 3, name: 'IT' },
//     { id: 4, name: 'Payroll' },
//     { id: 5, name: 'Admin' }
//   ];



//   saveEmployee(): void {

//     if (this.employee.id == null) {
//       this._employeeService.addEmployee(this.employee).subscribe(
//         (data: Employee) => {
//           console.log(data);
//           if (this.createEmployeeForm) {
//             this.createEmployeeForm.reset();
//           }
//           this._router.navigate(['list']);

//         },
//         (error: any) => {
//           console.log(error);
//         }
//       );
//     }
//     else {
//       this._employeeService.updateEmployee(this.employee).subscribe(
//         () => {
//           if (this.createEmployeeForm) {
//             this.createEmployeeForm.reset();
//           }
//           this._router.navigate(['list']);

//         },
//         (error: any) => {
//           console.log(error);
//         }
//       );
//     }




//   }


//   ngOnInit(): void {
//     this._route.paramMap.subscribe(parameterMap => {
//       const id = Number(parameterMap.get('id'));
//       this.getEmployee(id);
//     });
//   }

//   private getEmployee(id: number) {
//     if (id === 0) {
//       this.employee = {

//         id: undefined,
//         name: '',
//         gender: '',
//         email: '',
//         phoneNumber: undefined,
//         contactPreference: '',
//         dateOfBirth: undefined,
//         department: "Select",
//         isActive: undefined,
//         photoPath: '',
//         password: undefined,
//         confirmPassword: undefined

//       };
//       this.panelTitle = 'Create Employee';
//       setTimeout(() => {
//         this.createEmployeeForm?.reset();
//       });

//     }
//     else {
//       this.panelTitle = 'Edit Employee';

//       this._employeeService.getEmployeeById(id).subscribe(

//         (employee) => this.employee = employee,
//         (err: any) => console.log(err)

//       );
//     }

//   }

//   togglePhotoPreview(): void {
//     this.previewPhoto = !this.previewPhoto;

//   }

// }
