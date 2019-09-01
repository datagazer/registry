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
import { NgModule } from '@angular/core';
// Modules
import { CommonModule } from '@angular/common';
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
export { FoundationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm91bmRhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvZm91bmRhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLFVBQVU7QUFDVixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsSUFBTSxPQUFPLEdBQUc7SUFDZCxZQUFZO0NBQ2IsQ0FBQztBQUVGO0lBQUE7SUFLK0IsQ0FBQzs7Z0JBTC9CLFFBQVEsU0FBQztvQkFDUixPQUFPLFdBQ0YsT0FBTyxDQUNYO2lCQUNGOztJQUM4Qix1QkFBQztDQUFBLEFBTGhDLElBS2dDO1NBQW5CLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIE1vZHVsZXNcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmNvbnN0IG1vZHVsZXMgPSBbXG4gIENvbW1vbk1vZHVsZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW1xuICAgIC4uLm1vZHVsZXNcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGb3VuZGF0aW9uTW9kdWxlIHt9XG4iXX0=