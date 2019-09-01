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
import { CdkFooterCell } from '@angular/cdk/table';
import { Component } from '@angular/core';
var FooterCellComponent = /** @class */ (function (_super) {
    __extends(FooterCellComponent, _super);
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
export { FooterCellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFibGUvZm9vdGVyLWNlbGwvZm9vdGVyLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQztJQVN5Qyx1Q0FBYTtJQVR0RDs7SUFTd0QsQ0FBQzs7Z0JBVHhELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5Qix1Q0FBMkM7b0JBRzNDLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFO3FCQUM3RDs7aUJBQ0Y7O0lBQ3VELDBCQUFDO0NBQUEsQUFUekQsQ0FTeUMsYUFBYSxHQUFHO1NBQTVDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0Zvb3RlckNlbGwgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkW2RnLWZvb3Rlci1jZWxsXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXItY2VsbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zvb3Rlci1jZWxsLmNvbXBvbmVudC5zY3NzJ10sXG5cbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBDZGtGb290ZXJDZWxsLCB1c2VFeGlzdGluZzogRm9vdGVyQ2VsbENvbXBvbmVudCB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyQ2VsbENvbXBvbmVudCBleHRlbmRzIENka0Zvb3RlckNlbGwge31cbiJdfQ==