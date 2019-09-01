import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureFlagsService } from '../services/feature-flags.service';
var FeatureFlagDirective = /** @class */ (function () {
    function FeatureFlagDirective(_templateRef, _viewContainerRef, _featureFlags) {
        this._templateRef = _templateRef;
        this._viewContainerRef = _viewContainerRef;
        this._featureFlags = _featureFlags;
    }
    Object.defineProperty(FeatureFlagDirective.prototype, "dgFeatureFlag", {
        set: function (feature) {
            this._viewContainerRef.clear();
            if (this._featureFlags.isEnabled(feature)) {
                this._viewContainerRef.createEmbeddedView(this._templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    FeatureFlagDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dgFeatureFlag]'
                },] }
    ];
    /** @nocollapse */
    FeatureFlagDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: FeatureFlagsService }
    ]; };
    FeatureFlagDirective.propDecorators = {
        dgFeatureFlag: [{ type: Input }]
    };
    return FeatureFlagDirective;
}());
export { FeatureFlagDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1mbGFnLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvZmVhdHVyZS1mbGFncy8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2ZlYXR1cmUtZmxhZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXhFO0lBYUUsOEJBQ21CLFlBQWdDLEVBQ2hDLGlCQUFtQyxFQUVuQyxhQUFrQztRQUhsQyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUVuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7SUFDbEQsQ0FBQztJQWRKLHNCQUNXLCtDQUFhO2FBRHhCLFVBQ3lCLE9BQWU7WUFDdEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO1lBRS9CLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDOUQ7UUFDSCxDQUFDOzs7T0FBQTs7Z0JBWEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCOzs7O2dCQUwwQixXQUFXO2dCQUFFLGdCQUFnQjtnQkFDL0MsbUJBQW1COzs7Z0NBTXpCLEtBQUs7O0lBZVIsMkJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWhCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZUZsYWdzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZlYXR1cmUtZmxhZ3Muc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkZ0ZlYXR1cmVGbGFnXSdcbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZUZsYWdEaXJlY3RpdmUge1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRnRmVhdHVyZUZsYWcoZmVhdHVyZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXG4gICAgaWYgKHRoaXMuX2ZlYXR1cmVGbGFncy5pc0VuYWJsZWQoZmVhdHVyZSkpIHtcbiAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuX3RlbXBsYXRlUmVmKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8bmV2ZXI+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IF9mZWF0dXJlRmxhZ3M6IEZlYXR1cmVGbGFnc1NlcnZpY2VcbiAgKSB7fVxufVxuIl19