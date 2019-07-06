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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { CdkRowDef as CdkContentRowDef } from '@angular/cdk/table';
import { Directive, Input } from '@angular/core';
var ContentRowDefDirective = /** @class */ (function (_super) {
    __extends(ContentRowDefDirective, _super);
    function ContentRowDefDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.when = function () { return true; };
        return _this;
    }
    ContentRowDefDirective_1 = ContentRowDefDirective;
    var ContentRowDefDirective_1;
    __decorate([
        Input('dgContentRowDefColumns'),
        __metadata("design:type", Object)
    ], ContentRowDefDirective.prototype, "columns", void 0);
    __decorate([
        Input('dgContentRowDefWhen'),
        __metadata("design:type", Function)
    ], ContentRowDefDirective.prototype, "when", void 0);
    ContentRowDefDirective = ContentRowDefDirective_1 = __decorate([
        Directive({
            selector: '[dgContentRowDef]',
            providers: [
                { provide: CdkContentRowDef, useExisting: ContentRowDefDirective_1 }
            ]
        })
    ], ContentRowDefDirective);
    return ContentRowDefDirective;
}(CdkContentRowDef));
export { ContentRowDefDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1yb3ctZGVmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3RhYmxlL3Jvdy1kZWZzL2NvbnRlbnQtcm93LWRlZi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLElBQUksZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVNqRDtJQUErQywwQ0FBbUI7SUFQbEU7UUFBQSxxRUFhQztRQURRLFVBQUksR0FBMkMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7O0lBQ25FLENBQUM7K0JBTlksc0JBQXNCOztJQUVqQztRQURDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQzs7MkRBQ0U7SUFHbEM7UUFEQyxLQUFLLENBQUMscUJBQXFCLENBQUM7O3dEQUNvQztJQUx0RCxzQkFBc0I7UUFQbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUU3QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLHdCQUFzQixFQUFFO2FBQ25FO1NBQ0YsQ0FBQztPQUNXLHNCQUFzQixDQU1sQztJQUFELDZCQUFDO0NBQUEsQUFORCxDQUErQyxnQkFBZ0IsR0FNOUQ7U0FOWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtSb3dEZWYgYXMgQ2RrQ29udGVudFJvd0RlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkZ0NvbnRlbnRSb3dEZWZdJyxcblxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IENka0NvbnRlbnRSb3dEZWYsIHVzZUV4aXN0aW5nOiBDb250ZW50Um93RGVmRGlyZWN0aXZlIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50Um93RGVmRGlyZWN0aXZlPFQ+IGV4dGVuZHMgQ2RrQ29udGVudFJvd0RlZjxUPiB7XG4gIEBJbnB1dCgnZGdDb250ZW50Um93RGVmQ29sdW1ucycpXG4gIHB1YmxpYyBjb2x1bW5zITogSXRlcmFibGU8c3RyaW5nPjtcblxuICBASW5wdXQoJ2RnQ29udGVudFJvd0RlZldoZW4nKVxuICBwdWJsaWMgd2hlbjogKGluZGV4OiBudW1iZXIsIHJvd0RhdGE6IFQpID0+IGJvb2xlYW4gPSAoKSA9PiB0cnVlO1xufVxuIl19