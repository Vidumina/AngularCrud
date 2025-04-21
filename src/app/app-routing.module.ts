import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from './employees/list-employees.component'; 
import { CreateEmployeeComponent } from './employees/create-employee.component'; 
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { HtmlTestTsComponent } from './employees/html-test.ts.component';
import { EmployeeListResolverService } from './employees/employee-list-resolver.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployeeDetailsGuardService } from './employees/employee-details-guard-service';

const routes: Routes = [


  {path: 'list', 
    component:  ListEmployeesComponent,
    resolve:{employeeList:EmployeeListResolverService}
  },
   {
    path: 'edit/:id',
     component:  CreateEmployeeComponent,
     canDeactivate:[CreateEmployeeCanDeactivateGuardService]
    },
   {path: 'employees/:id', component:EmployeeDetailsComponent,
    canActivate:[EmployeeDetailsGuardService]
   },

   {path: '', redirectTo:'/list',pathMatch:'full'},
   {path:'htmlTest',component:HtmlTestTsComponent},
   {path: 'notFound', component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


  
 }
