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
import { FooterRowOutlet } from '@angular/cdk/table';
import { Directive } from '@angular/core';
var FooterRowOutletDirective = /** @class */ (function (_super) {
    __extends(FooterRowOutletDirective, _super);
    function FooterRowOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FooterRowOutletDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dgFooterRowOutlet]',
                    providers: [
                        { provide: FooterRowOutlet, useExisting: FooterRowOutletDirective }
                    ]
                },] }
    ];
    return FooterRowOutletDirective;
}(FooterRowOutlet));
export { FooterRowOutletDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLXJvdy1vdXRsZXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZm9vdGVyLXJvdy1vdXRsZXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQztJQU84Qyw0Q0FBZTtJQVA3RDs7SUFPK0QsQ0FBQzs7Z0JBUC9ELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUUvQixTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSx3QkFBd0IsRUFBRTtxQkFDcEU7aUJBQ0Y7O0lBQzhELCtCQUFDO0NBQUEsQUFQaEUsQ0FPOEMsZUFBZSxHQUFHO1NBQW5ELHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvb3RlclJvd091dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2RnRm9vdGVyUm93T3V0bGV0XScsXG5cbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBGb290ZXJSb3dPdXRsZXQsIHVzZUV4aXN0aW5nOiBGb290ZXJSb3dPdXRsZXREaXJlY3RpdmUgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlclJvd091dGxldERpcmVjdGl2ZSBleHRlbmRzIEZvb3RlclJvd091dGxldCB7fVxuIl19