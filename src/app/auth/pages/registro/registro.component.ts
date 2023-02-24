import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-registro',
    templateUrl: 'registro.component.html'
})
export class RegistroComponent implements OnInit { 

    regexNombreApellido: string = '([a-zA-Z]+) ([a-zA-Z]+)';
    regexEmail: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

    formulario: FormGroup = this.fb.group({
        nombre: ['', [Validators.required, Validators.pattern(this.regexNombreApellido)]],
        email: ['', [Validators.required, Validators.pattern(this.regexEmail)]],
    })

    constructor(private fb: FormBuilder){}

    ngOnInit(): void {
        this.formulario.reset({
            nombre: 'Adrian',
            email: 'adrian@gmail.com'
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