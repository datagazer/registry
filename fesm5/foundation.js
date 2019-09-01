import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    CommonModule
];
var FoundationModule = /** @class */ (function () {
    function FoundationModule() {
    }
    FoundationModule.decorators = [
        { type: NgModule, args: [{
                    exports: __spread(modules)
                },] }
    ];
    return FoundationModule;
}());

// Helpers

/**
 * Generated bundle index. Do not edit.
 */

export { FoundationModule, isVoid, toBoolean, toDate, toNumber, toString, toUTC };
//# sourceMappingURL=foundation.js.map
