import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatIcon, MatIconModule} from '@angular/material/icon';

@NgModule({
    exports: [
        MatTableModule,
        MatInputModule,
        MatIconModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatButtonModule,
        MatDatepickerModule,
        MatMomentDateModule,
        MatSelectModule
    ],
    providers: [
        MatDatepickerModule,
        { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
        { provide: MAT_DATE_LOCALE, useValue: 'es-GT' }
    ]
})
export class MaterialModule { }