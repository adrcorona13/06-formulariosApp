import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { TemplateRoutingModule } from './template-routing.module';
import { BasicosComponent } from './components/basicos/basicos.component';
import { DinamicosComponent } from './components/dinamicos/dinamicos.component';
import { SwitchesComponent } from './components/switches/switches.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      TemplateRoutingModule
    ],
    declarations: [
      BasicosComponent,
      DinamicosComponent,
      SwitchesComponent
    ]
})
export class TemplateModule { }