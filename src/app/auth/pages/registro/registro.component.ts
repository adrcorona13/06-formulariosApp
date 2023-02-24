import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// import { regexNombreApellido, regexEmail, noPuedeSerStrider } from '../../../shared/validators/validaciones';
import { ValidatorService } from '../../../shared/services/validator.service';

@Component({
    selector: 'app-registro',
    templateUrl: 'registro.component.html'
})
export class RegistroComponent implements OnInit { 

    formulario: FormGroup = this.fb.group({
        nombre: ['', [Validators.required, Validators.pattern(this.validatorService.regexNombreApellido)]],
        email: ['', [Validators.required, Validators.pattern(this.validatorService.regexEmail)]],
        username: ['', [Validators.required, this.validatorService.noPuedeSerStrider]]
    })

    constructor(
        private fb: FormBuilder, 
        private validatorService: ValidatorService
    ){}

    ngOnInit(): void {
        this.formulario.reset({
            nombre: 'Adrian Pineda',
            email: 'adrian@gmail.com',
            username: 'adrcorona13'
        })
    }

    validarCampo(campo: string){
        return this.formulario.controls[campo].touched 
            && this.formulario.controls[campo].invalid;
    }

    crear(){
        console.log(this.formulario.value);
        this.formulario.markAllAsTouched();
    }
}