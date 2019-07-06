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
import { CdkHeaderCellDef } from '@angular/cdk/table';
import { Directive } from '@angular/core';
var HeaderCellDefDirective = /** @class */ (function (_super) {
    __extends(HeaderCellDefDirective, _super);
    function HeaderCellDefDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderCellDefDirective_1 = HeaderCellDefDirective;
    var HeaderCellDefDirective_1;
    HeaderCellDefDirective = HeaderCellDefDirective_1 = __decorate([
        Directive({
            selector: '[dgHeaderCellDef]',
            providers: [
                { provide: CdkHeaderCellDef, useExisting: HeaderCellDefDirective_1 }
            ]
        })
    ], HeaderCellDefDirective);
    return HeaderCellDefDirective;
}(CdkHeaderCellDef));
export { HeaderCellDefDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWNlbGwtZGVmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3RhYmxlL2NlbGwtZGVmcy9oZWFkZXItY2VsbC1kZWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzFDO0lBQTRDLDBDQUFnQjtJQUE1RDs7SUFBOEQsQ0FBQzsrQkFBbEQsc0JBQXNCOztJQUF0QixzQkFBc0I7UUFQbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUU3QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLHdCQUFzQixFQUFFO2FBQ25FO1NBQ0YsQ0FBQztPQUNXLHNCQUFzQixDQUE0QjtJQUFELDZCQUFDO0NBQUEsQUFBL0QsQ0FBNEMsZ0JBQWdCLEdBQUc7U0FBbEQsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrSGVhZGVyQ2VsbERlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2RnSGVhZGVyQ2VsbERlZl0nLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogQ2RrSGVhZGVyQ2VsbERlZiwgdXNlRXhpc3Rpbmc6IEhlYWRlckNlbGxEZWZEaXJlY3RpdmUgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNlbGxEZWZEaXJlY3RpdmUgZXh0ZW5kcyBDZGtIZWFkZXJDZWxsRGVmIHt9XG4iXX0=