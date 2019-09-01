import { CdkCell, CdkRow, CdkFooterCell, CdkFooterRow, CdkHeaderCell, CdkHeaderRow, CdkTable, CdkColumnDef, CdkCellDef, CdkCellOutlet, CdkRowDef, DataRowOutlet, CdkFooterCellDef, CdkFooterRowDef, FooterRowOutlet, CdkHeaderCellDef, CdkHeaderRowDef, HeaderRowOutlet } from '@angular/cdk/table';
import { Component, HostBinding, HostListener, Directive, Input, NgModule } from '@angular/core';
import { FoundationModule } from '@datagazer/foundation';

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
var ContentCellComponent = /** @class */ (function (_super) {
    __extends(ContentCellComponent, _super);
    function ContentCellComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentCellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td[dg-content-cell]',
                    template: "<ng-content></ng-content>\n",
                    providers: [
                        { provide: CdkCell, useExisting: ContentCellComponent }
                    ],
                    styles: [":host{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;box-sizing:border-box;min-width:-webkit-min-content;min-width:min-content;height:calc(var(--dg-layout--margins) * 2 + 4px);padding:calc(var(--dg-layout--margins) * .5) var(--dg-layout--margins);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:var(--dg-typography--body-2--font-family);font-size:var(--dg-typography--body-2--font-size);line-height:var(--dg-typography--body-2--line-height);font-weight:var(--dg-typography--body-2--font-weight);text-transform:var(--dg-typography--body-2--text-transform);letter-spacing:var(--dg-typography--body-2--letter-spacing);background-color:var(--dg-theme--surface);color:var(--dg-theme--primary-text)}:host :host-context(tbody:last-of-type>tr:not(:last-child)),:host :host-context(tbody:not(:last-of-type)>tr){border-bottom:var(--dg-divider--on-surface)}:host.cdk-table-sticky[style~=\"left:\"]:not(:last-child){border-right:var(--dg-divider--on-surface)}:host.cdk-table-sticky[style~=\"right:\"]:not(:first-child){border-left:var(--dg-divider--on-surface)}"]
                }] }
    ];
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
var ContentRowComponent = /** @class */ (function (_super) {
    __extends$1(ContentRowComponent, _super);
    function ContentRowComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentRowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tr[dg-content-row]',
                    template: "<ng-container dgContentCellOutlet></ng-container>\n",
                    providers: [
                        { provide: CdkRow, useExisting: ContentRowComponent }
                    ],
                    styles: [":host{display:contents}"]
                }] }
    ];
    return ContentRowComponent;
}(CdkRow));

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
var FooterCellComponent = /** @class */ (function (_super) {
    __extends$2(FooterCellComponent, _super);
    function FooterCellComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FooterCellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td[dg-footer-cell]',
                    template: "<ng-content></ng-content>\n",
                    providers: [
                        { provide: CdkFooterCell, useExisting: FooterCellComponent }
                    ],
                    styles: [":host{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;box-sizing:border-box;min-width:-webkit-min-content;min-width:min-content;height:calc(var(--dg-layout--margins) * 2 + 8px);padding:calc(var(--dg-layout--margins) * .5) var(--dg-layout--margins);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:var(--dg-typography--subtitle-2--font-family);font-size:var(--dg-typography--subtitle-2--font-size);line-height:var(--dg-typography--subtitle-2--line-height);font-weight:var(--dg-typography--subtitle-2--font-weight);text-transform:var(--dg-typography--subtitle-2--text-transform);letter-spacing:var(--dg-typography--subtitle-2--letter-spacing);background-color:var(--dg-theme--surface);color:var(--dg-theme--secondary-text)}:host :host-context(tfoot:first-child>tr:not(:first-child)),:host :host-context(tfoot:not(:first-child)>tr){border-top:var(--dg-divider--on-surface)}:host.cdk-table-sticky[style~=\"left:\"]:not(:last-child){border-right:var(--dg-divider--on-surface)}:host.cdk-table-sticky[style~=\"right:\"]:not(:first-child){border-left:var(--dg-divider--on-surface)}"]
                }] }
    ];
    return FooterCellComponent;
}(CdkFooterCell));

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
var FooterRowComponent = /** @class */ (function (_super) {
    __extends$3(FooterRowComponent, _super);
    function FooterRowComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FooterRowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tr[dg-footer-row]',
                    template: "<ng-container dgFooterCellOutlet></ng-container>\n",
                    providers: [
                        { provide: CdkFooterRow, useExisting: FooterRowComponent }
                    ],
                    styles: [":host{display:contents}"]
                }] }
    ];
    return FooterRowComponent;
}(CdkFooterRow));

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
var HeaderCellComponent = /** @class */ (function (_super) {
    __extends$4(HeaderCellComponent, _super);
    function HeaderCellComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderCellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'th[dg-header-cell]',
                    template: "<ng-content></ng-content>\n",
                    providers: [
                        { provide: CdkHeaderCell, useExisting: HeaderCellComponent }
                    ],
                    styles: [":host{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;box-sizing:border-box;min-width:-webkit-min-content;min-width:min-content;height:calc(var(--dg-layout--margins) * 2 + 8px);padding:calc(var(--dg-layout--margins) * .5) var(--dg-layout--margins);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:var(--dg-typography--subtitle-2--font-family);font-size:var(--dg-typography--subtitle-2--font-size);line-height:var(--dg-typography--subtitle-2--line-height);font-weight:var(--dg-typography--subtitle-2--font-weight);text-transform:var(--dg-typography--subtitle-2--text-transform);letter-spacing:var(--dg-typography--subtitle-2--letter-spacing);background-color:var(--dg-theme--surface);color:var(--dg-theme--secondary-text)}:host :host-context(thead:last-child>tr:not(:last-child)),:host :host-context(thead:not(:last-child)>tr){border-bottom:var(--dg-divider--on-surface)}:host.cdk-table-sticky[style~=\"left:\"]:not(:last-child){border-right:var(--dg-divider--on-surface)}:host.cdk-table-sticky[style~=\"right:\"]:not(:first-child){border-left:var(--dg-divider--on-surface)}"]
                }] }
    ];
    return HeaderCellComponent;
}(CdkHeaderCell));

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
var HeaderRowComponent = /** @class */ (function (_super) {
    __extends$5(HeaderRowComponent, _super);
    function HeaderRowComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderRowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tr[dg-header-row]',
                    template: "<ng-container dgHeaderCellOutlet></ng-container>\n",
                    providers: [
                        { provide: CdkHeaderRow, useExisting: HeaderRowComponent }
                    ],
                    styles: [":host{display:contents}"]
                }] }
    ];
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
var TableComponent = /** @class */ (function (_super) {
    __extends$6(TableComponent, _super);
    function TableComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TableComponent.prototype, "gridTemplateColumns", {
        get: function () {
            var columns = Array.from(this._contentHeaderRowDefs.first.columns);
            return this._contentColumnDefs
                .filter(function (_a) {
                var column = _a.name;
                return columns.includes(column);
            })
                .map(function (_a) {
                var size = _a.size;
                return size;
            })
                .join(' ');
        },
        enumerable: true,
        configurable: true
    });
    TableComponent.prototype.updateStickyStyles = function () {
        this.updateStickyHeaderRowStyles();
        this.updateStickyFooterRowStyles();
        this.updateStickyColumnStyles();
    };
    TableComponent.prototype.ngAfterViewInit = function () {
        this.updateStickyStyles();
    };
    TableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'table[dg-table]',
                    template: "<ng-container select=\"caption\"></ng-container>\n\n<ng-container dgHeaderRowOutlet></ng-container>\n<ng-container dgContentRowOutlet></ng-container>\n<ng-container dgFooterRowOutlet></ng-container>\n",
                    providers: [
                        { provide: CdkTable, useExisting: TableComponent }
                    ],
                    styles: [":host{display:grid;border-radius:var(--dg-shape--medium-component);overflow:auto;background-color:var(--dg-theme--surface)}:host:not([dg-elevation]),:host[dg-elevation=\"0\"]{border:var(--dg-divider--on-surface)}::ng-deep tbody,::ng-deep tfoot,::ng-deep thead{display:contents}"]
                }] }
    ];
    TableComponent.propDecorators = {
        gridTemplateColumns: [{ type: HostBinding, args: ['style.gridTemplateColumns',] }],
        updateStickyStyles: [{ type: HostListener, args: ['window:resize',] }]
    };
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
var ColumnDefDirective = /** @class */ (function (_super) {
    __extends$7(ColumnDefDirective, _super);
    function ColumnDefDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.size = 'auto';
        _this.sticky = false;
        _this.stickyEnd = false;
        return _this;
    }
    ColumnDefDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dgColumnDef]',
                    providers: [
                        { provide: CdkColumnDef, useExisting: ColumnDefDirective }
                    ]
                },] }
    ];
    ColumnDefDirective.propDecorators = {
        name: [{ type: Input, args: ['dgColumnDef',] }],
        size: [{ type: Input }],
        sticky: [{ type: Input }],
        stickyEnd: [{ type: Input }]
    };
    return ColumnDefDirective;
}(CdkColumnDef));

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
var ContentCellDefDirective = /** @class */ (function (_super) {
    __extends$8(ContentCellDefDirective, _super);
    function ContentCellDefDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentCellDefDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dgContentCellDef]',
                    providers: [
                        { provide: CdkCellDef, useExisting: ContentCellDefDirective }
                    ]
                },] }
    ];
    return ContentCellDefDirective;
}(CdkCellDef));

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
var ContentCellOutletDirective = /** @class */ (function (_super) {
    __extends$9(ContentCellOutletDirective, _super);
    function ContentCellOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentCellOutletDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dgContentCellOutlet]',
                    providers: [
                        { provide: CdkCellOutlet, useExisting: ContentCellOutletDirective }
                    ]
                },] }
    ];
    return ContentCellOutletDirective;
}(CdkCellOutlet));

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
var ContentRowDefDirective = /** @class */ (function (_super) {
    __extends$a(ContentRowDefDirective, _super);
    function ContentRowDefDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.when = function () { return true; };
        return _this;
    }
    ContentRowDefDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dgContentRowDef]',
                    providers: [
                        { provide: CdkRowDef, useExisting: ContentRowDefDirective }
                    ]
                },] }
    ];
    ContentRowDefDirective.propDecorators = {
        columns: [{ type: Input, args: ['dgContentRowDefColumns',] }],
        when: [{ type: Input, args: ['dgContentRowDefWhen',] }]
    };
    return ContentRowDefDirective;
}(CdkRowDef));

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
var ContentRowOutletDirective = /** @class */ (function (_super) {
    __extends$b(ContentRowOutletDirective, _super);
    function ContentRowOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentRowOutletDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dgContentRowOutlet]',
                    providers: [
                        { provide: DataRowOutlet, useExisting: ContentRowOutletDirective }
                    ]
                },] }
    ];
    return ContentRowOutletDirective;
}(DataRowOutlet));

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
var FooterCellDefDirective = /** @class */ (function (_super) {
    __extends$c(FooterCellDefDirective, _super);
    function FooterCellDefDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FooterCellDefDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dgFooterCellDef]',
                    providers: [
                        { provide: CdkFooterCellDef, useExisting: FooterCellDefDirective }
                    ]
                },] }
    ];
    return FooterCellDefDirective;
}(CdkFooterCellDef));

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
var FooterCellOutletDirective = /** @class */ (function (_super) {
    __extends$d(FooterCellOutletDirective, _super);
    function FooterCellOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FooterCellOutletDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dgFooterCellOutlet]',
                    providers: [
                        { provide: CdkCellOutlet, useExisting: FooterCellOutletDirective }
                    ]
                },] }
    ];
    return FooterCellOutletDirective;
}(CdkCellOutlet));

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
var FooterRowDefDirective = /** @class */ (function (_super) {
    __extends$e(FooterRowDefDirective, _super);
    function FooterRowDefDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sticky = false;
        return _this;
    }
    FooterRowDefDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dgFooterRowDef]',
                    providers: [
                        { provide: CdkFooterRowDef, useExisting: FooterRowDefDirective }
                    ]
                },] }
    ];
    FooterRowDefDirective.propDecorators = {
        columns: [{ type: Input, args: ['dgFooterRowDef',] }],
        sticky: [{ type: Input, args: ['dgFooterRowDefSticky',] }]
    };
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
var FooterRowOutletDirective = /** @class */ (function (_super) {
    __extends$f(FooterRowOutletDirective, _super);
    function FooterRowOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FooterRowOutletDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dgFooterRowOutlet]',
                    providers: [
                        { provide: FooterRowOutlet, useExisting: FooterRowOutletDirective }
                    ]
                },] }
    ];
    return FooterRowOutletDirective;
}(FooterRowOutlet));

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
var HeaderCellDefDirective = /** @class */ (function (_super) {
    __extends$g(HeaderCellDefDirective, _super);
    function HeaderCellDefDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderCellDefDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dgHeaderCellDef]',
                    providers: [
                        { provide: CdkHeaderCellDef, useExisting: HeaderCellDefDirective }
                    ]
                },] }
    ];
    return HeaderCellDefDirective;
}(CdkHeaderCellDef));

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
var HeaderCellOutletDirective = /** @class */ (function (_super) {
    __extends$h(HeaderCellOutletDirective, _super);
    function HeaderCellOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderCellOutletDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dgHeaderCellOutlet]',
                    providers: [
                        { provide: CdkCellOutlet, useExisting: HeaderCellOutletDirective }
                    ]
                },] }
    ];
    return HeaderCellOutletDirective;
}(CdkCellOutlet));

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
var HeaderRowDefDirective = /** @class */ (function (_super) {
    __extends$i(HeaderRowDefDirective, _super);
    function HeaderRowDefDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sticky = false;
        return _this;
    }
    HeaderRowDefDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dgHeaderRowDef]',
                    providers: [
                        { provide: CdkHeaderRowDef, useExisting: HeaderRowDefDirective }
                    ]
                },] }
    ];
    HeaderRowDefDirective.propDecorators = {
        columns: [{ type: Input, args: ['dgHeaderRowDef',] }],
        sticky: [{ type: Input, args: ['dgHeaderRowDefSticky',] }]
    };
    return HeaderRowDefDirective;
}(CdkHeaderRowDef));

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
var HeaderRowOutletDirective = /** @class */ (function (_super) {
    __extends$j(HeaderRowOutletDirective, _super);
    function HeaderRowOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderRowOutletDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dgHeaderRowOutlet]',
                    providers: [
                        { provide: HeaderRowOutlet, useExisting: HeaderRowOutletDirective }
                    ]
                },] }
    ];
    return HeaderRowOutletDirective;
}(HeaderRowOutlet));

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
    FoundationModule
];
var components = [
    ContentCellComponent,
    ContentRowComponent,
    FooterCellComponent,
    FooterRowComponent,
    HeaderCellComponent,
    HeaderRowComponent,
    TableComponent
];
var directives = [
    ColumnDefDirective,
    ContentCellDefDirective,
    ContentCellOutletDirective,
    ContentRowDefDirective,
    ContentRowOutletDirective,
    FooterCellDefDirective,
    FooterCellOutletDirective,
    FooterRowDefDirective,
    FooterRowOutletDirective,
    HeaderCellDefDirective,
    HeaderCellOutletDirective,
    HeaderRowDefDirective,
    HeaderRowOutletDirective
];
var DataTableModule = /** @class */ (function () {
    function DataTableModule() {
    }
    DataTableModule.decorators = [
        { type: NgModule, args: [{
                    imports: __spread(modules),
                    declarations: __spread(components, directives),
                    exports: __spread(modules, components, directives)
                },] }
    ];
    return DataTableModule;
}());

// Components

/**
 * Generated bundle index. Do not edit.
 */

export { ColumnDefDirective, ContentCellComponent, ContentCellDefDirective, ContentCellOutletDirective, ContentRowComponent, ContentRowDefDirective, ContentRowOutletDirective, DataTableModule, FooterCellComponent, FooterCellDefDirective, FooterCellOutletDirective, FooterRowComponent, FooterRowDefDirective, FooterRowOutletDirective, HeaderCellComponent, HeaderCellDefDirective, HeaderCellOutletDirective, HeaderRowComponent, HeaderRowDefDirective, HeaderRowOutletDirective, TableComponent };
//# sourceMappingURL=data-table.js.map
