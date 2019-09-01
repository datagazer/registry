(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@datagazer/foundation')) :
    typeof define === 'function' && define.amd ? define('@datagazer/feature-flags', ['exports', '@angular/core', '@datagazer/foundation'], factory) :
    (global = global || self, factory((global.datagazer = global.datagazer || {}, global.datagazer['feature-flags'] = {}), global.ng.core, global.foundation));
}(this, function (exports, core, foundation) { 'use strict';

    var FEATURE_FLAGS = new core.InjectionToken('Feature Flags');
    var FeatureFlagsService = /** @class */ (function () {
        function FeatureFlagsService(_featureFlags) {
            this._featureFlags = _featureFlags;
        }
        FeatureFlagsService.prototype.isEnabled = function (feature) {
            return Boolean(this._featureFlags[feature]);
        };
        FeatureFlagsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FeatureFlagsService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [FEATURE_FLAGS,] }] }
        ]; };
        FeatureFlagsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function FeatureFlagsService_Factory() { return new FeatureFlagsService(core.ɵɵinject(FEATURE_FLAGS)); }, token: FeatureFlagsService, providedIn: "root" });
        return FeatureFlagsService;
    }());

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
            { type: core.Directive, args: [{
                        selector: '[dgFeatureFlag]'
                    },] }
        ];
        /** @nocollapse */
        FeatureFlagDirective.ctorParameters = function () { return [
            { type: core.TemplateRef },
            { type: core.ViewContainerRef },
            { type: FeatureFlagsService }
        ]; };
        FeatureFlagDirective.propDecorators = {
            dgFeatureFlag: [{ type: core.Input }]
        };
        return FeatureFlagDirective;
    }());

    var FeatureFlagGuard = /** @class */ (function () {
        function FeatureFlagGuard(_featureFlags) {
            this._featureFlags = _featureFlags;
        }
        FeatureFlagGuard.prototype.canActivate = function (_a) {
            var feature = _a.data.feature;
            return this._featureFlags.isEnabled(feature);
        };
        FeatureFlagGuard.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FeatureFlagGuard.ctorParameters = function () { return [
            { type: FeatureFlagsService }
        ]; };
        FeatureFlagGuard.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function FeatureFlagGuard_Factory() { return new FeatureFlagGuard(core.ɵɵinject(FeatureFlagsService)); }, token: FeatureFlagGuard, providedIn: "root" });
        return FeatureFlagGuard;
    }());

    var __read = (this && this.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    var __spread = (this && this.__spread) || function () {
        for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
        return ar;
    };
    var modules = [
        foundation.FoundationModule
    ];
    var directives = [
        FeatureFlagDirective
    ];
    var FeatureFlagsModule = /** @class */ (function () {
        function FeatureFlagsModule() {
        }
        FeatureFlagsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: __spread(modules),
                        declarations: __spread(directives),
                        exports: __spread(modules, directives)
                    },] }
        ];
        return FeatureFlagsModule;
    }());

    exports.FEATURE_FLAGS = FEATURE_FLAGS;
    exports.FeatureFlagDirective = FeatureFlagDirective;
    exports.FeatureFlagGuard = FeatureFlagGuard;
    exports.FeatureFlagsModule = FeatureFlagsModule;
    exports.FeatureFlagsService = FeatureFlagsService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=feature-flags.umd.js.map
