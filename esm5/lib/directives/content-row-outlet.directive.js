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
import { DataRowOutlet as ContentRowOutlet } from '@angular/cdk/table';
import { Directive } from '@angular/core';
var ContentRowOutletDirective = /** @class */ (function (_super) {
    __extends(ContentRowOutletDirective, _super);
    function ContentRowOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentRowOutletDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dgContentRowOutlet]',
                    providers: [
                        { provide: ContentRowOutlet, useExisting: ContentRowOutletDirective }
                    ]
                },] }
    ];
    return ContentRowOutletDirective;
}(ContentRowOutlet));
export { ContentRowOutletDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1yb3ctb3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2NvbnRlbnQtcm93LW91dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLElBQUksZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDO0lBTytDLDZDQUFnQjtJQVAvRDs7SUFPaUUsQ0FBQzs7Z0JBUGpFLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUVoQyxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLHlCQUF5QixFQUFFO3FCQUN0RTtpQkFDRjs7SUFDZ0UsZ0NBQUM7Q0FBQSxBQVBsRSxDQU8rQyxnQkFBZ0IsR0FBRztTQUFyRCx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhUm93T3V0bGV0IGFzIENvbnRlbnRSb3dPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkZ0NvbnRlbnRSb3dPdXRsZXRdJyxcblxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IENvbnRlbnRSb3dPdXRsZXQsIHVzZUV4aXN0aW5nOiBDb250ZW50Um93T3V0bGV0RGlyZWN0aXZlIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50Um93T3V0bGV0RGlyZWN0aXZlIGV4dGVuZHMgQ29udGVudFJvd091dGxldCB7fVxuIl19