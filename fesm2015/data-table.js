import { CdkCell, CdkRow, CdkFooterCell, CdkFooterRow, CdkHeaderCell, CdkHeaderRow, CdkTable, CdkColumnDef, CdkCellDef, CdkCellOutlet, CdkRowDef, DataRowOutlet, CdkFooterCellDef, CdkFooterRowDef, FooterRowOutlet, CdkHeaderCellDef, CdkHeaderRowDef, HeaderRowOutlet } from '@angular/cdk/table';
import { Component, HostBinding, HostListener, Directive, Input, NgModule } from '@angular/core';
import { FoundationModule } from '@datagazer/foundation';

class ContentCellComponent extends CdkCell {
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

class ContentRowComponent extends CdkRow {
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

class FooterCellComponent extends CdkFooterCell {
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

class FooterRowComponent extends CdkFooterRow {
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

class HeaderCellComponent extends CdkHeaderCell {
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

class HeaderRowComponent extends CdkHeaderRow {
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

class TableComponent extends CdkTable {
    get gridTemplateColumns() {
        let columns = Array.from(this._contentHeaderRowDefs.first.columns);
        return this._contentColumnDefs
            .filter(({ name: column }) => columns.includes(column))
            .map(({ size }) => size)
            .join(' ');
    }
    updateStickyStyles() {
        this.updateStickyHeaderRowStyles();
        this.updateStickyFooterRowStyles();
        this.updateStickyColumnStyles();
    }
    ngAfterViewInit() {
        this.updateStickyStyles();
    }
}
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

class ColumnDefDirective extends CdkColumnDef {
    constructor() {
        super(...arguments);
        this.size = 'auto';
        this.sticky = false;
        this.stickyEnd = false;
    }
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

class ContentCellDefDirective extends CdkCellDef {
}
ContentCellDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dgContentCellDef]',
                providers: [
                    { provide: CdkCellDef, useExisting: ContentCellDefDirective }
                ]
            },] }
];

class ContentCellOutletDirective extends CdkCellOutlet {
}
ContentCellOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dgContentCellOutlet]',
                providers: [
                    { provide: CdkCellOutlet, useExisting: ContentCellOutletDirective }
                ]
            },] }
];

class ContentRowDefDirective extends CdkRowDef {
    constructor() {
        super(...arguments);
        this.when = () => true;
    }
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

class ContentRowOutletDirective extends DataRowOutlet {
}
ContentRowOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dgContentRowOutlet]',
                providers: [
                    { provide: DataRowOutlet, useExisting: ContentRowOutletDirective }
                ]
            },] }
];

class FooterCellDefDirective extends CdkFooterCellDef {
}
FooterCellDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dgFooterCellDef]',
                providers: [
                    { provide: CdkFooterCellDef, useExisting: FooterCellDefDirective }
                ]
            },] }
];

class FooterCellOutletDirective extends CdkCellOutlet {
}
FooterCellOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dgFooterCellOutlet]',
                providers: [
                    { provide: CdkCellOutlet, useExisting: FooterCellOutletDirective }
                ]
            },] }
];

class FooterRowDefDirective extends CdkFooterRowDef {
    constructor() {
        super(...arguments);
        this.sticky = false;
    }
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

class FooterRowOutletDirective extends FooterRowOutlet {
}
FooterRowOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dgFooterRowOutlet]',
                providers: [
                    { provide: FooterRowOutlet, useExisting: FooterRowOutletDirective }
                ]
            },] }
];

class HeaderCellDefDirective extends CdkHeaderCellDef {
}
HeaderCellDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dgHeaderCellDef]',
                providers: [
                    { provide: CdkHeaderCellDef, useExisting: HeaderCellDefDirective }
                ]
            },] }
];

class HeaderCellOutletDirective extends CdkCellOutlet {
}
HeaderCellOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dgHeaderCellOutlet]',
                providers: [
                    { provide: CdkCellOutlet, useExisting: HeaderCellOutletDirective }
                ]
            },] }
];

class HeaderRowDefDirective extends CdkHeaderRowDef {
    constructor() {
        super(...arguments);
        this.sticky = false;
    }
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

class HeaderRowOutletDirective extends HeaderRowOutlet {
}
HeaderRowOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dgHeaderRowOutlet]',
                providers: [
                    { provide: HeaderRowOutlet, useExisting: HeaderRowOutletDirective }
                ]
            },] }
];

const modules = [
    FoundationModule
];
const components = [
    ContentCellComponent,
    ContentRowComponent,
    FooterCellComponent,
    FooterRowComponent,
    HeaderCellComponent,
    HeaderRowComponent,
    TableComponent
];
const directives = [
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
class DataTableModule {
}
DataTableModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...modules
                ],
                declarations: [
                    ...components,
                    ...directives
                ],
                exports: [
                    ...modules,
                    ...components,
                    ...directives
                ]
            },] }
];

// Components

/**
 * Generated bundle index. Do not edit.
 */

export { ColumnDefDirective, ContentCellComponent, ContentCellDefDirective, ContentCellOutletDirective, ContentRowComponent, ContentRowDefDirective, ContentRowOutletDirective, DataTableModule, FooterCellComponent, FooterCellDefDirective, FooterCellOutletDirective, FooterRowComponent, FooterRowDefDirective, FooterRowOutletDirective, HeaderCellComponent, HeaderCellDefDirective, HeaderCellOutletDirective, HeaderRowComponent, HeaderRowDefDirective, HeaderRowOutletDirective, TableComponent };
//# sourceMappingURL=data-table.js.map
