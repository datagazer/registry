import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SurfaceComponent = /** @class */ (function () {
    function SurfaceComponent() {
    }
    SurfaceComponent = __decorate([
        Component({
            selector: 'dg-surface',
            template: "<ng-content></ng-content>\n",
            styles: [":host{display:block;border-radius:var(--dg-shape--medium-radius);background-color:var(--dg-theme--background--card);color:var(--dg-theme--foreground--text);overflow:auto}"]
        })
    ], SurfaceComponent);
    return SurfaceComponent;
}());

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
    if (typeof value === 'string' || typeof value === 'number' || value instanceof Date) {
        var localDate = new Date(value);
        return new Date(Date.UTC(localDate.getFullYear(), localDate.getMonth(), localDate.getDate(), localDate.getHours(), localDate.getMinutes(), localDate.getSeconds(), localDate.getMilliseconds()));
    }
    return null;
}

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var components = [
    SurfaceComponent
];
var FoundationModule = /** @class */ (function () {
    function FoundationModule() {
    }
    FoundationModule = __decorate$1([
        NgModule({
            imports: __spread(modules),
            declarations: __spread(components),
            exports: __spread(components)
        })
    ], FoundationModule);
    return FoundationModule;
}());

export { FoundationModule, SurfaceComponent, isVoid, toBoolean, toDate, toNumber, toString };
//# sourceMappingURL=foundation.js.map
