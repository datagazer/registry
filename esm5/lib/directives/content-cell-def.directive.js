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
import { CdkCellDef as CdkContentCellDef } from '@angular/cdk/table';
import { Directive } from '@angular/core';
var ContentCellDefDirective = /** @class */ (function (_super) {
    __extends(ContentCellDefDirective, _super);
    function ContentCellDefDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentCellDefDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dgContentCellDef]',
                    providers: [
                        { provide: CdkContentCellDef, useExisting: ContentCellDefDirective }
                    ]
                },] }
    ];
    return ContentCellDefDirective;
}(CdkContentCellDef));
export { ContentCellDefDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1jZWxsLWRlZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9jb250ZW50LWNlbGwtZGVmLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsSUFBSSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUM7SUFPNkMsMkNBQWlCO0lBUDlEOztJQU9nRSxDQUFDOztnQkFQaEUsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBRTlCLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsdUJBQXVCLEVBQUU7cUJBQ3JFO2lCQUNGOztJQUMrRCw4QkFBQztDQUFBLEFBUGpFLENBTzZDLGlCQUFpQixHQUFHO1NBQXBELHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0NlbGxEZWYgYXMgQ2RrQ29udGVudENlbGxEZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkZ0NvbnRlbnRDZWxsRGVmXScsXG5cbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBDZGtDb250ZW50Q2VsbERlZiwgdXNlRXhpc3Rpbmc6IENvbnRlbnRDZWxsRGVmRGlyZWN0aXZlIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50Q2VsbERlZkRpcmVjdGl2ZSBleHRlbmRzIENka0NvbnRlbnRDZWxsRGVmIHt9XG4iXX0=