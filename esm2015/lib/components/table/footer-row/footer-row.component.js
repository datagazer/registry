import { CdkFooterRow } from '@angular/cdk/table';
import { Component } from '@angular/core';
export class FooterRowComponent extends CdkFooterRow {
}
FooterRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'tr[dg-footer-row]',
                template: "<ng-container dgFooterCellOutlet></ng-container>\n",
                providers: [
                    { provide: CdkFooterRow, useExisting: FooterRowComponent }
                ],
                styles: [":host{display:contents}"]
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS9mb290ZXItcm93L2Zvb3Rlci1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVzFDLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxZQUFZOzs7WUFUbkQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLDhEQUEwQztnQkFHMUMsU0FBUyxFQUFFO29CQUNULEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUU7aUJBQzNEOzthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrRm9vdGVyUm93IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cltkZy1mb290ZXItcm93XScsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXItcm93LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm9vdGVyLXJvdy5jb21wb25lbnQuc2NzcyddLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogQ2RrRm9vdGVyUm93LCB1c2VFeGlzdGluZzogRm9vdGVyUm93Q29tcG9uZW50IH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJSb3dDb21wb25lbnQgZXh0ZW5kcyBDZGtGb290ZXJSb3cge31cbiJdfQ==