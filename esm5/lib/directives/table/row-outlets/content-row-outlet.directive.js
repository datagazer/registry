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
import { DataRowOutlet as ContentRowOutlet } from '@angular/cdk/table';
import { Directive } from '@angular/core';
var ContentRowOutletDirective = /** @class */ (function (_super) {
    __extends(ContentRowOutletDirective, _super);
    function ContentRowOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentRowOutletDirective_1 = ContentRowOutletDirective;
    var ContentRowOutletDirective_1;
    ContentRowOutletDirective = ContentRowOutletDirective_1 = __decorate([
        Directive({
            selector: '[dgContentRowOutlet]',
            providers: [
                { provide: ContentRowOutlet, useExisting: ContentRowOutletDirective_1 }
            ]
        })
    ], ContentRowOutletDirective);
    return ContentRowOutletDirective;
}(ContentRowOutlet));
export { ContentRowOutletDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1yb3ctb3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3RhYmxlL3Jvdy1vdXRsZXRzL2NvbnRlbnQtcm93LW91dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLElBQUksZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzFDO0lBQStDLDZDQUFnQjtJQUEvRDs7SUFBaUUsQ0FBQztrQ0FBckQseUJBQXlCOztJQUF6Qix5QkFBeUI7UUFQckMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHNCQUFzQjtZQUVoQyxTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLDJCQUF5QixFQUFFO2FBQ3RFO1NBQ0YsQ0FBQztPQUNXLHlCQUF5QixDQUE0QjtJQUFELGdDQUFDO0NBQUEsQUFBbEUsQ0FBK0MsZ0JBQWdCLEdBQUc7U0FBckQseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVJvd091dGxldCBhcyBDb250ZW50Um93T3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGdDb250ZW50Um93T3V0bGV0XScsXG5cbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBDb250ZW50Um93T3V0bGV0LCB1c2VFeGlzdGluZzogQ29udGVudFJvd091dGxldERpcmVjdGl2ZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudFJvd091dGxldERpcmVjdGl2ZSBleHRlbmRzIENvbnRlbnRSb3dPdXRsZXQge31cbiJdfQ==