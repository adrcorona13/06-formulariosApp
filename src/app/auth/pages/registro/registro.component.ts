import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// import { regexNombreApellido, regexEmail, noPuedeSerStrider } from '../../../shared/validators/validaciones';
import { ValidatorService } from '../../../shared/services/validator.service';
import { EmailValidatorService } from '../../../shared/services/emailValidator.service';

@Component({
    selector: 'app-registro',
    templateUrl: 'registro.component.html'
})
export class RegistroComponent implements OnInit {

    formulario: FormGroup = this.fb.group({
        nombre: ['', [Validators.required, Validators.pattern(this.validatorService.regexNombreApellido)]],
        email: ['', [Validators.required, Validators.pattern(this.validatorService.regexEmail)], [this.ev]],
        username: ['', [Validators.required, this.validatorService.noPuedeSerStrider]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        passwordConfirmacion: ['', [Validators.required]]
    }, {
        validators: [this.validatorService.camposIguales('password', 'passwordConfirmacion')]
    })

    get emailErrorMsg(): string {
        console.log('tick');
        const errors = this.formulario.get('email')?.errors

        if (errors?.['required']) { return 'Email obligatorio' }
        else if (errors?.['pattern']) { return 'El formato no es válido'; }
        else if (errors?.['emailTomado']) { return 'El email ya esta en uso'; }

        return '';
    }

    constructor(
        private fb: FormBuilder,
        private validatorService: ValidatorService,
        private ev: EmailValidatorService
    ) { }

    ngOnInit(): void {
        this.formulario.reset({
            nombre: 'Adrian Pineda',
            email: 'test1@test.com',
            username: 'adrcorona13'
        })
        this.formulario.markAllAsTouched()
    }

    validarCampo(campo: string) {
        return this.formulario.controls[campo].touched
            && this.formulario.controls[campo].invalid;
    }

    // emailRequerido(){
    //     return this.formulario.get('email')?.errors?.['required']
    //         && this.formulario.get('email')?.touched;
    // }

    // emailFormato(){
    //     return this.formulario.get('email')?.errors?.['pattern']
    //         && this.formulario.get('email')?.touched;
    // }

    // emailEnUso(){
    //     return this.formulario.get('email')?.errors?.['emailTomado']
    //         && this.formulario.get('email')?.touched;
    // }

    crear() {
        console.log(this.formulario.value);
        this.formulario.markAllAsTouched();
    }
}