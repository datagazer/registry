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
import { CdkFooterRow } from '@angular/cdk/table';
import { Component } from '@angular/core';
var FooterRowComponent = /** @class */ (function (_super) {
    __extends(FooterRowComponent, _super);
    function FooterRowComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FooterRowComponent_1 = FooterRowComponent;
    var FooterRowComponent_1;
    FooterRowComponent = FooterRowComponent_1 = __decorate([
        Component({
            selector: 'tr[dg-footer-row]',
            template: "<ng-container dgFooterCellOutlet></ng-container>\n",
            providers: [
                { provide: CdkFooterRow, useExisting: FooterRowComponent_1 }
            ],
            styles: [":host{display:contents}"]
        })
    ], FooterRowComponent);
    return FooterRowComponent;
}(CdkFooterRow));
export { FooterRowComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS9yb3dzL2Zvb3Rlci1yb3cvZm9vdGVyLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVzFDO0lBQXdDLHNDQUFZO0lBQXBEOztJQUFzRCxDQUFDOzJCQUExQyxrQkFBa0I7O0lBQWxCLGtCQUFrQjtRQVQ5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLDhEQUEwQztZQUcxQyxTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxvQkFBa0IsRUFBRTthQUMzRDs7U0FDRixDQUFDO09BQ1csa0JBQWtCLENBQXdCO0lBQUQseUJBQUM7Q0FBQSxBQUF2RCxDQUF3QyxZQUFZLEdBQUc7U0FBMUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrRm9vdGVyUm93IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cltkZy1mb290ZXItcm93XScsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXItcm93LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm9vdGVyLXJvdy5jb21wb25lbnQuc2NzcyddLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogQ2RrRm9vdGVyUm93LCB1c2VFeGlzdGluZzogRm9vdGVyUm93Q29tcG9uZW50IH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJSb3dDb21wb25lbnQgZXh0ZW5kcyBDZGtGb290ZXJSb3cge31cbiJdfQ==