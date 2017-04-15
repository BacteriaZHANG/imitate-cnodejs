import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingComponent } from './setting.component';
import { SideBarComponent } from '../sidebar/sidebar.component';
import { AuthGuard } from '../auth-guard.service';

const settingRoutes: Routes = [
    { 
        path: 'setting',
        component: SettingComponent,
        children: [
            { path: '', component: SideBarComponent }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(settingRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class SettingRoutingModule { }