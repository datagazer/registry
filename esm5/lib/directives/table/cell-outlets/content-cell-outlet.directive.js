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
import { CdkCellOutlet as CdkContentCellOutlet } from '@angular/cdk/table';
import { Directive } from '@angular/core';
var ContentCellOutletDirective = /** @class */ (function (_super) {
    __extends(ContentCellOutletDirective, _super);
    function ContentCellOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentCellOutletDirective_1 = ContentCellOutletDirective;
    var ContentCellOutletDirective_1;
    ContentCellOutletDirective = ContentCellOutletDirective_1 = __decorate([
        Directive({
            selector: '[dgContentCellOutlet]',
            providers: [
                { provide: CdkContentCellOutlet, useExisting: ContentCellOutletDirective_1 }
            ]
        })
    ], ContentCellOutletDirective);
    return ContentCellOutletDirective;
}(CdkContentCellOutlet));
export { ContentCellOutletDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1jZWxsLW91dGxldC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy90YWJsZS9jZWxsLW91dGxldHMvY29udGVudC1jZWxsLW91dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLElBQUksb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzFDO0lBQWdELDhDQUFvQjtJQUFwRTs7SUFBc0UsQ0FBQzttQ0FBMUQsMEJBQTBCOztJQUExQiwwQkFBMEI7UUFQdEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHVCQUF1QjtZQUVqQyxTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsV0FBVyxFQUFFLDRCQUEwQixFQUFFO2FBQzNFO1NBQ0YsQ0FBQztPQUNXLDBCQUEwQixDQUFnQztJQUFELGlDQUFDO0NBQUEsQUFBdkUsQ0FBZ0Qsb0JBQW9CLEdBQUc7U0FBMUQsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrQ2VsbE91dGxldCBhcyBDZGtDb250ZW50Q2VsbE91dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2RnQ29udGVudENlbGxPdXRsZXRdJyxcblxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IENka0NvbnRlbnRDZWxsT3V0bGV0LCB1c2VFeGlzdGluZzogQ29udGVudENlbGxPdXRsZXREaXJlY3RpdmUgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRDZWxsT3V0bGV0RGlyZWN0aXZlIGV4dGVuZHMgQ2RrQ29udGVudENlbGxPdXRsZXQge31cbiJdfQ==