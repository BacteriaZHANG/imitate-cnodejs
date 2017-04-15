import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetStartComponent } from './getstart.component';
import { GetStartRoutingModule } from './getstart-routing.module';

@NgModule({
    imports: [
        CommonModule,
        GetStartRoutingModule
    ],
    declarations: [
        GetStartComponent
    ]
})
export class GetStartModule { }
