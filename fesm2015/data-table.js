import { CdkCell, CdkFooterCell, CdkHeaderCell, CdkRow, CdkFooterRow, CdkHeaderRow, CdkTable, CdkCellDef, CdkFooterCellDef, CdkHeaderCellDef, CdkCellOutlet, CdkRowDef, CdkFooterRowDef, CdkHeaderRowDef, DataRowOutlet, FooterRowOutlet, HeaderRowOutlet, CdkColumnDef } from '@angular/cdk/table';
import { Component, HostBinding, HostListener, Directive, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ContentCellComponent_1;
let ContentCellComponent = ContentCellComponent_1 = class ContentCellComponent extends CdkCell {
};
ContentCellComponent = ContentCellComponent_1 = __decorate([
    Component({
        selector: 'td[dg-content-cell]',
        template: "<ng-content></ng-content>\n",
        providers: [
            { provide: CdkCell, useExisting: ContentCellComponent_1 }
        ],
        styles: [":host{display:grid;grid-auto-flow:column;align-content:center;align-items:center;justify-content:start;justify-items:stretch;height:var(--dg-data-table--row-height);padding:0 var(--dg-data-table--column-spacing);background-color:var(--dg-theme--background--card);color:var(--dg-theme--foreground--text);font-size:var(--dg-typography--body-1--font-size);font-weight:var(--dg-typography--body-1--font-weight);text-transform:var(--dg-typography--body-1--text-transform);line-height:var(--dg-typography--body-1--line-height);letter-spacing:var(--dg-typography--body-1--letter-spacing)}:host.cdk-table-sticky:first-child:not(:last-child){border-right:var(--dg-data-table--divider)}:host.cdk-table-sticky:last-child:not(:first-child){border-left:var(--dg-data-table--divider)}:host-context(tbody:last-of-type>tr:not(:last-child)),:host-context(tbody:not(:last-of-type)>tr){border-bottom:var(--dg-data-table--divider)}"]
    })
], ContentCellComponent);

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FooterCellComponent_1;
let FooterCellComponent = FooterCellComponent_1 = class FooterCellComponent extends CdkFooterCell {
};
FooterCellComponent = FooterCellComponent_1 = __decorate$1([
    Component({
        selector: 'td[dg-footer-cell]',
        template: "<ng-content></ng-content>\n",
        providers: [
            { provide: CdkFooterCell, useExisting: FooterCellComponent_1 }
        ],
        styles: [":host{display:grid;grid-auto-flow:column;align-content:center;align-items:center;justify-content:start;justify-items:stretch;height:var(--dg-data-table--row-height);padding:0 var(--dg-data-table--column-spacing);background-color:var(--dg-theme--background--card);color:var(--dg-theme--foreground--secondary-text);font-size:var(--dg-typography--caption--font-size);font-weight:var(--dg-typography--caption--font-weight);text-transform:var(--dg-typography--caption--text-transform);line-height:var(--dg-typography--caption--line-height);letter-spacing:var(--dg-typography--caption--letter-spacing)}:host.cdk-table-sticky:first-child:not(:last-child){border-right:var(--dg-data-table--divider)}:host.cdk-table-sticky:last-child:not(:first-child){border-left:var(--dg-data-table--divider)}:host-context(tfoot:first-child>tr:not(:first-child)),:host-context(tfoot:not(:first-child)>tr){border-top:var(--dg-data-table--divider)}"]
    })
], FooterCellComponent);

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HeaderCellComponent_1;
let HeaderCellComponent = HeaderCellComponent_1 = class HeaderCellComponent extends CdkHeaderCell {
};
HeaderCellComponent = HeaderCellComponent_1 = __decorate$2([
    Component({
        selector: 'th[dg-header-cell]',
        template: "<ng-content></ng-content>\n",
        providers: [
            { provide: CdkHeaderCell, useExisting: HeaderCellComponent_1 }
        ],
        styles: [":host{display:grid;grid-auto-flow:column;align-content:center;align-items:center;justify-content:start;justify-items:stretch;height:var(--dg-data-table--row-height);padding:0 var(--dg-data-table--column-spacing);background-color:var(--dg-theme--background--card);color:var(--dg-theme--foreground--secondary-text);font-size:var(--dg-typography--caption--font-size);font-weight:var(--dg-typography--caption--font-weight);text-transform:var(--dg-typography--caption--text-transform);line-height:var(--dg-typography--caption--line-height);letter-spacing:var(--dg-typography--caption--letter-spacing)}:host.cdk-table-sticky:first-child:not(:last-child){border-right:var(--dg-data-table--divider)}:host.cdk-table-sticky:last-child:not(:first-child){border-left:var(--dg-data-table--divider)}:host-context(thead:last-child>tr:not(:last-child)),:host-context(thead:not(:last-child)>tr){border-bottom:var(--dg-data-table--divider)}"]
    })
], HeaderCellComponent);

var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ContentRowComponent_1;
let ContentRowComponent = ContentRowComponent_1 = class ContentRowComponent extends CdkRow {
};
ContentRowComponent = ContentRowComponent_1 = __decorate$3([
    Component({
        selector: 'tr[dg-content-row]',
        template: "<ng-container dgContentCellOutlet></ng-container>\n",
        providers: [
            { provide: CdkRow, useExisting: ContentRowComponent_1 }
        ],
        styles: [":host{display:contents}"]
    })
], ContentRowComponent);

var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FooterRowComponent_1;
let FooterRowComponent = FooterRowComponent_1 = class FooterRowComponent extends CdkFooterRow {
};
FooterRowComponent = FooterRowComponent_1 = __decorate$4([
    Component({
        selector: 'tr[dg-footer-row]',
        template: "<ng-container dgFooterCellOutlet></ng-container>\n",
        providers: [
            { provide: CdkFooterRow, useExisting: FooterRowComponent_1 }
        ],
        styles: [":host{display:contents}"]
    })
], FooterRowComponent);

var __decorate$5 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HeaderRowComponent_1;
let HeaderRowComponent = HeaderRowComponent_1 = class HeaderRowComponent extends CdkHeaderRow {
};
HeaderRowComponent = HeaderRowComponent_1 = __decorate$5([
    Component({
        selector: 'tr[dg-header-row]',
        template: "<ng-container dgHeaderCellOutlet></ng-container>\n",
        providers: [
            { provide: CdkHeaderRow, useExisting: HeaderRowComponent_1 }
        ],
        styles: [":host{display:contents}"]
    })
], HeaderRowComponent);

var __decorate$6 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TableComponent_1;
let TableComponent = TableComponent_1 = class TableComponent extends CdkTable {
    get gridTemplateColumns() {
        let columnDefs = this._contentColumnDefs;
        if (columnDefs) {
            return columnDefs.map(({ sizing }) => sizing).join(' ');
        }
        return 'none';
    }
    updateStickyColumnStyles() {
        super.updateStickyColumnStyles();
    }
};
__decorate$6([
    HostBinding('style.grid-template-columns'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], TableComponent.prototype, "gridTemplateColumns", null);
__decorate$6([
    HostListener('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TableComponent.prototype, "updateStickyColumnStyles", null);
TableComponent = TableComponent_1 = __decorate$6([
    Component({
        selector: 'table[dg-table]',
        template: "<ng-container select=\"caption\"></ng-container>\n\n<ng-container dgHeaderRowOutlet></ng-container>\n<ng-container dgContentRowOutlet></ng-container>\n<ng-container dgFooterRowOutlet></ng-container>\n",
        providers: [
            { provide: CdkTable, useExisting: TableComponent_1 }
        ],
        styles: [":host{--dg-data-table--row-height:calc(var(--dg-layout-grid--gutters) * 2);--dg-data-table--column-spacing:var(--dg-layout-grid--gutters);--dg-data-table--divider:1px solid var(--dg-theme--foreground--divider);display:grid;grid-auto-rows:1fr}::ng-deep tbody,::ng-deep tfoot,::ng-deep thead{display:contents}"]
    })
], TableComponent);

var __decorate$7 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ContentCellDefDirective_1;
let ContentCellDefDirective = ContentCellDefDirective_1 = class ContentCellDefDirective extends CdkCellDef {
};
ContentCellDefDirective = ContentCellDefDirective_1 = __decorate$7([
    Directive({
        selector: '[dgContentCellDef]',
        providers: [
            { provide: CdkCellDef, useExisting: ContentCellDefDirective_1 }
        ]
    })
], ContentCellDefDirective);

var __decorate$8 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FooterCellDefDirective_1;
let FooterCellDefDirective = FooterCellDefDirective_1 = class FooterCellDefDirective extends CdkFooterCellDef {
};
FooterCellDefDirective = FooterCellDefDirective_1 = __decorate$8([
    Directive({
        selector: '[dgFooterCellDef]',
        providers: [
            { provide: CdkFooterCellDef, useExisting: FooterCellDefDirective_1 }
        ]
    })
], FooterCellDefDirective);

var __decorate$9 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HeaderCellDefDirective_1;
let HeaderCellDefDirective = HeaderCellDefDirective_1 = class HeaderCellDefDirective extends CdkHeaderCellDef {
};
HeaderCellDefDirective = HeaderCellDefDirective_1 = __decorate$9([
    Directive({
        selector: '[dgHeaderCellDef]',
        providers: [
            { provide: CdkHeaderCellDef, useExisting: HeaderCellDefDirective_1 }
        ]
    })
], HeaderCellDefDirective);

var __decorate$a = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ContentCellOutletDirective_1;
let ContentCellOutletDirective = ContentCellOutletDirective_1 = class ContentCellOutletDirective extends CdkCellOutlet {
};
ContentCellOutletDirective = ContentCellOutletDirective_1 = __decorate$a([
    Directive({
        selector: '[dgContentCellOutlet]',
        providers: [
            { provide: CdkCellOutlet, useExisting: ContentCellOutletDirective_1 }
        ]
    })
], ContentCellOutletDirective);

var __decorate$b = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FooterCellOutletDirective_1;
let FooterCellOutletDirective = FooterCellOutletDirective_1 = class FooterCellOutletDirective extends CdkCellOutlet {
};
FooterCellOutletDirective = FooterCellOutletDirective_1 = __decorate$b([
    Directive({
        selector: '[dgFooterCellOutlet]',
        providers: [
            { provide: CdkCellOutlet, useExisting: FooterCellOutletDirective_1 }
        ]
    })
], FooterCellOutletDirective);

var __decorate$c = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HeaderCellOutletDirective_1;
let HeaderCellOutletDirective = HeaderCellOutletDirective_1 = class HeaderCellOutletDirective extends CdkCellOutlet {
};
HeaderCellOutletDirective = HeaderCellOutletDirective_1 = __decorate$c([
    Directive({
        selector: '[dgHeaderCellOutlet]',
        providers: [
            { provide: CdkCellOutlet, useExisting: HeaderCellOutletDirective_1 }
        ]
    })
], HeaderCellOutletDirective);

var __decorate$d = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ContentRowDefDirective_1;
let ContentRowDefDirective = ContentRowDefDirective_1 = class ContentRowDefDirective extends CdkRowDef {
    constructor() {
        super(...arguments);
        this.when = () => true;
    }
};
__decorate$d([
    Input('dgContentRowDefColumns'),
    __metadata$1("design:type", Object)
], ContentRowDefDirective.prototype, "columns", void 0);
__decorate$d([
    Input('dgContentRowDefWhen'),
    __metadata$1("design:type", Function)
], ContentRowDefDirective.prototype, "when", void 0);
ContentRowDefDirective = ContentRowDefDirective_1 = __decorate$d([
    Directive({
        selector: '[dgContentRowDef]',
        providers: [
            { provide: CdkRowDef, useExisting: ContentRowDefDirective_1 }
        ]
    })
], ContentRowDefDirective);

var __decorate$e = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var FooterRowDefDirective_1;
let FooterRowDefDirective = FooterRowDefDirective_1 = class FooterRowDefDirective extends CdkFooterRowDef {
    constructor() {
        super(...arguments);
        this.sticky = false;
    }
};
__decorate$e([
    Input('dgFooterRowDef'),
    __metadata$2("design:type", Object)
], FooterRowDefDirective.prototype, "columns", void 0);
__decorate$e([
    Input('dgFooterRowDefSticky'),
    __metadata$2("design:type", Boolean)
], FooterRowDefDirective.prototype, "sticky", void 0);
FooterRowDefDirective = FooterRowDefDirective_1 = __decorate$e([
    Directive({
        selector: '[dgFooterRowDef]',
        providers: [
            { provide: CdkFooterRowDef, useExisting: FooterRowDefDirective_1 }
        ]
    })
], FooterRowDefDirective);

var __decorate$f = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var HeaderRowDefDirective_1;
let HeaderRowDefDirective = HeaderRowDefDirective_1 = class HeaderRowDefDirective extends CdkHeaderRowDef {
    constructor() {
        super(...arguments);
        this.sticky = false;
    }
};
__decorate$f([
    Input('dgHeaderRowDef'),
    __metadata$3("design:type", Object)
], HeaderRowDefDirective.prototype, "columns", void 0);
__decorate$f([
    Input('dgHeaderRowDefSticky'),
    __metadata$3("design:type", Boolean)
], HeaderRowDefDirective.prototype, "sticky", void 0);
HeaderRowDefDirective = HeaderRowDefDirective_1 = __decorate$f([
    Directive({
        selector: '[dgHeaderRowDef]',
        providers: [
            { provide: CdkHeaderRowDef, useExisting: HeaderRowDefDirective_1 }
        ]
    })
], HeaderRowDefDirective);

var __decorate$g = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ContentRowOutletDirective_1;
let ContentRowOutletDirective = ContentRowOutletDirective_1 = class ContentRowOutletDirective extends DataRowOutlet {
};
ContentRowOutletDirective = ContentRowOutletDirective_1 = __decorate$g([
    Directive({
        selector: '[dgContentRowOutlet]',
        providers: [
            { provide: DataRowOutlet, useExisting: ContentRowOutletDirective_1 }
        ]
    })
], ContentRowOutletDirective);

var __decorate$h = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FooterRowOutletDirective_1;
let FooterRowOutletDirective = FooterRowOutletDirective_1 = class FooterRowOutletDirective extends FooterRowOutlet {
};
FooterRowOutletDirective = FooterRowOutletDirective_1 = __decorate$h([
    Directive({
        selector: '[dgFooterRowOutlet]',
        providers: [
            { provide: FooterRowOutlet, useExisting: FooterRowOutletDirective_1 }
        ]
    })
], FooterRowOutletDirective);

var __decorate$i = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HeaderRowOutletDirective_1;
let HeaderRowOutletDirective = HeaderRowOutletDirective_1 = class HeaderRowOutletDirective extends HeaderRowOutlet {
};
HeaderRowOutletDirective = HeaderRowOutletDirective_1 = __decorate$i([
    Directive({
        selector: '[dgHeaderRowOutlet]',
        providers: [
            { provide: HeaderRowOutlet, useExisting: HeaderRowOutletDirective_1 }
        ]
    })
], HeaderRowOutletDirective);

var __decorate$j = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ColumnDefDirective_1;
let ColumnDefDirective = ColumnDefDirective_1 = class ColumnDefDirective extends CdkColumnDef {
    constructor() {
        super(...arguments);
        this.sizing = 'auto';
        this.sticky = false;
        this.stickyEnd = false;
    }
};
__decorate$j([
    Input('dgColumnDef'),
    __metadata$4("design:type", String)
], ColumnDefDirective.prototype, "name", void 0);
__decorate$j([
    Input(),
    __metadata$4("design:type", String)
], ColumnDefDirective.prototype, "sizing", void 0);
__decorate$j([
    Input(),
    __metadata$4("design:type", Boolean)
], ColumnDefDirective.prototype, "sticky", void 0);
__decorate$j([
    Input(),
    __metadata$4("design:type", Boolean)
], ColumnDefDirective.prototype, "stickyEnd", void 0);
ColumnDefDirective = ColumnDefDirective_1 = __decorate$j([
    Directive({
        selector: '[dgColumnDef]',
        providers: [
            { provide: CdkColumnDef, useExisting: ColumnDefDirective_1 }
        ]
    })
], ColumnDefDirective);

var __decorate$k = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const modules = [
    CommonModule
];
const components = [
    ContentCellComponent,
    FooterCellComponent,
    HeaderCellComponent,
    ContentRowComponent,
    FooterRowComponent,
    HeaderRowComponent,
    TableComponent
];
const directives = [
    ContentCellDefDirective,
    FooterCellDefDirective,
    HeaderCellDefDirective,
    ContentCellOutletDirective,
    FooterCellOutletDirective,
    HeaderCellOutletDirective,
    ContentRowDefDirective,
    FooterRowDefDirective,
    HeaderRowDefDirective,
    ContentRowOutletDirective,
    FooterRowOutletDirective,
    HeaderRowOutletDirective,
    ColumnDefDirective
];
let DataTableModule = class DataTableModule {
};
DataTableModule = __decorate$k([
    NgModule({
        imports: [
            ...modules
        ],
        declarations: [
            ...components,
            ...directives
        ],
        exports: [
            ...components,
            ...directives
        ]
    })
], DataTableModule);

export { ColumnDefDirective, ContentCellComponent, ContentCellDefDirective, ContentCellOutletDirective, ContentRowComponent, ContentRowDefDirective, ContentRowOutletDirective, DataTableModule, FooterCellComponent, FooterCellDefDirective, FooterCellOutletDirective, FooterRowComponent, FooterRowDefDirective, FooterRowOutletDirective, HeaderCellComponent, HeaderCellDefDirective, HeaderCellOutletDirective, HeaderRowComponent, HeaderRowDefDirective, HeaderRowOutletDirective, TableComponent };
//# sourceMappingURL=data-table.js.map
