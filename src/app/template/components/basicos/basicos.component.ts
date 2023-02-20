import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  @ViewChild('formulario') formulario!: NgForm;

  initForm = {
    producto: 'RTX 4080ti',
    precio: 0,
    existencias: 10
  }

  guardar(  ){
    console.log("guardado");
    this.formulario.resetForm({
      precio: 0,
      existencias: 0
    });
  }

  nombreValido():boolean{
    return this.formulario?.controls?.['producto']?.invalid 
            && this.formulario?.controls?.['producto']?.touched
  }

  precioValido():boolean{   
    //this.formulario?.controls?.['precio']?.setErrors({precio: null})
    return this.formulario?.controls?.['precio']?.touched  
      && this.formulario?.controls?.['precio']?.value < 0 ;
  }
}
