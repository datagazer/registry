var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ContentRowOutletDirective_1;
import { DataRowOutlet as ContentRowOutlet } from '@angular/cdk/table';
import { Directive } from '@angular/core';
let ContentRowOutletDirective = ContentRowOutletDirective_1 = class ContentRowOutletDirective extends ContentRowOutlet {
};
ContentRowOutletDirective = ContentRowOutletDirective_1 = __decorate([
    Directive({
        selector: '[dgContentRowOutlet]',
        providers: [
            { provide: ContentRowOutlet, useExisting: ContentRowOutletDirective_1 }
        ]
    })
], ContentRowOutletDirective);
export { ContentRowOutletDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1yb3ctb3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3RhYmxlL3Jvdy1vdXRsZXRzL2NvbnRlbnQtcm93LW91dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLElBQUksZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzFDLElBQWEseUJBQXlCLGlDQUF0QyxNQUFhLHlCQUEwQixTQUFRLGdCQUFnQjtDQUFHLENBQUE7QUFBckQseUJBQXlCO0lBUHJDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxzQkFBc0I7UUFFaEMsU0FBUyxFQUFFO1lBQ1QsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLDJCQUF5QixFQUFFO1NBQ3RFO0tBQ0YsQ0FBQztHQUNXLHlCQUF5QixDQUE0QjtTQUFyRCx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhUm93T3V0bGV0IGFzIENvbnRlbnRSb3dPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkZ0NvbnRlbnRSb3dPdXRsZXRdJyxcblxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IENvbnRlbnRSb3dPdXRsZXQsIHVzZUV4aXN0aW5nOiBDb250ZW50Um93T3V0bGV0RGlyZWN0aXZlIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50Um93T3V0bGV0RGlyZWN0aXZlIGV4dGVuZHMgQ29udGVudFJvd091dGxldCB7fVxuIl19