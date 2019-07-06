var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CdkRow as CdkContentRow } from '@angular/cdk/table';
import { Component } from '@angular/core';
var ContentRowComponent = /** @class */ (function (_super) {
    __extends(ContentRowComponent, _super);
    function ContentRowComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentRowComponent_1 = ContentRowComponent;
    var ContentRowComponent_1;
    ContentRowComponent = ContentRowComponent_1 = __decorate([
        Component({
            selector: 'tr[dg-content-row]',
            template: "<ng-container dgContentCellOutlet></ng-container>\n",
            providers: [
                { provide: CdkContentRow, useExisting: ContentRowComponent_1 }
            ],
            styles: [":host{display:contents}"]
        })
    ], ContentRowComponent);
    return ContentRowComponent;
}(CdkContentRow));
export { ContentRowComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFibGUvcm93cy9jb250ZW50LXJvdy9jb250ZW50LXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLElBQUksYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVcxQztJQUF5Qyx1Q0FBYTtJQUF0RDs7SUFBd0QsQ0FBQzs0QkFBNUMsbUJBQW1COztJQUFuQixtQkFBbUI7UUFUL0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QiwrREFBMkM7WUFHM0MsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUscUJBQW1CLEVBQUU7YUFDN0Q7O1NBQ0YsQ0FBQztPQUNXLG1CQUFtQixDQUF5QjtJQUFELDBCQUFDO0NBQUEsQUFBekQsQ0FBeUMsYUFBYSxHQUFHO1NBQTVDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka1JvdyBhcyBDZGtDb250ZW50Um93IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cltkZy1jb250ZW50LXJvd10nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udGVudC1yb3cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb250ZW50LXJvdy5jb21wb25lbnQuc2NzcyddLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogQ2RrQ29udGVudFJvdywgdXNlRXhpc3Rpbmc6IENvbnRlbnRSb3dDb21wb25lbnQgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRSb3dDb21wb25lbnQgZXh0ZW5kcyBDZGtDb250ZW50Um93IHt9XG4iXX0=