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
import { CdkFooterCellDef } from '@angular/cdk/table';
import { Directive } from '@angular/core';
var FooterCellDefDirective = /** @class */ (function (_super) {
    __extends(FooterCellDefDirective, _super);
    function FooterCellDefDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FooterCellDefDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dgFooterCellDef]',
                    providers: [
                        { provide: CdkFooterCellDef, useExisting: FooterCellDefDirective }
                    ]
                },] }
    ];
    return FooterCellDefDirective;
}(CdkFooterCellDef));
export { FooterCellDefDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLWNlbGwtZGVmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2Zvb3Rlci1jZWxsLWRlZi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUM7SUFPNEMsMENBQWdCO0lBUDVEOztJQU84RCxDQUFDOztnQkFQOUQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBRTdCLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsc0JBQXNCLEVBQUU7cUJBQ25FO2lCQUNGOztJQUM2RCw2QkFBQztDQUFBLEFBUC9ELENBTzRDLGdCQUFnQixHQUFHO1NBQWxELHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0Zvb3RlckNlbGxEZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkZ0Zvb3RlckNlbGxEZWZdJyxcblxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IENka0Zvb3RlckNlbGxEZWYsIHVzZUV4aXN0aW5nOiBGb290ZXJDZWxsRGVmRGlyZWN0aXZlIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJDZWxsRGVmRGlyZWN0aXZlIGV4dGVuZHMgQ2RrRm9vdGVyQ2VsbERlZiB7fVxuIl19