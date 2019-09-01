import { Inject, Injectable, InjectionToken } from '@angular/core';
import * as i0 from "@angular/core";
export var FEATURE_FLAGS = new InjectionToken('Feature Flags');
var FeatureFlagsService = /** @class */ (function () {
    function FeatureFlagsService(_featureFlags) {
        this._featureFlags = _featureFlags;
    }
    FeatureFlagsService.prototype.isEnabled = function (feature) {
        return Boolean(this._featureFlags[feature]);
    };
    FeatureFlagsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FeatureFlagsService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [FEATURE_FLAGS,] }] }
    ]; };
    FeatureFlagsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FeatureFlagsService_Factory() { return new FeatureFlagsService(i0.ɵɵinject(FEATURE_FLAGS)); }, token: FeatureFlagsService, providedIn: "root" });
    return FeatureFlagsService;
}());
export { FeatureFlagsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1mbGFncy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9mZWF0dXJlLWZsYWdzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2ZlYXR1cmUtZmxhZ3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBR25FLE1BQU0sQ0FBQyxJQUFNLGFBQWEsR0FBRyxJQUFJLGNBQWMsQ0FBZSxlQUFlLENBQUMsQ0FBQztBQUUvRTtJQUlFLDZCQUVtQixhQUEyQjtRQUEzQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUMzQyxDQUFDO0lBRUcsdUNBQVMsR0FBaEIsVUFBaUIsT0FBZTtRQUM5QixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Z0JBWEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnREFHSSxNQUFNLFNBQUMsYUFBYTs7OzhCQVZ6QjtDQWlCQyxBQVpELElBWUM7U0FUWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGZWF0dXJlRmxhZ3MgfSBmcm9tICcuLi90eXBlcy9mZWF0dXJlLWZsYWdzJztcblxuZXhwb3J0IGNvbnN0IEZFQVRVUkVfRkxBR1MgPSBuZXcgSW5qZWN0aW9uVG9rZW48RmVhdHVyZUZsYWdzPignRmVhdHVyZSBGbGFncycpO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlRmxhZ3NTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChGRUFUVVJFX0ZMQUdTKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2ZlYXR1cmVGbGFnczogRmVhdHVyZUZsYWdzXG4gICkge31cblxuICBwdWJsaWMgaXNFbmFibGVkKGZlYXR1cmU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuX2ZlYXR1cmVGbGFnc1tmZWF0dXJlXSk7XG4gIH1cbn1cbiJdfQ==