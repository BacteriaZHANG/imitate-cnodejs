import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';
import { SideBarComponent } from '../sidebar/sidebar.component';

const AboutRoutes: Routes = [
    { 
        path: 'about',
        component: AboutComponent,
        children: [
            { path: '', component: SideBarComponent }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(AboutRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class AboutRoutingModule { }
