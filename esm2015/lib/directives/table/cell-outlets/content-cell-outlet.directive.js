var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ContentCellOutletDirective_1;
import { CdkCellOutlet as CdkContentCellOutlet } from '@angular/cdk/table';
import { Directive } from '@angular/core';
let ContentCellOutletDirective = ContentCellOutletDirective_1 = class ContentCellOutletDirective extends CdkContentCellOutlet {
};
ContentCellOutletDirective = ContentCellOutletDirective_1 = __decorate([
    Directive({
        selector: '[dgContentCellOutlet]',
        providers: [
            { provide: CdkContentCellOutlet, useExisting: ContentCellOutletDirective_1 }
        ]
    })
], ContentCellOutletDirective);
export { ContentCellOutletDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1jZWxsLW91dGxldC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy90YWJsZS9jZWxsLW91dGxldHMvY29udGVudC1jZWxsLW91dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLElBQUksb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzFDLElBQWEsMEJBQTBCLGtDQUF2QyxNQUFhLDBCQUEyQixTQUFRLG9CQUFvQjtDQUFHLENBQUE7QUFBMUQsMEJBQTBCO0lBUHRDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx1QkFBdUI7UUFFakMsU0FBUyxFQUFFO1lBQ1QsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsV0FBVyxFQUFFLDRCQUEwQixFQUFFO1NBQzNFO0tBQ0YsQ0FBQztHQUNXLDBCQUEwQixDQUFnQztTQUExRCwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtDZWxsT3V0bGV0IGFzIENka0NvbnRlbnRDZWxsT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGdDb250ZW50Q2VsbE91dGxldF0nLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogQ2RrQ29udGVudENlbGxPdXRsZXQsIHVzZUV4aXN0aW5nOiBDb250ZW50Q2VsbE91dGxldERpcmVjdGl2ZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudENlbGxPdXRsZXREaXJlY3RpdmUgZXh0ZW5kcyBDZGtDb250ZW50Q2VsbE91dGxldCB7fVxuIl19