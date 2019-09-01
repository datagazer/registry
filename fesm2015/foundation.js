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

const modules = [
    CommonModule
];
class FoundationModule {
}
FoundationModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    ...modules
                ]
            },] }
];

// Helpers

/**
 * Generated bundle index. Do not edit.
 */

export { FoundationModule, isVoid, toBoolean, toDate, toNumber, toString, toUTC };
//# sourceMappingURL=foundation.js.map
