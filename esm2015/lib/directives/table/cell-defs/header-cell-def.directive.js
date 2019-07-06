var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HeaderCellDefDirective_1;
import { CdkHeaderCellDef } from '@angular/cdk/table';
import { Directive } from '@angular/core';
let HeaderCellDefDirective = HeaderCellDefDirective_1 = class HeaderCellDefDirective extends CdkHeaderCellDef {
};
HeaderCellDefDirective = HeaderCellDefDirective_1 = __decorate([
    Directive({
        selector: '[dgHeaderCellDef]',
        providers: [
            { provide: CdkHeaderCellDef, useExisting: HeaderCellDefDirective_1 }
        ]
    })
], HeaderCellDefDirective);
export { HeaderCellDefDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWNlbGwtZGVmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3RhYmxlL2NlbGwtZGVmcy9oZWFkZXItY2VsbC1kZWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzFDLElBQWEsc0JBQXNCLDhCQUFuQyxNQUFhLHNCQUF1QixTQUFRLGdCQUFnQjtDQUFHLENBQUE7QUFBbEQsc0JBQXNCO0lBUGxDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQkFBbUI7UUFFN0IsU0FBUyxFQUFFO1lBQ1QsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLHdCQUFzQixFQUFFO1NBQ25FO0tBQ0YsQ0FBQztHQUNXLHNCQUFzQixDQUE0QjtTQUFsRCxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtIZWFkZXJDZWxsRGVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGdIZWFkZXJDZWxsRGVmXScsXG5cbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBDZGtIZWFkZXJDZWxsRGVmLCB1c2VFeGlzdGluZzogSGVhZGVyQ2VsbERlZkRpcmVjdGl2ZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ2VsbERlZkRpcmVjdGl2ZSBleHRlbmRzIENka0hlYWRlckNlbGxEZWYge31cbiJdfQ==