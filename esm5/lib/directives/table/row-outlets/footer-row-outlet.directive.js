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
import { FooterRowOutlet } from '@angular/cdk/table';
import { Directive } from '@angular/core';
var FooterRowOutletDirective = /** @class */ (function (_super) {
    __extends(FooterRowOutletDirective, _super);
    function FooterRowOutletDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FooterRowOutletDirective_1 = FooterRowOutletDirective;
    var FooterRowOutletDirective_1;
    FooterRowOutletDirective = FooterRowOutletDirective_1 = __decorate([
        Directive({
            selector: '[dgFooterRowOutlet]',
            providers: [
                { provide: FooterRowOutlet, useExisting: FooterRowOutletDirective_1 }
            ]
        })
    ], FooterRowOutletDirective);
    return FooterRowOutletDirective;
}(FooterRowOutlet));
export { FooterRowOutletDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLXJvdy1vdXRsZXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvdGFibGUvcm93LW91dGxldHMvZm9vdGVyLXJvdy1vdXRsZXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVMxQztJQUE4Qyw0Q0FBZTtJQUE3RDs7SUFBK0QsQ0FBQztpQ0FBbkQsd0JBQXdCOztJQUF4Qix3QkFBd0I7UUFQcEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHFCQUFxQjtZQUUvQixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSwwQkFBd0IsRUFBRTthQUNwRTtTQUNGLENBQUM7T0FDVyx3QkFBd0IsQ0FBMkI7SUFBRCwrQkFBQztDQUFBLEFBQWhFLENBQThDLGVBQWUsR0FBRztTQUFuRCx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb290ZXJSb3dPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkZ0Zvb3RlclJvd091dGxldF0nLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogRm9vdGVyUm93T3V0bGV0LCB1c2VFeGlzdGluZzogRm9vdGVyUm93T3V0bGV0RGlyZWN0aXZlIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJSb3dPdXRsZXREaXJlY3RpdmUgZXh0ZW5kcyBGb290ZXJSb3dPdXRsZXQge31cbiJdfQ==