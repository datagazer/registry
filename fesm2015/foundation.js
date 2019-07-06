import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let SurfaceComponent = class SurfaceComponent {
};
SurfaceComponent = __decorate([
    Component({
        selector: 'dg-surface',
        template: "<ng-content></ng-content>\n",
        styles: [":host{display:block;border-radius:var(--dg-shape--medium-radius);background-color:var(--dg-theme--background--card);color:var(--dg-theme--foreground--text);overflow:auto}"]
    })
], SurfaceComponent);

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
        let localDate = new Date(value);
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
const modules = [
    CommonModule
];
const components = [
    SurfaceComponent
];
let FoundationModule = class FoundationModule {
};
FoundationModule = __decorate$1([
    NgModule({
        imports: [
            ...modules
        ],
        declarations: [
            ...components
        ],
        exports: [
            ...components
        ]
    })
], FoundationModule);

export { FoundationModule, SurfaceComponent, isVoid, toBoolean, toDate, toNumber, toString };
//# sourceMappingURL=foundation.js.map
