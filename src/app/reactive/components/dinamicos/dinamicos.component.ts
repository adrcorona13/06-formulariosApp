import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent {

  formulario: FormGroup = this.formBuilder.group({
    nombre: ['', [
      Validators.required,
      Validators.minLength(3)
    ]],
    favoritos: this.formBuilder.array([
      ['uno', Validators.required],
      ['dos', Validators.required]
    ], Validators.required)
  })

  nuevoFavorito: FormControl = this.formBuilder.control('', Validators.required);

  get favoritosArray(){
    return this.formulario.get('favoritos') as FormArray;
  }
  constructor(private formBuilder: FormBuilder){}

  validaCampo(campo:string){
    return this.formulario.controls[campo].touched
        && this.formulario.controls[campo].errors;
  }

  agregarFavorito(){
    if (this.nuevoFavorito.invalid) {
      return;
    }
    //this.favoritosArray.push(new FormControl(this.nuevoFavorito.value, Validators.required))
    this.favoritosArray.push(this.formBuilder.control(this.nuevoFavorito.value, Validators.required))

    this.nuevoFavorito.reset();
  }

  eliminar(index: number){
    this.favoritosArray.removeAt(index);
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
