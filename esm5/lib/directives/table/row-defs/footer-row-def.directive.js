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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { CdkFooterRowDef } from '@angular/cdk/table';
import { Directive, Input } from '@angular/core';
var FooterRowDefDirective = /** @class */ (function (_super) {
    __extends(FooterRowDefDirective, _super);
    function FooterRowDefDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sticky = false;
        return _this;
    }
    FooterRowDefDirective_1 = FooterRowDefDirective;
    var FooterRowDefDirective_1;
    __decorate([
        Input('dgFooterRowDef'),
        __metadata("design:type", Object)
    ], FooterRowDefDirective.prototype, "columns", void 0);
    __decorate([
        Input('dgFooterRowDefSticky'),
        __metadata("design:type", Boolean)
    ], FooterRowDefDirective.prototype, "sticky", void 0);
    FooterRowDefDirective = FooterRowDefDirective_1 = __decorate([
        Directive({
            selector: '[dgFooterRowDef]',
            providers: [
                { provide: CdkFooterRowDef, useExisting: FooterRowDefDirective_1 }
            ]
        })
    ], FooterRowDefDirective);
    return FooterRowDefDirective;
}(CdkFooterRowDef));
export { FooterRowDefDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLXJvdy1kZWYuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvdGFibGUvcm93LWRlZnMvZm9vdGVyLXJvdy1kZWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTakQ7SUFBMkMseUNBQWU7SUFQMUQ7UUFBQSxxRUFhQztRQURRLFlBQU0sR0FBWSxLQUFLLENBQUM7O0lBQ2pDLENBQUM7OEJBTlkscUJBQXFCOztJQUVoQztRQURDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzs7MERBQ1U7SUFHbEM7UUFEQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7O3lEQUNDO0lBTHBCLHFCQUFxQjtRQVBqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBRTVCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLHVCQUFxQixFQUFFO2FBQ2pFO1NBQ0YsQ0FBQztPQUNXLHFCQUFxQixDQU1qQztJQUFELDRCQUFDO0NBQUEsQUFORCxDQUEyQyxlQUFlLEdBTXpEO1NBTlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrRm9vdGVyUm93RGVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2RnRm9vdGVyUm93RGVmXScsXG5cbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBDZGtGb290ZXJSb3dEZWYsIHVzZUV4aXN0aW5nOiBGb290ZXJSb3dEZWZEaXJlY3RpdmUgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlclJvd0RlZkRpcmVjdGl2ZSBleHRlbmRzIENka0Zvb3RlclJvd0RlZiB7XG4gIEBJbnB1dCgnZGdGb290ZXJSb3dEZWYnKVxuICBwdWJsaWMgY29sdW1ucyE6IEl0ZXJhYmxlPHN0cmluZz47XG5cbiAgQElucHV0KCdkZ0Zvb3RlclJvd0RlZlN0aWNreScpXG4gIHB1YmxpYyBzdGlja3k6IGJvb2xlYW4gPSBmYWxzZTtcbn1cbiJdfQ==