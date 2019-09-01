import { Inject, Injectable, InjectionToken } from '@angular/core';
import * as i0 from "@angular/core";
export const FEATURE_FLAGS = new InjectionToken('Feature Flags');
export class FeatureFlagsService {
    constructor(_featureFlags) {
        this._featureFlags = _featureFlags;
    }
    isEnabled(feature) {
        return Boolean(this._featureFlags[feature]);
    }
}
FeatureFlagsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FeatureFlagsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [FEATURE_FLAGS,] }] }
];
FeatureFlagsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FeatureFlagsService_Factory() { return new FeatureFlagsService(i0.ɵɵinject(FEATURE_FLAGS)); }, token: FeatureFlagsService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1mbGFncy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9mZWF0dXJlLWZsYWdzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2ZlYXR1cmUtZmxhZ3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBR25FLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxJQUFJLGNBQWMsQ0FBZSxlQUFlLENBQUMsQ0FBQztBQUsvRSxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLFlBRW1CLGFBQTJCO1FBQTNCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQzNDLENBQUM7SUFFRyxTQUFTLENBQUMsT0FBZTtRQUM5QixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7O1lBWEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OzRDQUdJLE1BQU0sU0FBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZUZsYWdzIH0gZnJvbSAnLi4vdHlwZXMvZmVhdHVyZS1mbGFncyc7XG5cbmV4cG9ydCBjb25zdCBGRUFUVVJFX0ZMQUdTID0gbmV3IEluamVjdGlvblRva2VuPEZlYXR1cmVGbGFncz4oJ0ZlYXR1cmUgRmxhZ3MnKTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZUZsYWdzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRkVBVFVSRV9GTEFHUylcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9mZWF0dXJlRmxhZ3M6IEZlYXR1cmVGbGFnc1xuICApIHt9XG5cbiAgcHVibGljIGlzRW5hYmxlZChmZWF0dXJlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLl9mZWF0dXJlRmxhZ3NbZmVhdHVyZV0pO1xuICB9XG59XG4iXX0=