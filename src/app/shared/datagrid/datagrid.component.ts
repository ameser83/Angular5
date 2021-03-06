import { NgModule, Component, Pipe, PipeTransform, enableProdMode, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule,
         DxSparklineModule,
         DxTemplateModule } from 'devextreme-angular';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    styleUrls: ['./datagrid.component.scss'],
    selector: 'datagrid',
    templateUrl: './datagrid.component.html',
})

export class DatagridComponent {
    
    @Input() gridColumns: any[];
    @Input() dataCollection: any[];
}





