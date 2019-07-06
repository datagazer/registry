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
import { CdkColumnDef } from '@angular/cdk/table';
import { Directive, Input } from '@angular/core';
var ColumnDefDirective = /** @class */ (function (_super) {
    __extends(ColumnDefDirective, _super);
    function ColumnDefDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sizing = 'auto';
        _this.sticky = false;
        _this.stickyEnd = false;
        return _this;
    }
    ColumnDefDirective_1 = ColumnDefDirective;
    var ColumnDefDirective_1;
    __decorate([
        Input('dgColumnDef'),
        __metadata("design:type", String)
    ], ColumnDefDirective.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ColumnDefDirective.prototype, "sizing", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ColumnDefDirective.prototype, "sticky", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ColumnDefDirective.prototype, "stickyEnd", void 0);
    ColumnDefDirective = ColumnDefDirective_1 = __decorate([
        Directive({
            selector: '[dgColumnDef]',
            providers: [
                { provide: CdkColumnDef, useExisting: ColumnDefDirective_1 }
            ]
        })
    ], ColumnDefDirective);
    return ColumnDefDirective;
}(CdkColumnDef));
export { ColumnDefDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy90YWJsZS9jb2x1bW4tZGVmLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU2pEO0lBQXdDLHNDQUFZO0lBUHBEO1FBQUEscUVBbUJDO1FBUFEsWUFBTSxHQUFXLE1BQU0sQ0FBQztRQUd4QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBR3hCLGVBQVMsR0FBWSxLQUFLLENBQUM7O0lBQ3BDLENBQUM7MkJBWlksa0JBQWtCOztJQUU3QjtRQURDLEtBQUssQ0FBQyxhQUFhLENBQUM7O29EQUNBO0lBR3JCO1FBREMsS0FBSyxFQUFFOztzREFDdUI7SUFHL0I7UUFEQyxLQUFLLEVBQUU7O3NEQUN1QjtJQUcvQjtRQURDLEtBQUssRUFBRTs7eURBQzBCO0lBWHZCLGtCQUFrQjtRQVA5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUV6QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxvQkFBa0IsRUFBRTthQUMzRDtTQUNGLENBQUM7T0FDVyxrQkFBa0IsQ0FZOUI7SUFBRCx5QkFBQztDQUFBLEFBWkQsQ0FBd0MsWUFBWSxHQVluRDtTQVpZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0NvbHVtbkRlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkZ0NvbHVtbkRlZl0nLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogQ2RrQ29sdW1uRGVmLCB1c2VFeGlzdGluZzogQ29sdW1uRGVmRGlyZWN0aXZlIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb2x1bW5EZWZEaXJlY3RpdmUgZXh0ZW5kcyBDZGtDb2x1bW5EZWYge1xuICBASW5wdXQoJ2RnQ29sdW1uRGVmJylcbiAgcHVibGljIG5hbWUhOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNpemluZzogc3RyaW5nID0gJ2F1dG8nO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzdGlja3k6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc3RpY2t5RW5kOiBib29sZWFuID0gZmFsc2U7XG59XG4iXX0=