import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    nombre: ['', [
        Validators.required,
        Validators.minLength(3)
      ]
    ],
    precio: [0, [
        Validators.required,
        Validators.min(0)
      ]
    ],
    existencias: [0, [  
        Validators.required,
        Validators.min(0)
      ]
    ],
  })

  constructor(private fb: FormBuilder) { }
 
  campoInvalido(campo: string){
    return this.formulario?.controls?.[campo]?.errors 
        && this.formulario?.controls?.[campo]?.touched;
  }
}
