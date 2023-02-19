import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  @ViewChild('formulario') formulario!: NgForm;

  guardar(  ){
    console.log("entro", this.formulario.value);
  }

  nombreValido():boolean{
    return this.formulario?.controls?.['producto']?.invalid 
            && this.formulario?.controls?.['producto']?.touched
  }
}
