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
import { CdkCellOutlet as CdkFooterCellOutlet } from '@angular/cdk/table';
import { Directive } from '@angular/core';
var FooterCellOutletDirective = /** @class */ (function (_super) {
    __extends(FooterCellOutletDirective, _super);
    function FooterCellOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FooterCellOutletDirective_1 = FooterCellOutletDirective;
    var FooterCellOutletDirective_1;
    FooterCellOutletDirective = FooterCellOutletDirective_1 = __decorate([
        Directive({
            selector: '[dgFooterCellOutlet]',
            providers: [
                { provide: CdkFooterCellOutlet, useExisting: FooterCellOutletDirective_1 }
            ]
        })
    ], FooterCellOutletDirective);
    return FooterCellOutletDirective;
}(CdkFooterCellOutlet));
export { FooterCellOutletDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLWNlbGwtb3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3RhYmxlL2NlbGwtb3V0bGV0cy9mb290ZXItY2VsbC1vdXRsZXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxJQUFJLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVMxQztJQUErQyw2Q0FBbUI7SUFBbEU7O0lBQW9FLENBQUM7a0NBQXhELHlCQUF5Qjs7SUFBekIseUJBQXlCO1FBUHJDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFFaEMsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSwyQkFBeUIsRUFBRTthQUN6RTtTQUNGLENBQUM7T0FDVyx5QkFBeUIsQ0FBK0I7SUFBRCxnQ0FBQztDQUFBLEFBQXJFLENBQStDLG1CQUFtQixHQUFHO1NBQXhELHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0NlbGxPdXRsZXQgYXMgQ2RrRm9vdGVyQ2VsbE91dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2RnRm9vdGVyQ2VsbE91dGxldF0nLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogQ2RrRm9vdGVyQ2VsbE91dGxldCwgdXNlRXhpc3Rpbmc6IEZvb3RlckNlbGxPdXRsZXREaXJlY3RpdmUgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckNlbGxPdXRsZXREaXJlY3RpdmUgZXh0ZW5kcyBDZGtGb290ZXJDZWxsT3V0bGV0IHt9XG4iXX0=