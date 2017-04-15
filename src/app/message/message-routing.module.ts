import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MessageComponent } from './message.component';
import { SideBarComponent } from '../sidebar/sidebar.component';

const messageRoutes: Routes = [
    { 
        path: 'message',
        component: MessageComponent,
        children: [
            { path: '', component: SideBarComponent }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(messageRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class MessageRoutingModule { }