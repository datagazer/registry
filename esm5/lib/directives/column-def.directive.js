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
import { CdkColumnDef } from '@angular/cdk/table';
import { Directive, Input } from '@angular/core';
var ColumnDefDirective = /** @class */ (function (_super) {
    __extends(ColumnDefDirective, _super);
    function ColumnDefDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.size = 'auto';
        _this.sticky = false;
        _this.stickyEnd = false;
        return _this;
    }
    ColumnDefDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dgColumnDef]',
                    providers: [
                        { provide: CdkColumnDef, useExisting: ColumnDefDirective }
                    ]
                },] }
    ];
    ColumnDefDirective.propDecorators = {
        name: [{ type: Input, args: ['dgColumnDef',] }],
        size: [{ type: Input }],
        sticky: [{ type: Input }],
        stickyEnd: [{ type: Input }]
    };
    return ColumnDefDirective;
}(CdkColumnDef));
export { ColumnDefDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9jb2x1bW4tZGVmLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpEO0lBT3dDLHNDQUFZO0lBUHBEO1FBQUEscUVBbUJDO1FBUFEsVUFBSSxHQUFXLE1BQU0sQ0FBQztRQUd0QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBR3hCLGVBQVMsR0FBWSxLQUFLLENBQUM7O0lBQ3BDLENBQUM7O2dCQW5CQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBRXpCLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFO3FCQUMzRDtpQkFDRjs7O3VCQUVFLEtBQUssU0FBQyxhQUFhO3VCQUduQixLQUFLO3lCQUdMLEtBQUs7NEJBR0wsS0FBSzs7SUFFUix5QkFBQztDQUFBLEFBbkJELENBT3dDLFlBQVksR0FZbkQ7U0FaWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtDb2x1bW5EZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGdDb2x1bW5EZWZdJyxcblxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IENka0NvbHVtbkRlZiwgdXNlRXhpc3Rpbmc6IENvbHVtbkRlZkRpcmVjdGl2ZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29sdW1uRGVmRGlyZWN0aXZlIGV4dGVuZHMgQ2RrQ29sdW1uRGVmIHtcbiAgQElucHV0KCdkZ0NvbHVtbkRlZicpXG4gIHB1YmxpYyBuYW1lITogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaXplOiBzdHJpbmcgPSAnYXV0byc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHN0aWNreTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzdGlja3lFbmQ6IGJvb2xlYW4gPSBmYWxzZTtcbn1cbiJdfQ==