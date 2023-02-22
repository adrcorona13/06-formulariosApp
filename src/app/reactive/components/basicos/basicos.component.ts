import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  // formulario: FormGroup = new FormGroup({
  //   nombre        : new FormControl('RTX 4080ti'),
  //   precio        : new FormControl(1500),
  //   existencias   : new FormControl(5),
  // })

  formulario: FormGroup = this.fb.group({
    nombre: ['RTX 4080ti'],
    precio: [0],
    existencias: [5]
  })

  constructor(private fb: FormBuilder) { }
}
