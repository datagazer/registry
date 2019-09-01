(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/table'), require('@angular/core'), require('@datagazer/foundation')) :
    typeof define === 'function' && define.amd ? define('@datagazer/data-table', ['exports', '@angular/cdk/table', '@angular/core', '@datagazer/foundation'], factory) :
    (global = global || self, factory((global.datagazer = global.datagazer || {}, global.datagazer['data-table'] = {}), global.ng.cdk.table, global.ng.core, global.foundation));
}(this, function (exports, table, core, foundation) { 'use strict';

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
            { type: core.Component, args: [{
                        selector: 'td[dg-content-cell]',
                        template: "<ng-content></ng-content>\n",
                        providers: [
                            { provide: table.CdkCell, useExisting: ContentCellComponent }
                        ],
                        styles: [":host{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;box-sizing:border-box;min-width:-webkit-min-content;min-width:min-content;height:calc(var(--dg-layout--margins) * 2 + 4px);padding:calc(var(--dg-layout--margins) * .5) var(--dg-layout--margins);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:var(--dg-typography--body-2--font-family);font-size:var(--dg-typography--body-2--font-size);line-height:var(--dg-typography--body-2--line-height);font-weight:var(--dg-typography--body-2--font-weight);text-transform:var(--dg-typography--body-2--text-transform);letter-spacing:var(--dg-typography--body-2--letter-spacing);background-color:var(--dg-theme--surface);color:var(--dg-theme--primary-text)}:host :host-context(tbody:last-of-type>tr:not(:last-child)),:host :host-context(tbody:not(:last-of-type)>tr){border-bottom:var(--dg-divider--on-surface)}:host.cdk-table-sticky[style~=\"left:\"]:not(:last-child){border-right:var(--dg-divider--on-surface)}:host.cdk-table-sticky[style~=\"right:\"]:not(:first-child){border-left:var(--dg-divider--on-surface)}"]
                    }] }
        ];
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
    var ContentRowComponent = /** @class */ (function (_super) {
        __extends$1(ContentRowComponent, _super);
        function ContentRowComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ContentRowComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'tr[dg-content-row]',
                        template: "<ng-container dgContentCellOutlet></ng-container>\n",
                        providers: [
                            { provide: table.CdkRow, useExisting: ContentRowComponent }
                        ],
                        styles: [":host{display:contents}"]
                    }] }
        ];
        return ContentRowComponent;
    }(table.CdkRow));

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
            { type: core.Component, args: [{
                        selector: 'td[dg-footer-cell]',
                        template: "<ng-content></ng-content>\n",
                        providers: [
                            { provide: table.CdkFooterCell, useExisting: FooterCellComponent }
                        ],
                        styles: [":host{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;box-sizing:border-box;min-width:-webkit-min-content;min-width:min-content;height:calc(var(--dg-layout--margins) * 2 + 8px);padding:calc(var(--dg-layout--margins) * .5) var(--dg-layout--margins);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:var(--dg-typography--subtitle-2--font-family);font-size:var(--dg-typography--subtitle-2--font-size);line-height:var(--dg-typography--subtitle-2--line-height);font-weight:var(--dg-typography--subtitle-2--font-weight);text-transform:var(--dg-typography--subtitle-2--text-transform);letter-spacing:var(--dg-typography--subtitle-2--letter-spacing);background-color:var(--dg-theme--surface);color:var(--dg-theme--secondary-text)}:host :host-context(tfoot:first-child>tr:not(:first-child)),:host :host-context(tfoot:not(:first-child)>tr){border-top:var(--dg-divider--on-surface)}:host.cdk-table-sticky[style~=\"left:\"]:not(:last-child){border-right:var(--dg-divider--on-surface)}:host.cdk-table-sticky[style~=\"right:\"]:not(:first-child){border-left:var(--dg-divider--on-surface)}"]
                    }] }
        ];
        return FooterCellComponent;
    }(table.CdkFooterCell));

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
            { type: core.Component, args: [{
                        selector: 'tr[dg-footer-row]',
                        template: "<ng-container dgFooterCellOutlet></ng-container>\n",
                        providers: [
                            { provide: table.CdkFooterRow, useExisting: FooterRowComponent }
                        ],
                        styles: [":host{display:contents}"]
                    }] }
        ];
        return FooterRowComponent;
    }(table.CdkFooterRow));

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
            { type: core.Component, args: [{
                        selector: 'th[dg-header-cell]',
                        template: "<ng-content></ng-content>\n",
                        providers: [
                            { provide: table.CdkHeaderCell, useExisting: HeaderCellComponent }
                        ],
                        styles: [":host{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;box-sizing:border-box;min-width:-webkit-min-content;min-width:min-content;height:calc(var(--dg-layout--margins) * 2 + 8px);padding:calc(var(--dg-layout--margins) * .5) var(--dg-layout--margins);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:var(--dg-typography--subtitle-2--font-family);font-size:var(--dg-typography--subtitle-2--font-size);line-height:var(--dg-typography--subtitle-2--line-height);font-weight:var(--dg-typography--subtitle-2--font-weight);text-transform:var(--dg-typography--subtitle-2--text-transform);letter-spacing:var(--dg-typography--subtitle-2--letter-spacing);background-color:var(--dg-theme--surface);color:var(--dg-theme--secondary-text)}:host :host-context(thead:last-child>tr:not(:last-child)),:host :host-context(thead:not(:last-child)>tr){border-bottom:var(--dg-divider--on-surface)}:host.cdk-table-sticky[style~=\"left:\"]:not(:last-child){border-right:var(--dg-divider--on-surface)}:host.cdk-table-sticky[style~=\"right:\"]:not(:first-child){border-left:var(--dg-divider--on-surface)}"]
                    }] }
        ];
        return HeaderCellComponent;
    }(table.CdkHeaderCell));

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
            { type: core.Component, args: [{
                        selector: 'tr[dg-header-row]',
                        template: "<ng-container dgHeaderCellOutlet></ng-container>\n",
                        providers: [
                            { provide: table.CdkHeaderRow, useExisting: HeaderRowComponent }
                        ],
                        styles: [":host{display:contents}"]
                    }] }
        ];
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
            { type: core.Component, args: [{
                        selector: 'table[dg-table]',
                        template: "<ng-container select=\"caption\"></ng-container>\n\n<ng-container dgHeaderRowOutlet></ng-container>\n<ng-container dgContentRowOutlet></ng-container>\n<ng-container dgFooterRowOutlet></ng-container>\n",
                        providers: [
                            { provide: table.CdkTable, useExisting: TableComponent }
                        ],
                        styles: [":host{display:grid;border-radius:var(--dg-shape--medium-component);overflow:auto;background-color:var(--dg-theme--surface)}:host:not([dg-elevation]),:host[dg-elevation=\"0\"]{border:var(--dg-divider--on-surface)}::ng-deep tbody,::ng-deep tfoot,::ng-deep thead{display:contents}"]
                    }] }
        ];
        TableComponent.propDecorators = {
            gridTemplateColumns: [{ type: core.HostBinding, args: ['style.gridTemplateColumns',] }],
            updateStickyStyles: [{ type: core.HostListener, args: ['window:resize',] }]
        };
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
            { type: core.Directive, args: [{
                        selector: '[dgColumnDef]',
                        providers: [
                            { provide: table.CdkColumnDef, useExisting: ColumnDefDirective }
                        ]
                    },] }
        ];
        ColumnDefDirective.propDecorators = {
            name: [{ type: core.Input, args: ['dgColumnDef',] }],
            size: [{ type: core.Input }],
            sticky: [{ type: core.Input }],
            stickyEnd: [{ type: core.Input }]
        };
        return ColumnDefDirective;
    }(table.CdkColumnDef));

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
            { type: core.Directive, args: [{
                        selector: '[dgContentCellDef]',
                        providers: [
                            { provide: table.CdkCellDef, useExisting: ContentCellDefDirective }
                        ]
                    },] }
        ];
        return ContentCellDefDirective;
    }(table.CdkCellDef));

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
            { type: core.Directive, args: [{
                        selector: '[dgContentCellOutlet]',
                        providers: [
                            { provide: table.CdkCellOutlet, useExisting: ContentCellOutletDirective }
                        ]
                    },] }
        ];
        return ContentCellOutletDirective;
    }(table.CdkCellOutlet));

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
            { type: core.Directive, args: [{
                        selector: '[dgContentRowDef]',
                        providers: [
                            { provide: table.CdkRowDef, useExisting: ContentRowDefDirective }
                        ]
                    },] }
        ];
        ContentRowDefDirective.propDecorators = {
            columns: [{ type: core.Input, args: ['dgContentRowDefColumns',] }],
            when: [{ type: core.Input, args: ['dgContentRowDefWhen',] }]
        };
        return ContentRowDefDirective;
    }(table.CdkRowDef));

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
            { type: core.Directive, args: [{
                        selector: '[dgContentRowOutlet]',
                        providers: [
                            { provide: table.DataRowOutlet, useExisting: ContentRowOutletDirective }
                        ]
                    },] }
        ];
        return ContentRowOutletDirective;
    }(table.DataRowOutlet));

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
            { type: core.Directive, args: [{
                        selector: '[dgFooterCellDef]',
                        providers: [
                            { provide: table.CdkFooterCellDef, useExisting: FooterCellDefDirective }
                        ]
                    },] }
        ];
        return FooterCellDefDirective;
    }(table.CdkFooterCellDef));

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
            { type: core.Directive, args: [{
                        selector: '[dgFooterCellOutlet]',
                        providers: [
                            { provide: table.CdkCellOutlet, useExisting: FooterCellOutletDirective }
                        ]
                    },] }
        ];
        return FooterCellOutletDirective;
    }(table.CdkCellOutlet));

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
            { type: core.Directive, args: [{
                        selector: '[dgFooterRowDef]',
                        providers: [
                            { provide: table.CdkFooterRowDef, useExisting: FooterRowDefDirective }
                        ]
                    },] }
        ];
        FooterRowDefDirective.propDecorators = {
            columns: [{ type: core.Input, args: ['dgFooterRowDef',] }],
            sticky: [{ type: core.Input, args: ['dgFooterRowDefSticky',] }]
        };
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
    var FooterRowOutletDirective = /** @class */ (function (_super) {
        __extends$f(FooterRowOutletDirective, _super);
        function FooterRowOutletDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FooterRowOutletDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[dgFooterRowOutlet]',
                        providers: [
                            { provide: table.FooterRowOutlet, useExisting: FooterRowOutletDirective }
                        ]
                    },] }
        ];
        return FooterRowOutletDirective;
    }(table.FooterRowOutlet));

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
            { type: core.Directive, args: [{
                        selector: '[dgHeaderCellDef]',
                        providers: [
                            { provide: table.CdkHeaderCellDef, useExisting: HeaderCellDefDirective }
                        ]
                    },] }
        ];
        return HeaderCellDefDirective;
    }(table.CdkHeaderCellDef));

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
            { type: core.Directive, args: [{
                        selector: '[dgHeaderCellOutlet]',
                        providers: [
                            { provide: table.CdkCellOutlet, useExisting: HeaderCellOutletDirective }
                        ]
                    },] }
        ];
        return HeaderCellOutletDirective;
    }(table.CdkCellOutlet));

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
            { type: core.Directive, args: [{
                        selector: '[dgHeaderRowDef]',
                        providers: [
                            { provide: table.CdkHeaderRowDef, useExisting: HeaderRowDefDirective }
                        ]
                    },] }
        ];
        HeaderRowDefDirective.propDecorators = {
            columns: [{ type: core.Input, args: ['dgHeaderRowDef',] }],
            sticky: [{ type: core.Input, args: ['dgHeaderRowDefSticky',] }]
        };
        return HeaderRowDefDirective;
    }(table.CdkHeaderRowDef));

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
            { type: core.Directive, args: [{
                        selector: '[dgHeaderRowOutlet]',
                        providers: [
                            { provide: table.HeaderRowOutlet, useExisting: HeaderRowOutletDirective }
                        ]
                    },] }
        ];
        return HeaderRowOutletDirective;
    }(table.HeaderRowOutlet));

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
        foundation.FoundationModule
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
            { type: core.NgModule, args: [{
                        imports: __spread(modules),
                        declarations: __spread(components, directives),
                        exports: __spread(modules, components, directives)
                    },] }
        ];
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
