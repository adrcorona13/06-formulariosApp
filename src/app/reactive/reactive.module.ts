import { NgModule } from "@angular/core";
import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicosComponent } from './components/basicos/basicos.component';
import { DinamicosComponent } from './components/dinamicos/dinamicos.component';
import { SwitchesComponent } from './components/switches/switches.component';

@NgModule({
    imports: [
      ReactiveRoutingModule
    ],
    declarations: [
      BasicosComponent,
      DinamicosComponent,
      SwitchesComponent
    ]
})
export class ReactiveModule{}