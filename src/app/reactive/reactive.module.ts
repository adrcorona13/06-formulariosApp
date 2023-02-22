import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { ReactiveRoutingModule } from './reactive-routing.module';

import { BasicosComponent } from './components/basicos/basicos.component';
import { DinamicosComponent } from './components/dinamicos/dinamicos.component';
import { SwitchesComponent } from './components/switches/switches.component';

@NgModule({
    imports: [
      CommonModule,
      ReactiveRoutingModule,
      ReactiveFormsModule
    ],
    declarations: [
      BasicosComponent,
      DinamicosComponent,
      SwitchesComponent
    ]
})
export class ReactiveModule{}