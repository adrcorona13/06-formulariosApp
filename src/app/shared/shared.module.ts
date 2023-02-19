import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SideMenuComponent } from './side-menu/side-menu.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        SideMenuComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [
        SideMenuComponent
    ]
})
export class SharedModule{

}