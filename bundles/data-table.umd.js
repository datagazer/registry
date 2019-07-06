(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/table'), require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@datagazer/data-table', ['exports', '@angular/cdk/table', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.datagazer = global.datagazer || {}, global.datagazer['data-table'] = {}), global.ng.cdk.table, global.ng.core, global.ng.common));
}(this, function (exports, table, core, common) { 'use strict';

    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var ContentCellComponent = /** @class */ (function (_super) {
        __extends(ContentCellComponent, _super);
        function ContentCellComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ContentCellComponent_1 = ContentCellComponent;
        var ContentCellComponent_1;
        ContentCellComponent = ContentCellComponent_1 = __decorate([
            core.Component({
                selector: 'td[dg-content-cell]',
                template: "<ng-content></ng-content>\n",
                providers: [
                    { provide: table.CdkCell, useExisting: ContentCellComponent_1 }
                ],
                styles: [":host{display:grid;grid-auto-flow:column;align-content:center;align-items:center;justify-content:start;justify-items:stretch;height:var(--dg-data-table--row-height);padding:0 var(--dg-data-table--column-spacing);background-color:var(--dg-theme--background--card);color:var(--dg-theme--foreground--text);font-size:var(--dg-typography--body-1--font-size);font-weight:var(--dg-typography--body-1--font-weight);text-transform:var(--dg-typography--body-1--text-transform);line-height:var(--dg-typography--body-1--line-height);letter-spacing:var(--dg-typography--body-1--letter-spacing)}:host.cdk-table-sticky:first-child:not(:last-child){border-right:var(--dg-data-table--divider)}:host.cdk-table-sticky:last-child:not(:first-child){border-left:var(--dg-data-table--divider)}:host-context(tbody:last-of-type>tr:not(:last-child)),:host-context(tbody:not(:last-of-type)>tr){border-bottom:var(--dg-data-table--divider)}"]
            })
        ], ContentCellComponent);
        return ContentCellComponent;
    }(table.CdkCell));

    var __extends$1 = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var FooterCellComponent = /** @class */ (function (_super) {
        __extends$1(FooterCellComponent, _super);
        function FooterCellComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FooterCellComponent_1 = FooterCellComponent;
        var FooterCellComponent_1;
        FooterCellComponent = FooterCellComponent_1 = __decorate$1([
            core.Component({
                selector: 'td[dg-footer-cell]',
                template: "<ng-content></ng-content>\n",
                providers: [
                    { provide: table.CdkFooterCell, useExisting: FooterCellComponent_1 }
                ],
                styles: [":host{display:grid;grid-auto-flow:column;align-content:center;align-items:center;justify-content:start;justify-items:stretch;height:var(--dg-data-table--row-height);padding:0 var(--dg-data-table--column-spacing);background-color:var(--dg-theme--background--card);color:var(--dg-theme--foreground--secondary-text);font-size:var(--dg-typography--caption--font-size);font-weight:var(--dg-typography--caption--font-weight);text-transform:var(--dg-typography--caption--text-transform);line-height:var(--dg-typography--caption--line-height);letter-spacing:var(--dg-typography--caption--letter-spacing)}:host.cdk-table-sticky:first-child:not(:last-child){border-right:var(--dg-data-table--divider)}:host.cdk-table-sticky:last-child:not(:first-child){border-left:var(--dg-data-table--divider)}:host-context(tfoot:first-child>tr:not(:first-child)),:host-context(tfoot:not(:first-child)>tr){border-top:var(--dg-data-table--divider)}"]
            })
        ], FooterCellComponent);
        return FooterCellComponent;
    }(table.CdkFooterCell));

    var __extends$2 = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var HeaderCellComponent = /** @class */ (function (_super) {
        __extends$2(HeaderCellComponent, _super);
        function HeaderCellComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HeaderCellComponent_1 = HeaderCellComponent;
        var HeaderCellComponent_1;
        HeaderCellComponent = HeaderCellComponent_1 = __decorate$2([
            core.Component({
                selector: 'th[dg-header-cell]',
                template: "<ng-content></ng-content>\n",
                providers: [
                    { provide: table.CdkHeaderCell, useExisting: HeaderCellComponent_1 }
                ],
                styles: [":host{display:grid;grid-auto-flow:column;align-content:center;align-items:center;justify-content:start;justify-items:stretch;height:var(--dg-data-table--row-height);padding:0 var(--dg-data-table--column-spacing);background-color:var(--dg-theme--background--card);color:var(--dg-theme--foreground--secondary-text);font-size:var(--dg-typography--caption--font-size);font-weight:var(--dg-typography--caption--font-weight);text-transform:var(--dg-typography--caption--text-transform);line-height:var(--dg-typography--caption--line-height);letter-spacing:var(--dg-typography--caption--letter-spacing)}:host.cdk-table-sticky:first-child:not(:last-child){border-right:var(--dg-data-table--divider)}:host.cdk-table-sticky:last-child:not(:first-child){border-left:var(--dg-data-table--divider)}:host-context(thead:last-child>tr:not(:last-child)),:host-context(thead:not(:last-child)>tr){border-bottom:var(--dg-data-table--divider)}"]
            })
        ], HeaderCellComponent);
        return HeaderCellComponent;
    }(table.CdkHeaderCell));

    var __extends$3 = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var ContentRowComponent = /** @class */ (function (_super) {
        __extends$3(ContentRowComponent, _super);
        function ContentRowComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ContentRowComponent_1 = ContentRowComponent;
        var ContentRowComponent_1;
        ContentRowComponent = ContentRowComponent_1 = __decorate$3([
            core.Component({
                selector: 'tr[dg-content-row]',
                template: "<ng-container dgContentCellOutlet></ng-container>\n",
                providers: [
                    { provide: table.CdkRow, useExisting: ContentRowComponent_1 }
                ],
                styles: [":host{display:contents}"]
            })
        ], ContentRowComponent);
        return ContentRowComponent;
    }(table.CdkRow));

    var __extends$4 = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var FooterRowComponent = /** @class */ (function (_super) {
        __extends$4(FooterRowComponent, _super);
        function FooterRowComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FooterRowComponent_1 = FooterRowComponent;
        var FooterRowComponent_1;
        FooterRowComponent = FooterRowComponent_1 = __decorate$4([
            core.Component({
                selector: 'tr[dg-footer-row]',
                template: "<ng-container dgFooterCellOutlet></ng-container>\n",
                providers: [
                    { provide: table.CdkFooterRow, useExisting: FooterRowComponent_1 }
                ],
                styles: [":host{display:contents}"]
            })
        ], FooterRowComponent);
        return FooterRowComponent;
    }(table.CdkFooterRow));

    var __extends$5 = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate$5 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var HeaderRowComponent = /** @class */ (function (_super) {
        __extends$5(HeaderRowComponent, _super);
        function HeaderRowComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HeaderRowComponent_1 = HeaderRowComponent;
        var HeaderRowComponent_1;
        HeaderRowComponent = HeaderRowComponent_1 = __decorate$5([
            core.Component({
                selector: 'tr[dg-header-row]',
                template: "<ng-container dgHeaderCellOutlet></ng-container>\n",
                providers: [
                    { provide: table.CdkHeaderRow, useExisting: HeaderRowComponent_1 }
                ],
                styles: [":host{display:contents}"]
            })
        ], HeaderRowComponent);
        return HeaderRowComponent;
    }(table.CdkHeaderRow));

    var __extends$6 = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate$6 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var TableComponent = /** @class */ (function (_super) {
        __extends$6(TableComponent, _super);
        function TableComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TableComponent_1 = TableComponent;
        Object.defineProperty(TableComponent.prototype, "gridTemplateColumns", {
            get: function () {
                var columnDefs = this._contentColumnDefs;
                if (columnDefs) {
                    return columnDefs.map(function (_a) {
                        var sizing = _a.sizing;
                        return sizing;
                    }).join(' ');
                }
                return 'none';
            },
            enumerable: true,
            configurable: true
        });
        TableComponent.prototype.updateStickyColumnStyles = function () {
            _super.prototype.updateStickyColumnStyles.call(this);
        };
        var TableComponent_1;
        __decorate$6([
            core.HostBinding('style.grid-template-columns'),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [])
        ], TableComponent.prototype, "gridTemplateColumns", null);
        __decorate$6([
            core.HostListener('window:resize'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], TableComponent.prototype, "updateStickyColumnStyles", null);
        TableComponent = TableComponent_1 = __decorate$6([
            core.Component({
                selector: 'table[dg-table]',
                template: "<ng-container select=\"caption\"></ng-container>\n\n<ng-container dgHeaderRowOutlet></ng-container>\n<ng-container dgContentRowOutlet></ng-container>\n<ng-container dgFooterRowOutlet></ng-container>\n",
                providers: [
                    { provide: table.CdkTable, useExisting: TableComponent_1 }
                ],
                styles: [":host{--dg-data-table--row-height:calc(var(--dg-layout-grid--gutters) * 2);--dg-data-table--column-spacing:var(--dg-layout-grid--gutters);--dg-data-table--divider:1px solid var(--dg-theme--foreground--divider);display:grid;grid-auto-rows:1fr}::ng-deep tbody,::ng-deep tfoot,::ng-deep thead{display:contents}"]
            })
        ], TableComponent);
        return TableComponent;
    }(table.CdkTable));

    var __extends$7 = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate$7 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var ContentCellDefDirective = /** @class */ (function (_super) {
        __extends$7(ContentCellDefDirective, _super);
        function ContentCellDefDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ContentCellDefDirective_1 = ContentCellDefDirective;
        var ContentCellDefDirective_1;
        ContentCellDefDirective = ContentCellDefDirective_1 = __decorate$7([
            core.Directive({
                selector: '[dgContentCellDef]',
                providers: [
                    { provide: table.CdkCellDef, useExisting: ContentCellDefDirective_1 }
                ]
            })
        ], ContentCellDefDirective);
        return ContentCellDefDirective;
    }(table.CdkCellDef));

    var __extends$8 = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate$8 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var FooterCellDefDirective = /** @class */ (function (_super) {
        __extends$8(FooterCellDefDirective, _super);
        function FooterCellDefDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FooterCellDefDirective_1 = FooterCellDefDirective;
        var FooterCellDefDirective_1;
        FooterCellDefDirective = FooterCellDefDirective_1 = __decorate$8([
            core.Directive({
                selector: '[dgFooterCellDef]',
                providers: [
                    { provide: table.CdkFooterCellDef, useExisting: FooterCellDefDirective_1 }
                ]
            })
        ], FooterCellDefDirective);
        return FooterCellDefDirective;
    }(table.CdkFooterCellDef));

    var __extends$9 = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate$9 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var HeaderCellDefDirective = /** @class */ (function (_super) {
        __extends$9(HeaderCellDefDirective, _super);
        function HeaderCellDefDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HeaderCellDefDirective_1 = HeaderCellDefDirective;
        var HeaderCellDefDirective_1;
        HeaderCellDefDirective = HeaderCellDefDirective_1 = __decorate$9([
            core.Directive({
                selector: '[dgHeaderCellDef]',
                providers: [
                    { provide: table.CdkHeaderCellDef, useExisting: HeaderCellDefDirective_1 }
                ]
            })
        ], HeaderCellDefDirective);
        return HeaderCellDefDirective;
    }(table.CdkHeaderCellDef));

    var __extends$a = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate$a = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var ContentCellOutletDirective = /** @class */ (function (_super) {
        __extends$a(ContentCellOutletDirective, _super);
        function ContentCellOutletDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ContentCellOutletDirective_1 = ContentCellOutletDirective;
        var ContentCellOutletDirective_1;
        ContentCellOutletDirective = ContentCellOutletDirective_1 = __decorate$a([
            core.Directive({
                selector: '[dgContentCellOutlet]',
                providers: [
                    { provide: table.CdkCellOutlet, useExisting: ContentCellOutletDirective_1 }
                ]
            })
        ], ContentCellOutletDirective);
        return ContentCellOutletDirective;
    }(table.CdkCellOutlet));

    var __extends$b = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate$b = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var FooterCellOutletDirective = /** @class */ (function (_super) {
        __extends$b(FooterCellOutletDirective, _super);
        function FooterCellOutletDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FooterCellOutletDirective_1 = FooterCellOutletDirective;
        var FooterCellOutletDirective_1;
        FooterCellOutletDirective = FooterCellOutletDirective_1 = __decorate$b([
            core.Directive({
                selector: '[dgFooterCellOutlet]',
                providers: [
                    { provide: table.CdkCellOutlet, useExisting: FooterCellOutletDirective_1 }
                ]
            })
        ], FooterCellOutletDirective);
        return FooterCellOutletDirective;
    }(table.CdkCellOutlet));

    var __extends$c = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate$c = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var HeaderCellOutletDirective = /** @class */ (function (_super) {
        __extends$c(HeaderCellOutletDirective, _super);
        function HeaderCellOutletDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HeaderCellOutletDirective_1 = HeaderCellOutletDirective;
        var HeaderCellOutletDirective_1;
        HeaderCellOutletDirective = HeaderCellOutletDirective_1 = __decorate$c([
            core.Directive({
                selector: '[dgHeaderCellOutlet]',
                providers: [
                    { provide: table.CdkCellOutlet, useExisting: HeaderCellOutletDirective_1 }
                ]
            })
        ], HeaderCellOutletDirective);
        return HeaderCellOutletDirective;
    }(table.CdkCellOutlet));

    var __extends$d = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate$d = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata$1 = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ContentRowDefDirective = /** @class */ (function (_super) {
        __extends$d(ContentRowDefDirective, _super);
        function ContentRowDefDirective() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.when = function () { return true; };
            return _this;
        }
        ContentRowDefDirective_1 = ContentRowDefDirective;
        var ContentRowDefDirective_1;
        __decorate$d([
            core.Input('dgContentRowDefColumns'),
            __metadata$1("design:type", Object)
        ], ContentRowDefDirective.prototype, "columns", void 0);
        __decorate$d([
            core.Input('dgContentRowDefWhen'),
            __metadata$1("design:type", Function)
        ], ContentRowDefDirective.prototype, "when", void 0);
        ContentRowDefDirective = ContentRowDefDirective_1 = __decorate$d([
            core.Directive({
                selector: '[dgContentRowDef]',
                providers: [
                    { provide: table.CdkRowDef, useExisting: ContentRowDefDirective_1 }
                ]
            })
        ], ContentRowDefDirective);
        return ContentRowDefDirective;
    }(table.CdkRowDef));

    var __extends$e = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate$e = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata$2 = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var FooterRowDefDirective = /** @class */ (function (_super) {
        __extends$e(FooterRowDefDirective, _super);
        function FooterRowDefDirective() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.sticky = false;
            return _this;
        }
        FooterRowDefDirective_1 = FooterRowDefDirective;
        var FooterRowDefDirective_1;
        __decorate$e([
            core.Input('dgFooterRowDef'),
            __metadata$2("design:type", Object)
        ], FooterRowDefDirective.prototype, "columns", void 0);
        __decorate$e([
            core.Input('dgFooterRowDefSticky'),
            __metadata$2("design:type", Boolean)
        ], FooterRowDefDirective.prototype, "sticky", void 0);
        FooterRowDefDirective = FooterRowDefDirective_1 = __decorate$e([
            core.Directive({
                selector: '[dgFooterRowDef]',
                providers: [
                    { provide: table.CdkFooterRowDef, useExisting: FooterRowDefDirective_1 }
                ]
            })
        ], FooterRowDefDirective);
        return FooterRowDefDirective;
    }(table.CdkFooterRowDef));

    var __extends$f = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate$f = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata$3 = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var HeaderRowDefDirective = /** @class */ (function (_super) {
        __extends$f(HeaderRowDefDirective, _super);
        function HeaderRowDefDirective() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.sticky = false;
            return _this;
        }
        HeaderRowDefDirective_1 = HeaderRowDefDirective;
        var HeaderRowDefDirective_1;
        __decorate$f([
            core.Input('dgHeaderRowDef'),
            __metadata$3("design:type", Object)
        ], HeaderRowDefDirective.prototype, "columns", void 0);
        __decorate$f([
            core.Input('dgHeaderRowDefSticky'),
            __metadata$3("design:type", Boolean)
        ], HeaderRowDefDirective.prototype, "sticky", void 0);
        HeaderRowDefDirective = HeaderRowDefDirective_1 = __decorate$f([
            core.Directive({
                selector: '[dgHeaderRowDef]',
                providers: [
                    { provide: table.CdkHeaderRowDef, useExisting: HeaderRowDefDirective_1 }
                ]
            })
        ], HeaderRowDefDirective);
        return HeaderRowDefDirective;
    }(table.CdkHeaderRowDef));

    var __extends$g = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate$g = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var ContentRowOutletDirective = /** @class */ (function (_super) {
        __extends$g(ContentRowOutletDirective, _super);
        function ContentRowOutletDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ContentRowOutletDirective_1 = ContentRowOutletDirective;
        var ContentRowOutletDirective_1;
        ContentRowOutletDirective = ContentRowOutletDirective_1 = __decorate$g([
            core.Directive({
                selector: '[dgContentRowOutlet]',
                providers: [
                    { provide: table.DataRowOutlet, useExisting: ContentRowOutletDirective_1 }
                ]
            })
        ], ContentRowOutletDirective);
        return ContentRowOutletDirective;
    }(table.DataRowOutlet));

    var __extends$h = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate$h = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var FooterRowOutletDirective = /** @class */ (function (_super) {
        __extends$h(FooterRowOutletDirective, _super);
        function FooterRowOutletDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FooterRowOutletDirective_1 = FooterRowOutletDirective;
        var FooterRowOutletDirective_1;
        FooterRowOutletDirective = FooterRowOutletDirective_1 = __decorate$h([
            core.Directive({
                selector: '[dgFooterRowOutlet]',
                providers: [
                    { provide: table.FooterRowOutlet, useExisting: FooterRowOutletDirective_1 }
                ]
            })
        ], FooterRowOutletDirective);
        return FooterRowOutletDirective;
    }(table.FooterRowOutlet));

    var __extends$i = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate$i = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var HeaderRowOutletDirective = /** @class */ (function (_super) {
        __extends$i(HeaderRowOutletDirective, _super);
        function HeaderRowOutletDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HeaderRowOutletDirective_1 = HeaderRowOutletDirective;
        var HeaderRowOutletDirective_1;
        HeaderRowOutletDirective = HeaderRowOutletDirective_1 = __decorate$i([
            core.Directive({
                selector: '[dgHeaderRowOutlet]',
                providers: [
                    { provide: table.HeaderRowOutlet, useExisting: HeaderRowOutletDirective_1 }
                ]
            })
        ], HeaderRowOutletDirective);
        return HeaderRowOutletDirective;
    }(table.HeaderRowOutlet));

    var __extends$j = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate$j = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata$4 = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ColumnDefDirective = /** @class */ (function (_super) {
        __extends$j(ColumnDefDirective, _super);
        function ColumnDefDirective() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.sizing = 'auto';
            _this.sticky = false;
            _this.stickyEnd = false;
            return _this;
        }
        ColumnDefDirective_1 = ColumnDefDirective;
        var ColumnDefDirective_1;
        __decorate$j([
            core.Input('dgColumnDef'),
            __metadata$4("design:type", String)
        ], ColumnDefDirective.prototype, "name", void 0);
        __decorate$j([
            core.Input(),
            __metadata$4("design:type", String)
        ], ColumnDefDirective.prototype, "sizing", void 0);
        __decorate$j([
            core.Input(),
            __metadata$4("design:type", Boolean)
        ], ColumnDefDirective.prototype, "sticky", void 0);
        __decorate$j([
            core.Input(),
            __metadata$4("design:type", Boolean)
        ], ColumnDefDirective.prototype, "stickyEnd", void 0);
        ColumnDefDirective = ColumnDefDirective_1 = __decorate$j([
            core.Directive({
                selector: '[dgColumnDef]',
                providers: [
                    { provide: table.CdkColumnDef, useExisting: ColumnDefDirective_1 }
                ]
            })
        ], ColumnDefDirective);
        return ColumnDefDirective;
    }(table.CdkColumnDef));

    var __decorate$k = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __read = (this && this.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    var __spread = (this && this.__spread) || function () {
        for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
        return ar;
    };
    var modules = [
        common.CommonModule
    ];
    var components = [
        ContentCellComponent,
        FooterCellComponent,
        HeaderCellComponent,
        ContentRowComponent,
        FooterRowComponent,
        HeaderRowComponent,
        TableComponent
    ];
    var directives = [
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
    var DataTableModule = /** @class */ (function () {
        function DataTableModule() {
        }
        DataTableModule = __decorate$k([
            core.NgModule({
                imports: __spread(modules),
                declarations: __spread(components, directives),
                exports: __spread(components, directives)
            })
        ], DataTableModule);
        return DataTableModule;
    }());

    exports.ColumnDefDirective = ColumnDefDirective;
    exports.ContentCellComponent = ContentCellComponent;
    exports.ContentCellDefDirective = ContentCellDefDirective;
    exports.ContentCellOutletDirective = ContentCellOutletDirective;
    exports.ContentRowComponent = ContentRowComponent;
    exports.ContentRowDefDirective = ContentRowDefDirective;
    exports.ContentRowOutletDirective = ContentRowOutletDirective;
    exports.DataTableModule = DataTableModule;
    exports.FooterCellComponent = FooterCellComponent;
    exports.FooterCellDefDirective = FooterCellDefDirective;
    exports.FooterCellOutletDirective = FooterCellOutletDirective;
    exports.FooterRowComponent = FooterRowComponent;
    exports.FooterRowDefDirective = FooterRowDefDirective;
    exports.FooterRowOutletDirective = FooterRowOutletDirective;
    exports.HeaderCellComponent = HeaderCellComponent;
    exports.HeaderCellDefDirective = HeaderCellDefDirective;
    exports.HeaderCellOutletDirective = HeaderCellOutletDirective;
    exports.HeaderRowComponent = HeaderRowComponent;
    exports.HeaderRowDefDirective = HeaderRowDefDirective;
    exports.HeaderRowOutletDirective = HeaderRowOutletDirective;
    exports.TableComponent = TableComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=data-table.umd.js.map
