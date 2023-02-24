import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent implements OnInit {

  // terminos: FormControl = this.formBuilder.control(['', Validators.required])

  formulario: FormGroup = this.formBuilder.group({
    genero: ['M', Validators.required],
    notificaciones: ['', Validators.required],
    terminos: ['false', Validators.requiredTrue]
  })

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.formulario.reset(this.persona);
    this.formulario.reset({
      ...this.persona,
      terminos: true
    });

    // this.formulario.get('terminos')?.valueChanges.subscribe(value => {
    //   console.log(value);
    // })

    this.formulario.valueChanges.subscribe(({terminos, ...rest}) => {      
      this.persona = rest;
    })
  }

  guardar() {
    const value = { ...this.formulario.value };
    delete value['terminos'];
    this.persona = value;

    console.log(value);

  }
}
