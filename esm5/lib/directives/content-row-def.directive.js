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
import { CdkRowDef as CdkContentRowDef } from '@angular/cdk/table';
import { Directive, Input } from '@angular/core';
var ContentRowDefDirective = /** @class */ (function (_super) {
    __extends(ContentRowDefDirective, _super);
    function ContentRowDefDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.when = function () { return true; };
        return _this;
    }
    ContentRowDefDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dgContentRowDef]',
                    providers: [
                        { provide: CdkContentRowDef, useExisting: ContentRowDefDirective }
                    ]
                },] }
    ];
    ContentRowDefDirective.propDecorators = {
        columns: [{ type: Input, args: ['dgContentRowDefColumns',] }],
        when: [{ type: Input, args: ['dgContentRowDefWhen',] }]
    };
    return ContentRowDefDirective;
}(CdkContentRowDef));
export { ContentRowDefDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1yb3ctZGVmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2NvbnRlbnQtcm93LWRlZi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLElBQUksZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRDtJQU8rQywwQ0FBbUI7SUFQbEU7UUFBQSxxRUFhQztRQURRLFVBQUksR0FBMkMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7O0lBQ25FLENBQUM7O2dCQWJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUU3QixTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLHNCQUFzQixFQUFFO3FCQUNuRTtpQkFDRjs7OzBCQUVFLEtBQUssU0FBQyx3QkFBd0I7dUJBRzlCLEtBQUssU0FBQyxxQkFBcUI7O0lBRTlCLDZCQUFDO0NBQUEsQUFiRCxDQU8rQyxnQkFBZ0IsR0FNOUQ7U0FOWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtSb3dEZWYgYXMgQ2RrQ29udGVudFJvd0RlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkZ0NvbnRlbnRSb3dEZWZdJyxcblxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IENka0NvbnRlbnRSb3dEZWYsIHVzZUV4aXN0aW5nOiBDb250ZW50Um93RGVmRGlyZWN0aXZlIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50Um93RGVmRGlyZWN0aXZlPFQ+IGV4dGVuZHMgQ2RrQ29udGVudFJvd0RlZjxUPiB7XG4gIEBJbnB1dCgnZGdDb250ZW50Um93RGVmQ29sdW1ucycpXG4gIHB1YmxpYyBjb2x1bW5zITogSXRlcmFibGU8c3RyaW5nPjtcblxuICBASW5wdXQoJ2RnQ29udGVudFJvd0RlZldoZW4nKVxuICBwdWJsaWMgd2hlbjogKGluZGV4OiBudW1iZXIsIHJvd0RhdGE6IFQpID0+IGJvb2xlYW4gPSAoKSA9PiB0cnVlO1xufVxuIl19