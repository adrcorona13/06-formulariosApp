import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent {

  @ViewChild('miFormulario') formulario!: NgForm;

  nuevoJuego: string = "";

  persona: Persona = {
    nombre: 'Adrian',
    favoritos: [
      {
        id: 1,
        nombre: 'Metal Gear'
      },
      {
        id: 2,
        nombre: 'Halo'
      }
    ]
  }

  nombreValido():boolean{
    return this.formulario?.controls?.['nombre']?.invalid 
            && this.formulario?.controls?.['nombre']?.touched
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index,1);
  }
  
  agregarJuego(){
    const juego: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    };
    this.persona.favoritos.push({...juego});
    this.nuevoJuego = '';
  }

  guardar(){
    
  }
}
