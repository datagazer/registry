var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FooterCellComponent_1;
import { CdkFooterCell } from '@angular/cdk/table';
import { Component } from '@angular/core';
let FooterCellComponent = FooterCellComponent_1 = class FooterCellComponent extends CdkFooterCell {
};
FooterCellComponent = FooterCellComponent_1 = __decorate([
    Component({
        selector: 'td[dg-footer-cell]',
        template: "<ng-content></ng-content>\n",
        providers: [
            { provide: CdkFooterCell, useExisting: FooterCellComponent_1 }
        ],
        styles: [":host{display:grid;grid-auto-flow:column;align-content:center;align-items:center;justify-content:start;justify-items:stretch;height:var(--dg-data-table--row-height);padding:0 var(--dg-data-table--column-spacing);background-color:var(--dg-theme--background--card);color:var(--dg-theme--foreground--secondary-text);font-size:var(--dg-typography--caption--font-size);font-weight:var(--dg-typography--caption--font-weight);text-transform:var(--dg-typography--caption--text-transform);line-height:var(--dg-typography--caption--line-height);letter-spacing:var(--dg-typography--caption--letter-spacing)}:host.cdk-table-sticky:first-child:not(:last-child){border-right:var(--dg-data-table--divider)}:host.cdk-table-sticky:last-child:not(:first-child){border-left:var(--dg-data-table--divider)}:host-context(tfoot:first-child>tr:not(:first-child)),:host-context(tfoot:not(:first-child)>tr){border-top:var(--dg-data-table--divider)}"]
    })
], FooterCellComponent);
export { FooterCellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFibGUvY2VsbHMvZm9vdGVyLWNlbGwvZm9vdGVyLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVcxQyxJQUFhLG1CQUFtQiwyQkFBaEMsTUFBYSxtQkFBb0IsU0FBUSxhQUFhO0NBQUcsQ0FBQTtBQUE1QyxtQkFBbUI7SUFUL0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG9CQUFvQjtRQUM5Qix1Q0FBMkM7UUFHM0MsU0FBUyxFQUFFO1lBQ1QsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxxQkFBbUIsRUFBRTtTQUM3RDs7S0FDRixDQUFDO0dBQ1csbUJBQW1CLENBQXlCO1NBQTVDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0Zvb3RlckNlbGwgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkW2RnLWZvb3Rlci1jZWxsXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXItY2VsbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zvb3Rlci1jZWxsLmNvbXBvbmVudC5zY3NzJ10sXG5cbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBDZGtGb290ZXJDZWxsLCB1c2VFeGlzdGluZzogRm9vdGVyQ2VsbENvbXBvbmVudCB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyQ2VsbENvbXBvbmVudCBleHRlbmRzIENka0Zvb3RlckNlbGwge31cbiJdfQ==