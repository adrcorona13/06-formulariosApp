import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-registro',
    templateUrl: 'registro.component.html'
})
export class RegistroComponent implements OnInit { 

    regexNombreApellido: string = '([a-zA-Z]+) ([a-zA-Z]+)';
    regexEmail: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    noPuedeSerStrider(control: FormControl){
        const valor = control.value?.trim().toLowerCase();
        if (valor === 'strider') {
            return {
                noStrider: true
            }
        }
        return null;
    }


    formulario: FormGroup = this.fb.group({
        nombre: ['', [Validators.required, Validators.pattern(this.regexNombreApellido)]],
        email: ['', [Validators.required, Validators.pattern(this.regexEmail)]],
        username: ['', [Validators.required, this.noPuedeSerStrider]]
    })

    constructor(private fb: FormBuilder){}

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