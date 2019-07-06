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
import { CdkCell as CdkContentCell } from '@angular/cdk/table';
import { Component } from '@angular/core';
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
                { provide: CdkContentCell, useExisting: ContentCellComponent_1 }
            ],
            styles: [":host{display:grid;grid-auto-flow:column;align-content:center;align-items:center;justify-content:start;justify-items:stretch;height:var(--dg-data-table--row-height);padding:0 var(--dg-data-table--column-spacing);background-color:var(--dg-theme--background--card);color:var(--dg-theme--foreground--text);font-size:var(--dg-typography--body-1--font-size);font-weight:var(--dg-typography--body-1--font-weight);text-transform:var(--dg-typography--body-1--text-transform);line-height:var(--dg-typography--body-1--line-height);letter-spacing:var(--dg-typography--body-1--letter-spacing)}:host.cdk-table-sticky:first-child:not(:last-child){border-right:var(--dg-data-table--divider)}:host.cdk-table-sticky:last-child:not(:first-child){border-left:var(--dg-data-table--divider)}:host-context(tbody:last-of-type>tr:not(:last-child)),:host-context(tbody:not(:last-of-type)>tr){border-bottom:var(--dg-data-table--divider)}"]
        })
    ], ContentCellComponent);
    return ContentCellComponent;
}(CdkContentCell));
export { ContentCellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhYmxlL2NlbGxzL2NvbnRlbnQtY2VsbC9jb250ZW50LWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxJQUFJLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFXMUM7SUFBMEMsd0NBQWM7SUFBeEQ7O0lBQTBELENBQUM7NkJBQTlDLG9CQUFvQjs7SUFBcEIsb0JBQW9CO1FBVGhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsdUNBQTRDO1lBRzVDLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLHNCQUFvQixFQUFFO2FBQy9EOztTQUNGLENBQUM7T0FDVyxvQkFBb0IsQ0FBMEI7SUFBRCwyQkFBQztDQUFBLEFBQTNELENBQTBDLGNBQWMsR0FBRztTQUE5QyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtDZWxsIGFzIENka0NvbnRlbnRDZWxsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZFtkZy1jb250ZW50LWNlbGxdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRlbnQtY2VsbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnRlbnQtY2VsbC5jb21wb25lbnQuc2NzcyddLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogQ2RrQ29udGVudENlbGwsIHVzZUV4aXN0aW5nOiBDb250ZW50Q2VsbENvbXBvbmVudCB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudENlbGxDb21wb25lbnQgZXh0ZW5kcyBDZGtDb250ZW50Q2VsbCB7fVxuIl19