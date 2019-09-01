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
import { CdkFooterRow } from '@angular/cdk/table';
import { Component } from '@angular/core';
var FooterRowComponent = /** @class */ (function (_super) {
    __extends(FooterRowComponent, _super);
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
export { FooterRowComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS9mb290ZXItcm93L2Zvb3Rlci1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQztJQVN3QyxzQ0FBWTtJQVRwRDs7SUFTc0QsQ0FBQzs7Z0JBVHRELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3Qiw4REFBMEM7b0JBRzFDLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFO3FCQUMzRDs7aUJBQ0Y7O0lBQ3FELHlCQUFDO0NBQUEsQUFUdkQsQ0FTd0MsWUFBWSxHQUFHO1NBQTFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0Zvb3RlclJvdyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJbZGctZm9vdGVyLXJvd10nLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9vdGVyLXJvdy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zvb3Rlci1yb3cuY29tcG9uZW50LnNjc3MnXSxcblxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IENka0Zvb3RlclJvdywgdXNlRXhpc3Rpbmc6IEZvb3RlclJvd0NvbXBvbmVudCB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyUm93Q29tcG9uZW50IGV4dGVuZHMgQ2RrRm9vdGVyUm93IHt9XG4iXX0=