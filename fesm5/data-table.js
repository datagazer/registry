import { CdkCell, CdkFooterCell, CdkHeaderCell, CdkRow, CdkFooterRow, CdkHeaderRow, CdkTable, CdkCellDef, CdkFooterCellDef, CdkHeaderCellDef, CdkCellOutlet, CdkRowDef, CdkFooterRowDef, CdkHeaderRowDef, DataRowOutlet, FooterRowOutlet, HeaderRowOutlet, CdkColumnDef } from '@angular/cdk/table';
import { Component, HostBinding, HostListener, Directive, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        Component({
            selector: 'td[dg-content-cell]',
            template: "<ng-content></ng-content>\n",
            providers: [
                { provide: CdkCell, useExisting: ContentCellComponent_1 }
            ],
            styles: [":host{display:grid;grid-auto-flow:column;align-content:center;align-items:center;justify-content:start;justify-items:stretch;height:var(--dg-data-table--row-height);padding:0 var(--dg-data-table--column-spacing);background-color:var(--dg-theme--background--card);color:var(--dg-theme--foreground--text);font-size:var(--dg-typography--body-1--font-size);font-weight:var(--dg-typography--body-1--font-weight);text-transform:var(--dg-typography--body-1--text-transform);line-height:var(--dg-typography--body-1--line-height);letter-spacing:var(--dg-typography--body-1--letter-spacing)}:host.cdk-table-sticky:first-child:not(:last-child){border-right:var(--dg-data-table--divider)}:host.cdk-table-sticky:last-child:not(:first-child){border-left:var(--dg-data-table--divider)}:host-context(tbody:last-of-type>tr:not(:last-child)),:host-context(tbody:not(:last-of-type)>tr){border-bottom:var(--dg-data-table--divider)}"]
        })
    ], ContentCellComponent);
    return ContentCellComponent;
}(CdkCell));

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
        Component({
            selector: 'td[dg-footer-cell]',
            template: "<ng-content></ng-content>\n",
            providers: [
                { provide: CdkFooterCell, useExisting: FooterCellComponent_1 }
            ],
            styles: [":host{display:grid;grid-auto-flow:column;align-content:center;align-items:center;justify-content:start;justify-items:stretch;height:var(--dg-data-table--row-height);padding:0 var(--dg-data-table--column-spacing);background-color:var(--dg-theme--background--card);color:var(--dg-theme--foreground--secondary-text);font-size:var(--dg-typography--caption--font-size);font-weight:var(--dg-typography--caption--font-weight);text-transform:var(--dg-typography--caption--text-transform);line-height:var(--dg-typography--caption--line-height);letter-spacing:var(--dg-typography--caption--letter-spacing)}:host.cdk-table-sticky:first-child:not(:last-child){border-right:var(--dg-data-table--divider)}:host.cdk-table-sticky:last-child:not(:first-child){border-left:var(--dg-data-table--divider)}:host-context(tfoot:first-child>tr:not(:first-child)),:host-context(tfoot:not(:first-child)>tr){border-top:var(--dg-data-table--divider)}"]
        })
    ], FooterCellComponent);
    return FooterCellComponent;
}(CdkFooterCell));

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
        Component({
            selector: 'th[dg-header-cell]',
            template: "<ng-content></ng-content>\n",
            providers: [
                { provide: CdkHeaderCell, useExisting: HeaderCellComponent_1 }
            ],
            styles: [":host{display:grid;grid-auto-flow:column;align-content:center;align-items:center;justify-content:start;justify-items:stretch;height:var(--dg-data-table--row-height);padding:0 var(--dg-data-table--column-spacing);background-color:var(--dg-theme--background--card);color:var(--dg-theme--foreground--secondary-text);font-size:var(--dg-typography--caption--font-size);font-weight:var(--dg-typography--caption--font-weight);text-transform:var(--dg-typography--caption--text-transform);line-height:var(--dg-typography--caption--line-height);letter-spacing:var(--dg-typography--caption--letter-spacing)}:host.cdk-table-sticky:first-child:not(:last-child){border-right:var(--dg-data-table--divider)}:host.cdk-table-sticky:last-child:not(:first-child){border-left:var(--dg-data-table--divider)}:host-context(thead:last-child>tr:not(:last-child)),:host-context(thead:not(:last-child)>tr){border-bottom:var(--dg-data-table--divider)}"]
        })
    ], HeaderCellComponent);
    return HeaderCellComponent;
}(CdkHeaderCell));

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
        Component({
            selector: 'tr[dg-content-row]',
            template: "<ng-container dgContentCellOutlet></ng-container>\n",
            providers: [
                { provide: CdkRow, useExisting: ContentRowComponent_1 }
            ],
            styles: [":host{display:contents}"]
        })
    ], ContentRowComponent);
    return ContentRowComponent;
}(CdkRow));

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
        Component({
            selector: 'tr[dg-footer-row]',
            template: "<ng-container dgFooterCellOutlet></ng-container>\n",
            providers: [
                { provide: CdkFooterRow, useExisting: FooterRowComponent_1 }
            ],
            styles: [":host{display:contents}"]
        })
    ], FooterRowComponent);
    return FooterRowComponent;
}(CdkFooterRow));

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
        Component({
            selector: 'tr[dg-header-row]',
            template: "<ng-container dgHeaderCellOutlet></ng-container>\n",
            providers: [
                { provide: CdkHeaderRow, useExisting: HeaderRowComponent_1 }
            ],
            styles: [":host{display:contents}"]
        })
    ], HeaderRowComponent);
    return HeaderRowComponent;
}(CdkHeaderRow));

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
    return TableComponent;
}(CdkTable));

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
        Directive({
            selector: '[dgContentCellDef]',
            providers: [
                { provide: CdkCellDef, useExisting: ContentCellDefDirective_1 }
            ]
        })
    ], ContentCellDefDirective);
    return ContentCellDefDirective;
}(CdkCellDef));

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
        Directive({
            selector: '[dgFooterCellDef]',
            providers: [
                { provide: CdkFooterCellDef, useExisting: FooterCellDefDirective_1 }
            ]
        })
    ], FooterCellDefDirective);
    return FooterCellDefDirective;
}(CdkFooterCellDef));

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
        Directive({
            selector: '[dgHeaderCellDef]',
            providers: [
                { provide: CdkHeaderCellDef, useExisting: HeaderCellDefDirective_1 }
            ]
        })
    ], HeaderCellDefDirective);
    return HeaderCellDefDirective;
}(CdkHeaderCellDef));

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
        Directive({
            selector: '[dgContentCellOutlet]',
            providers: [
                { provide: CdkCellOutlet, useExisting: ContentCellOutletDirective_1 }
            ]
        })
    ], ContentCellOutletDirective);
    return ContentCellOutletDirective;
}(CdkCellOutlet));

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
        Directive({
            selector: '[dgFooterCellOutlet]',
            providers: [
                { provide: CdkCellOutlet, useExisting: FooterCellOutletDirective_1 }
            ]
        })
    ], FooterCellOutletDirective);
    return FooterCellOutletDirective;
}(CdkCellOutlet));

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
        Directive({
            selector: '[dgHeaderCellOutlet]',
            providers: [
                { provide: CdkCellOutlet, useExisting: HeaderCellOutletDirective_1 }
            ]
        })
    ], HeaderCellOutletDirective);
    return HeaderCellOutletDirective;
}(CdkCellOutlet));

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
    return ContentRowDefDirective;
}(CdkRowDef));

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
    return FooterRowDefDirective;
}(CdkFooterRowDef));

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
    return HeaderRowDefDirective;
}(CdkHeaderRowDef));

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
        Directive({
            selector: '[dgContentRowOutlet]',
            providers: [
                { provide: DataRowOutlet, useExisting: ContentRowOutletDirective_1 }
            ]
        })
    ], ContentRowOutletDirective);
    return ContentRowOutletDirective;
}(DataRowOutlet));

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
        Directive({
            selector: '[dgFooterRowOutlet]',
            providers: [
                { provide: FooterRowOutlet, useExisting: FooterRowOutletDirective_1 }
            ]
        })
    ], FooterRowOutletDirective);
    return FooterRowOutletDirective;
}(FooterRowOutlet));

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
        Directive({
            selector: '[dgHeaderRowOutlet]',
            providers: [
                { provide: HeaderRowOutlet, useExisting: HeaderRowOutletDirective_1 }
            ]
        })
    ], HeaderRowOutletDirective);
    return HeaderRowOutletDirective;
}(HeaderRowOutlet));

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
    return ColumnDefDirective;
}(CdkColumnDef));

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
    CommonModule
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
        NgModule({
            imports: __spread(modules),
            declarations: __spread(components, directives),
            exports: __spread(components, directives)
        })
    ], DataTableModule);
    return DataTableModule;
}());

export { ColumnDefDirective, ContentCellComponent, ContentCellDefDirective, ContentCellOutletDirective, ContentRowComponent, ContentRowDefDirective, ContentRowOutletDirective, DataTableModule, FooterCellComponent, FooterCellDefDirective, FooterCellOutletDirective, FooterRowComponent, FooterRowDefDirective, FooterRowOutletDirective, HeaderCellComponent, HeaderCellDefDirective, HeaderCellOutletDirective, HeaderRowComponent, HeaderRowDefDirective, HeaderRowOutletDirective, TableComponent };
//# sourceMappingURL=data-table.js.map
