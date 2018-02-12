import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DxDataGridModule,
  DxSparklineModule,
  DxTemplateModule } from 'devextreme-angular';
import { BrowserModule } from '@angular/platform-browser';

import { LoaderComponent } from './loader/loader.component';
import { DatagridComponent } from './datagrid/datagrid.component';


@NgModule({
  imports: [
    CommonModule,

    BrowserModule,
    DxDataGridModule,
    DxTemplateModule,
    DxSparklineModule
  ],
  declarations: [
    LoaderComponent,
    DatagridComponent 
  ],
  exports: [
    LoaderComponent,
    DatagridComponent 
  ]
})
export class SharedModule { }
