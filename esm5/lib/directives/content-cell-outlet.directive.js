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
import { CdkCellOutlet as CdkContentCellOutlet } from '@angular/cdk/table';
import { Directive } from '@angular/core';
var ContentCellOutletDirective = /** @class */ (function (_super) {
    __extends(ContentCellOutletDirective, _super);
    function ContentCellOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentCellOutletDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dgContentCellOutlet]',
                    providers: [
                        { provide: CdkContentCellOutlet, useExisting: ContentCellOutletDirective }
                    ]
                },] }
    ];
    return ContentCellOutletDirective;
}(CdkContentCellOutlet));
export { ContentCellOutletDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1jZWxsLW91dGxldC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9jb250ZW50LWNlbGwtb3V0bGV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsSUFBSSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUM7SUFPZ0QsOENBQW9CO0lBUHBFOztJQU9zRSxDQUFDOztnQkFQdEUsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBRWpDLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxXQUFXLEVBQUUsMEJBQTBCLEVBQUU7cUJBQzNFO2lCQUNGOztJQUNxRSxpQ0FBQztDQUFBLEFBUHZFLENBT2dELG9CQUFvQixHQUFHO1NBQTFELDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0NlbGxPdXRsZXQgYXMgQ2RrQ29udGVudENlbGxPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkZ0NvbnRlbnRDZWxsT3V0bGV0XScsXG5cbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBDZGtDb250ZW50Q2VsbE91dGxldCwgdXNlRXhpc3Rpbmc6IENvbnRlbnRDZWxsT3V0bGV0RGlyZWN0aXZlIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50Q2VsbE91dGxldERpcmVjdGl2ZSBleHRlbmRzIENka0NvbnRlbnRDZWxsT3V0bGV0IHt9XG4iXX0=