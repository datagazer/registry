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
import { CdkCellOutlet as CdkFooterCellOutlet } from '@angular/cdk/table';
import { Directive } from '@angular/core';
var FooterCellOutletDirective = /** @class */ (function (_super) {
    __extends(FooterCellOutletDirective, _super);
    function FooterCellOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FooterCellOutletDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dgFooterCellOutlet]',
                    providers: [
                        { provide: CdkFooterCellOutlet, useExisting: FooterCellOutletDirective }
                    ]
                },] }
    ];
    return FooterCellOutletDirective;
}(CdkFooterCellOutlet));
export { FooterCellOutletDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLWNlbGwtb3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2Zvb3Rlci1jZWxsLW91dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLElBQUksbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDO0lBTytDLDZDQUFtQjtJQVBsRTs7SUFPb0UsQ0FBQzs7Z0JBUHBFLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUVoQyxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLHlCQUF5QixFQUFFO3FCQUN6RTtpQkFDRjs7SUFDbUUsZ0NBQUM7Q0FBQSxBQVByRSxDQU8rQyxtQkFBbUIsR0FBRztTQUF4RCx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtDZWxsT3V0bGV0IGFzIENka0Zvb3RlckNlbGxPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkZ0Zvb3RlckNlbGxPdXRsZXRdJyxcblxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IENka0Zvb3RlckNlbGxPdXRsZXQsIHVzZUV4aXN0aW5nOiBGb290ZXJDZWxsT3V0bGV0RGlyZWN0aXZlIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJDZWxsT3V0bGV0RGlyZWN0aXZlIGV4dGVuZHMgQ2RrRm9vdGVyQ2VsbE91dGxldCB7fVxuIl19