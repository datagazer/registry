import { InjectionToken, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, Directive, TemplateRef, ViewContainerRef, Input, NgModule } from '@angular/core';
import { FoundationModule } from '@datagazer/foundation';

const FEATURE_FLAGS = new InjectionToken('Feature Flags');
class FeatureFlagsService {
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
FeatureFlagsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function FeatureFlagsService_Factory() { return new FeatureFlagsService(ɵɵinject(FEATURE_FLAGS)); }, token: FeatureFlagsService, providedIn: "root" });

class FeatureFlagDirective {
    constructor(_templateRef, _viewContainerRef, _featureFlags) {
        this._templateRef = _templateRef;
        this._viewContainerRef = _viewContainerRef;
        this._featureFlags = _featureFlags;
    }
    set dgFeatureFlag(feature) {
        this._viewContainerRef.clear();
        if (this._featureFlags.isEnabled(feature)) {
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
    }
}
FeatureFlagDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dgFeatureFlag]'
            },] }
];
/** @nocollapse */
FeatureFlagDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: FeatureFlagsService }
];
FeatureFlagDirective.propDecorators = {
    dgFeatureFlag: [{ type: Input }]
};

class FeatureFlagGuard {
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
FeatureFlagGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function FeatureFlagGuard_Factory() { return new FeatureFlagGuard(ɵɵinject(FeatureFlagsService)); }, token: FeatureFlagGuard, providedIn: "root" });

const modules = [
    FoundationModule
];
const directives = [
    FeatureFlagDirective
];
class FeatureFlagsModule {
}
FeatureFlagsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...modules
                ],
                declarations: [
                    ...directives
                ],
                exports: [
                    ...modules,
                    ...directives
                ]
            },] }
];

// Directives

/**
 * Generated bundle index. Do not edit.
 */

export { FEATURE_FLAGS, FeatureFlagDirective, FeatureFlagGuard, FeatureFlagsModule, FeatureFlagsService };
//# sourceMappingURL=feature-flags.js.map
