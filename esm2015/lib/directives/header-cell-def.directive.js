import { CdkHeaderCellDef } from '@angular/cdk/table';
import { Directive } from '@angular/core';
export class HeaderCellDefDirective extends CdkHeaderCellDef {
}
HeaderCellDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dgHeaderCellDef]',
                providers: [
                    { provide: CdkHeaderCellDef, useExisting: HeaderCellDefDirective }
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWNlbGwtZGVmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2hlYWRlci1jZWxsLWRlZi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVMxQyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsZ0JBQWdCOzs7WUFQM0QsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBRTdCLFNBQVMsRUFBRTtvQkFDVCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsc0JBQXNCLEVBQUU7aUJBQ25FO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtIZWFkZXJDZWxsRGVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGdIZWFkZXJDZWxsRGVmXScsXG5cbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBDZGtIZWFkZXJDZWxsRGVmLCB1c2VFeGlzdGluZzogSGVhZGVyQ2VsbERlZkRpcmVjdGl2ZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ2VsbERlZkRpcmVjdGl2ZSBleHRlbmRzIENka0hlYWRlckNlbGxEZWYge31cbiJdfQ==