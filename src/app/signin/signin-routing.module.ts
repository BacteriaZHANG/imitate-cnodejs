import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './signin.component';

const SignInRoutes: Routes = [
    { path: 'signin', component: SignInComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(SignInRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class SignInRoutingModule { }
