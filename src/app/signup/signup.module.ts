import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpComponent } from './signup.component';
import { SignUpRoutingModule } from './signup-routing.module';

@NgModule({
    imports: [
        CommonModule,
        SignUpRoutingModule
    ],
    declarations: [
        SignUpComponent
    ]
})
export class SignUpModule { }
