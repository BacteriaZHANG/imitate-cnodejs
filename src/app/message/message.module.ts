import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './message.component';
import { MessageRoutingModule } from './message-routing.module';

@NgModule({
    imports: [
        CommonModule,
        MessageRoutingModule
    ],
    declarations: [MessageComponent]
})
export class MessageModule { }
