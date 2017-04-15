import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiComponent } from './API.component';
import { ApiRoutingModule } from './API-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ApiRoutingModule
    ],
    declarations: [
        ApiComponent
    ]
})
export class ApiModule { }
