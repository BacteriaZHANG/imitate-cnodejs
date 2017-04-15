import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SettingComponent } from './setting.component';
import { SettingRoutingModule } from './setting-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SettingRoutingModule
    ],
    declarations: [SettingComponent]
})
export class SettingModule { }
