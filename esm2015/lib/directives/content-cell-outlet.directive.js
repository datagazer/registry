import { CdkCellOutlet as CdkContentCellOutlet } from '@angular/cdk/table';
import { Directive } from '@angular/core';
export class ContentCellOutletDirective extends CdkContentCellOutlet {
}
ContentCellOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dgContentCellOutlet]',
                providers: [
                    { provide: CdkContentCellOutlet, useExisting: ContentCellOutletDirective }
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1jZWxsLW91dGxldC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9jb250ZW50LWNlbGwtb3V0bGV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxJQUFJLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVMxQyxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsb0JBQW9COzs7WUFQbkUsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBRWpDLFNBQVMsRUFBRTtvQkFDVCxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxXQUFXLEVBQUUsMEJBQTBCLEVBQUU7aUJBQzNFO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtDZWxsT3V0bGV0IGFzIENka0NvbnRlbnRDZWxsT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGdDb250ZW50Q2VsbE91dGxldF0nLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogQ2RrQ29udGVudENlbGxPdXRsZXQsIHVzZUV4aXN0aW5nOiBDb250ZW50Q2VsbE91dGxldERpcmVjdGl2ZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudENlbGxPdXRsZXREaXJlY3RpdmUgZXh0ZW5kcyBDZGtDb250ZW50Q2VsbE91dGxldCB7fVxuIl19