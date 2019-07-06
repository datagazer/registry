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
import { CdkFooterCell } from '@angular/cdk/table';
import { Component } from '@angular/core';
var FooterCellComponent = /** @class */ (function (_super) {
    __extends(FooterCellComponent, _super);
    function FooterCellComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FooterCellComponent_1 = FooterCellComponent;
    var FooterCellComponent_1;
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
    return FooterCellComponent;
}(CdkFooterCell));
export { FooterCellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFibGUvY2VsbHMvZm9vdGVyLWNlbGwvZm9vdGVyLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVcxQztJQUF5Qyx1Q0FBYTtJQUF0RDs7SUFBd0QsQ0FBQzs0QkFBNUMsbUJBQW1COztJQUFuQixtQkFBbUI7UUFUL0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5Qix1Q0FBMkM7WUFHM0MsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUscUJBQW1CLEVBQUU7YUFDN0Q7O1NBQ0YsQ0FBQztPQUNXLG1CQUFtQixDQUF5QjtJQUFELDBCQUFDO0NBQUEsQUFBekQsQ0FBeUMsYUFBYSxHQUFHO1NBQTVDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0Zvb3RlckNlbGwgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkW2RnLWZvb3Rlci1jZWxsXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXItY2VsbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zvb3Rlci1jZWxsLmNvbXBvbmVudC5zY3NzJ10sXG5cbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBDZGtGb290ZXJDZWxsLCB1c2VFeGlzdGluZzogRm9vdGVyQ2VsbENvbXBvbmVudCB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyQ2VsbENvbXBvbmVudCBleHRlbmRzIENka0Zvb3RlckNlbGwge31cbiJdfQ==