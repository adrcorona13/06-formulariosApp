import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  guardar(formulario: NgForm){
    console.log("entro", formulario.value);
    
  }
}
