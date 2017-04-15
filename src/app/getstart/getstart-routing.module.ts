import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GetStartComponent } from './getstart.component';
import { SideBarComponent } from '../sidebar/sidebar.component';

const getStartRoutes: Routes = [
    { 
        path: 'getstart',
        component: GetStartComponent,
        children: [
            {
                path: '',
                component: SideBarComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(getStartRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class GetStartRoutingModule { }
