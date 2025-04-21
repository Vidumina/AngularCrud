import { PipeTransform,Pipe } from "@angular/core";
import { Employee } from "../models/employee.model";
import { pipe } from "rxjs";


@Pipe({

    name:'employeeFilter',
    pure:false

})
      


export class EmployeeFilterPipe implements PipeTransform{
    private counter=0;
    transform(employees:Employee[],searchTerm:string): Employee[] {
        this.counter++;
        console.log('Filter pipe executed count :'+this.counter);
        if(!employees || !searchTerm) {
            return employees;
        }

        return employees.filter(employees=>employees.name.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase())!==-1);
    }



}
