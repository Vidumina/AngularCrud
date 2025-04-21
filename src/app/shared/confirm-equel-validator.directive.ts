import { Directive, Input,forwardRef  } from "@angular/core";
import { Validator,NG_VALIDATORS, AbstractControl, ValidationErrors } from "@angular/forms";



@Directive({
    selector:'[appConfirmEqualValidator]',
    providers:[{
provide:NG_VALIDATORS,
useExisting: forwardRef(() => ConfirmEqualValidatorDirective),
multi:true


    }]


})

export class ConfirmEqualValidatorDirective implements Validator{

    validate(passwordGroup: AbstractControl): ValidationErrors | null {

       

        const passwordField=passwordGroup.get('password');
        const comfirmpasswordField=passwordGroup.get('confirmPassword');


        if(passwordField&&comfirmpasswordField&&passwordField.value!=comfirmpasswordField.value){


            return { 'notEqual': true };
        }

        return null;
        
    }

}