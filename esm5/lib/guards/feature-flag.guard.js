import { Injectable } from '@angular/core';
import { FeatureFlagsService } from '../services/feature-flags.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/feature-flags.service";
var FeatureFlagGuard = /** @class */ (function () {
    function FeatureFlagGuard(_featureFlags) {
        this._featureFlags = _featureFlags;
    }
    FeatureFlagGuard.prototype.canActivate = function (_a) {
        var feature = _a.data.feature;
        return this._featureFlags.isEnabled(feature);
    };
    FeatureFlagGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FeatureFlagGuard.ctorParameters = function () { return [
        { type: FeatureFlagsService }
    ]; };
    FeatureFlagGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FeatureFlagGuard_Factory() { return new FeatureFlagGuard(i0.ɵɵinject(i1.FeatureFlagsService)); }, token: FeatureFlagGuard, providedIn: "root" });
    return FeatureFlagGuard;
}());
export { FeatureFlagGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1mbGFnLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9mZWF0dXJlLWZsYWdzLyIsInNvdXJjZXMiOlsibGliL2d1YXJkcy9mZWF0dXJlLWZsYWcuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7O0FBRXhFO0lBSUUsMEJBQ21CLGFBQWtDO1FBQWxDLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtJQUNsRCxDQUFDO0lBRUcsc0NBQVcsR0FBbEIsVUFBbUIsRUFBNkM7WUFBbkMseUJBQU87UUFDbEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkFWRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpRLG1CQUFtQjs7OzJCQUY1QjtDQWVDLEFBWEQsSUFXQztTQVJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZlYXR1cmVGbGFnc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mZWF0dXJlLWZsYWdzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlRmxhZ0d1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9mZWF0dXJlRmxhZ3M6IEZlYXR1cmVGbGFnc1NlcnZpY2VcbiAgKSB7fVxuXG4gIHB1YmxpYyBjYW5BY3RpdmF0ZSh7IGRhdGE6IHsgZmVhdHVyZSB9IH06IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmVhdHVyZUZsYWdzLmlzRW5hYmxlZChmZWF0dXJlKTtcbiAgfVxufVxuIl19