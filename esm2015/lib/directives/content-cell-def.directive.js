import { CdkCellDef as CdkContentCellDef } from '@angular/cdk/table';
import { Directive } from '@angular/core';
export class ContentCellDefDirective extends CdkContentCellDef {
}
ContentCellDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dgContentCellDef]',
                providers: [
                    { provide: CdkContentCellDef, useExisting: ContentCellDefDirective }
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1jZWxsLWRlZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9jb250ZW50LWNlbGwtZGVmLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxJQUFJLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVMxQyxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsaUJBQWlCOzs7WUFQN0QsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBRTlCLFNBQVMsRUFBRTtvQkFDVCxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsdUJBQXVCLEVBQUU7aUJBQ3JFO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtDZWxsRGVmIGFzIENka0NvbnRlbnRDZWxsRGVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGdDb250ZW50Q2VsbERlZl0nLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogQ2RrQ29udGVudENlbGxEZWYsIHVzZUV4aXN0aW5nOiBDb250ZW50Q2VsbERlZkRpcmVjdGl2ZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudENlbGxEZWZEaXJlY3RpdmUgZXh0ZW5kcyBDZGtDb250ZW50Q2VsbERlZiB7fVxuIl19