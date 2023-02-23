import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {

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
    precio: [, [
        Validators.required,
        Validators.min(0)
      ]
    ],
    existencias: [, [  
        Validators.required,
        Validators.min(0)
      ]
    ],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // marca error si no se coloca un valor en todos los campos
    // this.formulario.setValue({
    //   nombre: 'Producto',
    //   precio: 1600
    // })
    this.formulario.reset({
      nombre: 'Producto',
      precio: 1600
    })
  }
 
  campoInvalido(campo: string){
    return this.formulario?.controls?.[campo]?.errors 
        && this.formulario?.controls?.[campo]?.touched;
  }

  guardar(){

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    console.log(this.formulario.value);
    this.formulario.reset();
  }
}
