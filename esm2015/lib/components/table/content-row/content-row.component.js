import { CdkRow as CdkContentRow } from '@angular/cdk/table';
import { Component } from '@angular/core';
export class ContentRowComponent extends CdkContentRow {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFibGUvY29udGVudC1yb3cvY29udGVudC1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLElBQUksYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVcxQyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsYUFBYTs7O1lBVHJELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QiwrREFBMkM7Z0JBRzNDLFNBQVMsRUFBRTtvQkFDVCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFO2lCQUM3RDs7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka1JvdyBhcyBDZGtDb250ZW50Um93IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cltkZy1jb250ZW50LXJvd10nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udGVudC1yb3cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb250ZW50LXJvdy5jb21wb25lbnQuc2NzcyddLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogQ2RrQ29udGVudFJvdywgdXNlRXhpc3Rpbmc6IENvbnRlbnRSb3dDb21wb25lbnQgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRSb3dDb21wb25lbnQgZXh0ZW5kcyBDZGtDb250ZW50Um93IHt9XG4iXX0=