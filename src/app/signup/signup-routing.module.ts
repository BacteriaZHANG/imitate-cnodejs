import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './signup.component';

const SignUpRoutes: Routes = [
    { path: 'signup', component: SignUpComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(SignUpRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class SignUpRoutingModule { }
