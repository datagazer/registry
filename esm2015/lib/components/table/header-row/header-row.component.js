import { CdkHeaderRow } from '@angular/cdk/table';
import { Component } from '@angular/core';
export class HeaderRowComponent extends CdkHeaderRow {
}
HeaderRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'tr[dg-header-row]',
                template: "<ng-container dgHeaderCellOutlet></ng-container>\n",
                providers: [
                    { provide: CdkHeaderRow, useExisting: HeaderRowComponent }
                ],
                styles: [":host{display:contents}"]
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS9oZWFkZXItcm93L2hlYWRlci1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVzFDLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxZQUFZOzs7WUFUbkQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLDhEQUEwQztnQkFHMUMsU0FBUyxFQUFFO29CQUNULEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUU7aUJBQzNEOzthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrSGVhZGVyUm93IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cltkZy1oZWFkZXItcm93XScsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXItcm93LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLXJvdy5jb21wb25lbnQuc2NzcyddLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogQ2RrSGVhZGVyUm93LCB1c2VFeGlzdGluZzogSGVhZGVyUm93Q29tcG9uZW50IH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJSb3dDb21wb25lbnQgZXh0ZW5kcyBDZGtIZWFkZXJSb3cge31cbiJdfQ==