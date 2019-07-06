var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HeaderRowOutletDirective_1;
import { HeaderRowOutlet } from '@angular/cdk/table';
import { Directive } from '@angular/core';
let HeaderRowOutletDirective = HeaderRowOutletDirective_1 = class HeaderRowOutletDirective extends HeaderRowOutlet {
};
HeaderRowOutletDirective = HeaderRowOutletDirective_1 = __decorate([
    Directive({
        selector: '[dgHeaderRowOutlet]',
        providers: [
            { provide: HeaderRowOutlet, useExisting: HeaderRowOutletDirective_1 }
        ]
    })
], HeaderRowOutletDirective);
export { HeaderRowOutletDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXJvdy1vdXRsZXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvdGFibGUvcm93LW91dGxldHMvaGVhZGVyLXJvdy1vdXRsZXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVMxQyxJQUFhLHdCQUF3QixnQ0FBckMsTUFBYSx3QkFBeUIsU0FBUSxlQUFlO0NBQUcsQ0FBQTtBQUFuRCx3QkFBd0I7SUFQcEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHFCQUFxQjtRQUUvQixTQUFTLEVBQUU7WUFDVCxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLDBCQUF3QixFQUFFO1NBQ3BFO0tBQ0YsQ0FBQztHQUNXLHdCQUF3QixDQUEyQjtTQUFuRCx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkZXJSb3dPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkZ0hlYWRlclJvd091dGxldF0nLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogSGVhZGVyUm93T3V0bGV0LCB1c2VFeGlzdGluZzogSGVhZGVyUm93T3V0bGV0RGlyZWN0aXZlIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJSb3dPdXRsZXREaXJlY3RpdmUgZXh0ZW5kcyBIZWFkZXJSb3dPdXRsZXQge31cbiJdfQ==