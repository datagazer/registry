var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ContentCellDefDirective_1;
import { CdkCellDef as CdkContentCellDef } from '@angular/cdk/table';
import { Directive } from '@angular/core';
let ContentCellDefDirective = ContentCellDefDirective_1 = class ContentCellDefDirective extends CdkContentCellDef {
};
ContentCellDefDirective = ContentCellDefDirective_1 = __decorate([
    Directive({
        selector: '[dgContentCellDef]',
        providers: [
            { provide: CdkContentCellDef, useExisting: ContentCellDefDirective_1 }
        ]
    })
], ContentCellDefDirective);
export { ContentCellDefDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1jZWxsLWRlZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy90YWJsZS9jZWxsLWRlZnMvY29udGVudC1jZWxsLWRlZi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLElBQUksaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzFDLElBQWEsdUJBQXVCLCtCQUFwQyxNQUFhLHVCQUF3QixTQUFRLGlCQUFpQjtDQUFHLENBQUE7QUFBcEQsdUJBQXVCO0lBUG5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFFOUIsU0FBUyxFQUFFO1lBQ1QsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLHlCQUF1QixFQUFFO1NBQ3JFO0tBQ0YsQ0FBQztHQUNXLHVCQUF1QixDQUE2QjtTQUFwRCx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtDZWxsRGVmIGFzIENka0NvbnRlbnRDZWxsRGVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGdDb250ZW50Q2VsbERlZl0nLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogQ2RrQ29udGVudENlbGxEZWYsIHVzZUV4aXN0aW5nOiBDb250ZW50Q2VsbERlZkRpcmVjdGl2ZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudENlbGxEZWZEaXJlY3RpdmUgZXh0ZW5kcyBDZGtDb250ZW50Q2VsbERlZiB7fVxuIl19