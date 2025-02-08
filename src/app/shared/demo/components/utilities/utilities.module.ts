import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilitiesRoutingModule } from './utilities-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { ColorsComponent } from './colors/colors.component';
import { IconsComponent } from './icons/icons.component';

@NgModule({
    imports: [
        CommonModule,
        UtilitiesRoutingModule,
        InputTextModule
    ],
    declarations: [IconsComponent, ColorsComponent]
})
export class UtilitiesModule { }
