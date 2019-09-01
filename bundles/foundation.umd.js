(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@datagazer/foundation', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.datagazer = global.datagazer || {}, global.datagazer.foundation = {}), global.ng.core, global.ng.common));
}(this, function (exports, core, common) { 'use strict';

    function isVoid(value) {
        return value === undefined || value === null;
    }
    function toBoolean(value) {
        if (!isVoid(value)) {
            return Boolean(value);
        }
        return null;
    }
    function toNumber(value) {
        if (!isVoid(value)) {
            return Number(value);
        }
        return null;
    }
    function toString(value) {
        if (!isVoid(value)) {
            return String(value);
        }
        return null;
    }
    function toDate(value) {
        if (!isVoid(value)) {
            return new Date(value);
        }
        return null;
    }

    function toUTC(year, month, day) {
        return new Date(Date.UTC(year, month, day));
    }

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
        common.CommonModule
    ];
    var FoundationModule = /** @class */ (function () {
        function FoundationModule() {
        }
        FoundationModule.decorators = [
            { type: core.NgModule, args: [{
                        exports: __spread(modules)
                    },] }
        ];
        return FoundationModule;
    }());

    exports.FoundationModule = FoundationModule;
    exports.isVoid = isVoid;
    exports.toBoolean = toBoolean;
    exports.toDate = toDate;
    exports.toNumber = toNumber;
    exports.toString = toString;
    exports.toUTC = toUTC;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=foundation.umd.js.map
