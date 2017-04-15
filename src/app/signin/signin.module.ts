import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SignInComponent } from './signin.component';
import { SignInRoutingModule } from './signin-routing.module';
import { AboutBarComponent } from './aboutbar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SignInRoutingModule
    ],
    declarations: [
        SignInComponent,
        AboutBarComponent
    ]
})
export class SignInModule { }
