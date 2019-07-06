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
import { CdkCellDef as CdkContentCellDef } from '@angular/cdk/table';
import { Directive } from '@angular/core';
var ContentCellDefDirective = /** @class */ (function (_super) {
    __extends(ContentCellDefDirective, _super);
    function ContentCellDefDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentCellDefDirective_1 = ContentCellDefDirective;
    var ContentCellDefDirective_1;
    ContentCellDefDirective = ContentCellDefDirective_1 = __decorate([
        Directive({
            selector: '[dgContentCellDef]',
            providers: [
                { provide: CdkContentCellDef, useExisting: ContentCellDefDirective_1 }
            ]
        })
    ], ContentCellDefDirective);
    return ContentCellDefDirective;
}(CdkContentCellDef));
export { ContentCellDefDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1jZWxsLWRlZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy90YWJsZS9jZWxsLWRlZnMvY29udGVudC1jZWxsLWRlZi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLElBQUksaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzFDO0lBQTZDLDJDQUFpQjtJQUE5RDs7SUFBZ0UsQ0FBQztnQ0FBcEQsdUJBQXVCOztJQUF2Qix1QkFBdUI7UUFQbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUU5QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLHlCQUF1QixFQUFFO2FBQ3JFO1NBQ0YsQ0FBQztPQUNXLHVCQUF1QixDQUE2QjtJQUFELDhCQUFDO0NBQUEsQUFBakUsQ0FBNkMsaUJBQWlCLEdBQUc7U0FBcEQsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrQ2VsbERlZiBhcyBDZGtDb250ZW50Q2VsbERlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2RnQ29udGVudENlbGxEZWZdJyxcblxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IENka0NvbnRlbnRDZWxsRGVmLCB1c2VFeGlzdGluZzogQ29udGVudENlbGxEZWZEaXJlY3RpdmUgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRDZWxsRGVmRGlyZWN0aXZlIGV4dGVuZHMgQ2RrQ29udGVudENlbGxEZWYge31cbiJdfQ==