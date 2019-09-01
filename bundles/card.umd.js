(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@datagazer/foundation')) :
    typeof define === 'function' && define.amd ? define('@datagazer/card', ['exports', '@angular/core', '@datagazer/foundation'], factory) :
    (global = global || self, factory((global.datagazer = global.datagazer || {}, global.datagazer.card = {}), global.ng.core, global.foundation));
}(this, function (exports, core, foundation) { 'use strict';

    var CardContentComponent = /** @class */ (function () {
        function CardContentComponent() {
        }
        CardContentComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'dg-card > dg-card-content',
                        template: "<ng-content></ng-content>\n",
                        styles: [":host{display:block;flex-grow:1;flex-shrink:1;padding:calc(var(--dg-layout--margins) * .5);font-family:var(--dg-typography--body-1--font-family);font-size:var(--dg-typography--body-1--font-size);line-height:var(--dg-typography--body-1--line-height);font-weight:var(--dg-typography--body-1--font-weight);text-transform:var(--dg-typography--body-1--text-transform);letter-spacing:var(--dg-typography--body-1--letter-spacing);color:var(--dg-theme--primary-text)}"]
                    }] }
        ];
        return CardContentComponent;
    }());

    var CardFooterComponent = /** @class */ (function () {
        function CardFooterComponent() {
        }
        CardFooterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'dg-card > dg-card-footer',
                        template: "<ng-content></ng-content>\n",
                        styles: [":host{display:block;flex-grow:0;flex-shrink:0;padding:calc(var(--dg-layout--margins) * .5);font-family:var(--dg-typography--body-2--font-family);font-size:var(--dg-typography--body-2--font-size);line-height:var(--dg-typography--body-2--line-height);font-weight:var(--dg-typography--body-2--font-weight);text-transform:var(--dg-typography--body-2--text-transform);letter-spacing:var(--dg-typography--body-2--letter-spacing);color:var(--dg-theme--on-surface)}"]
                    }] }
        ];
        return CardFooterComponent;
    }());

    var CardHeaderComponent = /** @class */ (function () {
        function CardHeaderComponent() {
        }
        CardHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'dg-card > dg-card-header',
                        template: "<ng-content></ng-content>\n",
                        styles: [":host{display:block;flex-grow:0;flex-shrink:0;padding:calc(var(--dg-layout--margins) * .5);font-family:var(--dg-typography--headline-6--font-family);font-size:var(--dg-typography--headline-6--font-size);line-height:var(--dg-typography--headline-6--line-height);font-weight:var(--dg-typography--headline-6--font-weight);text-transform:var(--dg-typography--headline-6--text-transform);letter-spacing:var(--dg-typography--headline-6--letter-spacing);color:var(--dg-theme--on-surface)}"]
                    }] }
        ];
        return CardHeaderComponent;
    }());

    var CardComponent = /** @class */ (function () {
        function CardComponent() {
        }
        CardComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'dg-card',
                        template: "<ng-content select=\"dg-card-header\"></ng-content>\n<ng-content select=\"dg-card-content\"></ng-content>\n<ng-content select=\"dg-card-footer\"></ng-content>\n",
                        styles: [":host{display:flex;flex-direction:column;flex-wrap:nowrap;padding:calc(var(--dg-layout--margins) * .5);border-radius:var(--dg-shape--medium-component);overflow:auto;background-color:var(--dg-theme--surface)}:host:not([dg-elevation]),:host[dg-elevation=\"0\"]{border:var(--dg-divider--on-surface)}"]
                    }] }
        ];
        return CardComponent;
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
    var components = [
        CardContentComponent,
        CardFooterComponent,
        CardHeaderComponent,
        CardComponent
    ];
    var CardModule = /** @class */ (function () {
        function CardModule() {
        }
        CardModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: __spread(modules),
                        declarations: __spread(components),
                        exports: __spread(modules, components)
                    },] }
        ];
        return CardModule;
    }());

    exports.CardComponent = CardComponent;
    exports.CardContentComponent = CardContentComponent;
    exports.CardFooterComponent = CardFooterComponent;
    exports.CardHeaderComponent = CardHeaderComponent;
    exports.CardModule = CardModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=card.umd.js.map
