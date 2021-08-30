import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { FilterComponent } from './filter/filter.component';


@NgModule({
    declarations: [FilterComponent],
    exports: [
        FilterComponent
    ],
    imports: [
        CommonModule,
        BodyRoutingModule
    ]
})
export class BodyModule { }
