var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HeaderRowComponent_1;
import { CdkHeaderRow } from '@angular/cdk/table';
import { Component } from '@angular/core';
let HeaderRowComponent = HeaderRowComponent_1 = class HeaderRowComponent extends CdkHeaderRow {
};
HeaderRowComponent = HeaderRowComponent_1 = __decorate([
    Component({
        selector: 'tr[dg-header-row]',
        template: "<ng-container dgHeaderCellOutlet></ng-container>\n",
        providers: [
            { provide: CdkHeaderRow, useExisting: HeaderRowComponent_1 }
        ],
        styles: [":host{display:contents}"]
    })
], HeaderRowComponent);
export { HeaderRowComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS9yb3dzL2hlYWRlci1yb3cvaGVhZGVyLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVzFDLElBQWEsa0JBQWtCLDBCQUEvQixNQUFhLGtCQUFtQixTQUFRLFlBQVk7Q0FBRyxDQUFBO0FBQTFDLGtCQUFrQjtJQVQ5QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLDhEQUEwQztRQUcxQyxTQUFTLEVBQUU7WUFDVCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLG9CQUFrQixFQUFFO1NBQzNEOztLQUNGLENBQUM7R0FDVyxrQkFBa0IsQ0FBd0I7U0FBMUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrSGVhZGVyUm93IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cltkZy1oZWFkZXItcm93XScsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXItcm93LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLXJvdy5jb21wb25lbnQuc2NzcyddLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogQ2RrSGVhZGVyUm93LCB1c2VFeGlzdGluZzogSGVhZGVyUm93Q29tcG9uZW50IH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJSb3dDb21wb25lbnQgZXh0ZW5kcyBDZGtIZWFkZXJSb3cge31cbiJdfQ==