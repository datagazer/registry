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
import { HeaderRowOutlet } from '@angular/cdk/table';
import { Directive } from '@angular/core';
var HeaderRowOutletDirective = /** @class */ (function (_super) {
    __extends(HeaderRowOutletDirective, _super);
    function HeaderRowOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderRowOutletDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dgHeaderRowOutlet]',
                    providers: [
                        { provide: HeaderRowOutlet, useExisting: HeaderRowOutletDirective }
                    ]
                },] }
    ];
    return HeaderRowOutletDirective;
}(HeaderRowOutlet));
export { HeaderRowOutletDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXJvdy1vdXRsZXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvaGVhZGVyLXJvdy1vdXRsZXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQztJQU84Qyw0Q0FBZTtJQVA3RDs7SUFPK0QsQ0FBQzs7Z0JBUC9ELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUUvQixTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSx3QkFBd0IsRUFBRTtxQkFDcEU7aUJBQ0Y7O0lBQzhELCtCQUFDO0NBQUEsQUFQaEUsQ0FPOEMsZUFBZSxHQUFHO1NBQW5ELHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlYWRlclJvd091dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2RnSGVhZGVyUm93T3V0bGV0XScsXG5cbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBIZWFkZXJSb3dPdXRsZXQsIHVzZUV4aXN0aW5nOiBIZWFkZXJSb3dPdXRsZXREaXJlY3RpdmUgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlclJvd091dGxldERpcmVjdGl2ZSBleHRlbmRzIEhlYWRlclJvd091dGxldCB7fVxuIl19