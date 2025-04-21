import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectRequiredValidatorDirective } from './shared/select-required-validation.directive';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equel-validator.directive';
import {EmployeeService} from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import {CreateEmployeeCanDeactivateGuardService} from './employees/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component'
import { EmployeeFilterPipe } from './employees/employee-filter.pipe';
import { HtmlTestTsComponent } from './employees/html-test.ts.component';
import { EmployeeListResolverService } from './employees/employee-list-resolver.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployeeDetailsGuardService } from './employees/employee-details-guard-service';
import { AccordionComponent } from './shared/accordion.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe,
    HtmlTestTsComponent,
    PageNotFoundComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService,CreateEmployeeCanDeactivateGuardService,EmployeeListResolverService,EmployeeDetailsGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
