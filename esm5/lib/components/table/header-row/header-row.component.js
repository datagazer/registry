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
import { CdkHeaderRow } from '@angular/cdk/table';
import { Component } from '@angular/core';
var HeaderRowComponent = /** @class */ (function (_super) {
    __extends(HeaderRowComponent, _super);
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
export { HeaderRowComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS9oZWFkZXItcm93L2hlYWRlci1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQztJQVN3QyxzQ0FBWTtJQVRwRDs7SUFTc0QsQ0FBQzs7Z0JBVHRELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3Qiw4REFBMEM7b0JBRzFDLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFO3FCQUMzRDs7aUJBQ0Y7O0lBQ3FELHlCQUFDO0NBQUEsQUFUdkQsQ0FTd0MsWUFBWSxHQUFHO1NBQTFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0hlYWRlclJvdyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJbZGctaGVhZGVyLXJvd10nLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLXJvdy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hlYWRlci1yb3cuY29tcG9uZW50LnNjc3MnXSxcblxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IENka0hlYWRlclJvdywgdXNlRXhpc3Rpbmc6IEhlYWRlclJvd0NvbXBvbmVudCB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyUm93Q29tcG9uZW50IGV4dGVuZHMgQ2RrSGVhZGVyUm93IHt9XG4iXX0=