import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApiComponent } from './API.component';

const APIRoutes: Routes = [
    { 
        path: 'api',
        component: ApiComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(APIRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class ApiRoutingModule { }
