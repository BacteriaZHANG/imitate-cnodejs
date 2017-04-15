import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SideBarComponent } from './sidebar.component';
import { SideBarSmallComponent } from './sidebar-small.component';
import { TopBarComponent } from './topbar.component';
import { AuthGuard } from '../auth-guard.service';

const sideBarRoutes: Routes = [
    {
        path: '',
        component: SideBarComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(sideBarRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard
    ],
})
export class SideBarRoutingModule { }
