import { Injectable } from '@angular/core';
import { FeatureFlagsService } from '../services/feature-flags.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/feature-flags.service";
export class FeatureFlagGuard {
    constructor(_featureFlags) {
        this._featureFlags = _featureFlags;
    }
    canActivate({ data: { feature } }) {
        return this._featureFlags.isEnabled(feature);
    }
}
FeatureFlagGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FeatureFlagGuard.ctorParameters = () => [
    { type: FeatureFlagsService }
];
FeatureFlagGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FeatureFlagGuard_Factory() { return new FeatureFlagGuard(i0.ɵɵinject(i1.FeatureFlagsService)); }, token: FeatureFlagGuard, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1mbGFnLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9mZWF0dXJlLWZsYWdzLyIsInNvdXJjZXMiOlsibGliL2d1YXJkcy9mZWF0dXJlLWZsYWcuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7O0FBS3hFLE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsWUFDbUIsYUFBa0M7UUFBbEMsa0JBQWEsR0FBYixhQUFhLENBQXFCO0lBQ2xELENBQUM7SUFFRyxXQUFXLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBMEI7UUFDOUQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7WUFWRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGZWF0dXJlRmxhZ3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmVhdHVyZS1mbGFncy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZUZsYWdHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZmVhdHVyZUZsYWdzOiBGZWF0dXJlRmxhZ3NTZXJ2aWNlXG4gICkge31cblxuICBwdWJsaWMgY2FuQWN0aXZhdGUoeyBkYXRhOiB7IGZlYXR1cmUgfSB9OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZlYXR1cmVGbGFncy5pc0VuYWJsZWQoZmVhdHVyZSk7XG4gIH1cbn1cbiJdfQ==