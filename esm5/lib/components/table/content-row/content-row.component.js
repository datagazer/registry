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
import { CdkRow as CdkContentRow } from '@angular/cdk/table';
import { Component } from '@angular/core';
var ContentRowComponent = /** @class */ (function (_super) {
    __extends(ContentRowComponent, _super);
    function ContentRowComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentRowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tr[dg-content-row]',
                    template: "<ng-container dgContentCellOutlet></ng-container>\n",
                    providers: [
                        { provide: CdkContentRow, useExisting: ContentRowComponent }
                    ],
                    styles: [":host{display:contents}"]
                }] }
    ];
    return ContentRowComponent;
}(CdkContentRow));
export { ContentRowComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFibGUvY29udGVudC1yb3cvY29udGVudC1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxJQUFJLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzdELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUM7SUFTeUMsdUNBQWE7SUFUdEQ7O0lBU3dELENBQUM7O2dCQVR4RCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsK0RBQTJDO29CQUczQyxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRTtxQkFDN0Q7O2lCQUNGOztJQUN1RCwwQkFBQztDQUFBLEFBVHpELENBU3lDLGFBQWEsR0FBRztTQUE1QyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtSb3cgYXMgQ2RrQ29udGVudFJvdyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJbZGctY29udGVudC1yb3ddJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRlbnQtcm93LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29udGVudC1yb3cuY29tcG9uZW50LnNjc3MnXSxcblxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IENka0NvbnRlbnRSb3csIHVzZUV4aXN0aW5nOiBDb250ZW50Um93Q29tcG9uZW50IH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50Um93Q29tcG9uZW50IGV4dGVuZHMgQ2RrQ29udGVudFJvdyB7fVxuIl19