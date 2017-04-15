import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarComponent } from './sidebar.component';
import { SideBarRoutingModule } from './sidebar-routing.module';
import { SideBarSmallComponent } from './sidebar-small.component';
import { TopBarComponent } from './topbar.component';

@NgModule({
    imports: [
        CommonModule,
        SideBarRoutingModule
    ],
    declarations: [
        SideBarComponent,
        SideBarSmallComponent,
        TopBarComponent
    ]
})
export class SideBarModule { }
