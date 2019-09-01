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
import { CdkHeaderRowDef } from '@angular/cdk/table';
import { Directive, Input } from '@angular/core';
var HeaderRowDefDirective = /** @class */ (function (_super) {
    __extends(HeaderRowDefDirective, _super);
    function HeaderRowDefDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sticky = false;
        return _this;
    }
    HeaderRowDefDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dgHeaderRowDef]',
                    providers: [
                        { provide: CdkHeaderRowDef, useExisting: HeaderRowDefDirective }
                    ]
                },] }
    ];
    HeaderRowDefDirective.propDecorators = {
        columns: [{ type: Input, args: ['dgHeaderRowDef',] }],
        sticky: [{ type: Input, args: ['dgHeaderRowDefSticky',] }]
    };
    return HeaderRowDefDirective;
}(CdkHeaderRowDef));
export { HeaderRowDefDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXJvdy1kZWYuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvaGVhZGVyLXJvdy1kZWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQ7SUFPMkMseUNBQWU7SUFQMUQ7UUFBQSxxRUFhQztRQURRLFlBQU0sR0FBWSxLQUFLLENBQUM7O0lBQ2pDLENBQUM7O2dCQWJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUU1QixTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxxQkFBcUIsRUFBRTtxQkFDakU7aUJBQ0Y7OzswQkFFRSxLQUFLLFNBQUMsZ0JBQWdCO3lCQUd0QixLQUFLLFNBQUMsc0JBQXNCOztJQUUvQiw0QkFBQztDQUFBLEFBYkQsQ0FPMkMsZUFBZSxHQU16RDtTQU5ZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0hlYWRlclJvd0RlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkZ0hlYWRlclJvd0RlZl0nLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogQ2RrSGVhZGVyUm93RGVmLCB1c2VFeGlzdGluZzogSGVhZGVyUm93RGVmRGlyZWN0aXZlIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJSb3dEZWZEaXJlY3RpdmUgZXh0ZW5kcyBDZGtIZWFkZXJSb3dEZWYge1xuICBASW5wdXQoJ2RnSGVhZGVyUm93RGVmJylcbiAgcHVibGljIGNvbHVtbnMhOiBJdGVyYWJsZTxzdHJpbmc+O1xuXG4gIEBJbnB1dCgnZGdIZWFkZXJSb3dEZWZTdGlja3knKVxuICBwdWJsaWMgc3RpY2t5OiBib29sZWFuID0gZmFsc2U7XG59XG4iXX0=