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
import { CdkCellOutlet as CdkHeaderCellOutlet } from '@angular/cdk/table';
import { Directive } from '@angular/core';
var HeaderCellOutletDirective = /** @class */ (function (_super) {
    __extends(HeaderCellOutletDirective, _super);
    function HeaderCellOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderCellOutletDirective_1 = HeaderCellOutletDirective;
    var HeaderCellOutletDirective_1;
    HeaderCellOutletDirective = HeaderCellOutletDirective_1 = __decorate([
        Directive({
            selector: '[dgHeaderCellOutlet]',
            providers: [
                { provide: CdkHeaderCellOutlet, useExisting: HeaderCellOutletDirective_1 }
            ]
        })
    ], HeaderCellOutletDirective);
    return HeaderCellOutletDirective;
}(CdkHeaderCellOutlet));
export { HeaderCellOutletDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWNlbGwtb3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3RhYmxlL2NlbGwtb3V0bGV0cy9oZWFkZXItY2VsbC1vdXRsZXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxJQUFJLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVMxQztJQUErQyw2Q0FBbUI7SUFBbEU7O0lBQW9FLENBQUM7a0NBQXhELHlCQUF5Qjs7SUFBekIseUJBQXlCO1FBUHJDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFFaEMsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSwyQkFBeUIsRUFBRTthQUN6RTtTQUNGLENBQUM7T0FDVyx5QkFBeUIsQ0FBK0I7SUFBRCxnQ0FBQztDQUFBLEFBQXJFLENBQStDLG1CQUFtQixHQUFHO1NBQXhELHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0NlbGxPdXRsZXQgYXMgQ2RrSGVhZGVyQ2VsbE91dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2RnSGVhZGVyQ2VsbE91dGxldF0nLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogQ2RrSGVhZGVyQ2VsbE91dGxldCwgdXNlRXhpc3Rpbmc6IEhlYWRlckNlbGxPdXRsZXREaXJlY3RpdmUgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNlbGxPdXRsZXREaXJlY3RpdmUgZXh0ZW5kcyBDZGtIZWFkZXJDZWxsT3V0bGV0IHt9XG4iXX0=