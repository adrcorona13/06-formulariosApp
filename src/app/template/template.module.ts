import { NgModule } from "@angular/core";
import { TemplateRoutingModule } from './template-routing.module';
import { BasicosComponent } from './components/basicos/basicos.component';
import { DinamicosComponent } from './components/dinamicos/dinamicos.component';
import { SwitchesComponent } from './components/switches/switches.component';

@NgModule({
    imports: [
      TemplateRoutingModule
    ],
    declarations: [
      BasicosComponent,
      DinamicosComponent,
      SwitchesComponent
    ]
})
export class TemplateModule { }