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
import { CdkCell as CdkContentCell } from '@angular/cdk/table';
import { Component } from '@angular/core';
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
                        { provide: CdkContentCell, useExisting: ContentCellComponent }
                    ],
                    styles: [":host{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;box-sizing:border-box;min-width:-webkit-min-content;min-width:min-content;height:calc(var(--dg-layout--margins) * 2 + 4px);padding:calc(var(--dg-layout--margins) * .5) var(--dg-layout--margins);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:var(--dg-typography--body-2--font-family);font-size:var(--dg-typography--body-2--font-size);line-height:var(--dg-typography--body-2--line-height);font-weight:var(--dg-typography--body-2--font-weight);text-transform:var(--dg-typography--body-2--text-transform);letter-spacing:var(--dg-typography--body-2--letter-spacing);background-color:var(--dg-theme--surface);color:var(--dg-theme--primary-text)}:host :host-context(tbody:last-of-type>tr:not(:last-child)),:host :host-context(tbody:not(:last-of-type)>tr){border-bottom:var(--dg-divider--on-surface)}:host.cdk-table-sticky[style~=\"left:\"]:not(:last-child){border-right:var(--dg-divider--on-surface)}:host.cdk-table-sticky[style~=\"right:\"]:not(:first-child){border-left:var(--dg-divider--on-surface)}"]
                }] }
    ];
    return ContentCellComponent;
}(CdkContentCell));
export { ContentCellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhYmxlL2NvbnRlbnQtY2VsbC9jb250ZW50LWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxJQUFJLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUM7SUFTMEMsd0NBQWM7SUFUeEQ7O0lBUzBELENBQUM7O2dCQVQxRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsdUNBQTRDO29CQUc1QyxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxvQkFBb0IsRUFBRTtxQkFDL0Q7O2lCQUNGOztJQUN5RCwyQkFBQztDQUFBLEFBVDNELENBUzBDLGNBQWMsR0FBRztTQUE5QyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtDZWxsIGFzIENka0NvbnRlbnRDZWxsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZFtkZy1jb250ZW50LWNlbGxdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRlbnQtY2VsbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnRlbnQtY2VsbC5jb21wb25lbnQuc2NzcyddLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogQ2RrQ29udGVudENlbGwsIHVzZUV4aXN0aW5nOiBDb250ZW50Q2VsbENvbXBvbmVudCB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudENlbGxDb21wb25lbnQgZXh0ZW5kcyBDZGtDb250ZW50Q2VsbCB7fVxuIl19