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
import { FoundationModule } from '@datagazer/foundation';
var modules = [
    FoundationModule
];
// Directives
import { FeatureFlagDirective } from './directives/feature-flag.directive';
var directives = [
    FeatureFlagDirective
];
var FeatureFlagsModule = /** @class */ (function () {
    function FeatureFlagsModule() {
    }
    FeatureFlagsModule.decorators = [
        { type: NgModule, args: [{
                    imports: __spread(modules),
                    declarations: __spread(directives),
                    exports: __spread(modules, directives)
                },] }
    ];
    return FeatureFlagsModule;
}());
export { FeatureFlagsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1mbGFncy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2ZlYXR1cmUtZmxhZ3MvIiwic291cmNlcyI6WyJsaWIvZmVhdHVyZS1mbGFncy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLFVBQVU7QUFDVixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV6RCxJQUFNLE9BQU8sR0FBRztJQUNkLGdCQUFnQjtDQUNqQixDQUFDO0FBRUYsYUFBYTtBQUNiLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTNFLElBQU0sVUFBVSxHQUFHO0lBQ2pCLG9CQUFvQjtDQUNyQixDQUFDO0FBRUY7SUFBQTtJQWNpQyxDQUFDOztnQkFkakMsUUFBUSxTQUFDO29CQUNSLE9BQU8sV0FDRixPQUFPLENBQ1g7b0JBRUQsWUFBWSxXQUNQLFVBQVUsQ0FDZDtvQkFFRCxPQUFPLFdBQ0YsT0FBTyxFQUNQLFVBQVUsQ0FDZDtpQkFDRjs7SUFDZ0MseUJBQUM7Q0FBQSxBQWRsQyxJQWNrQztTQUFyQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBNb2R1bGVzXG5pbXBvcnQgeyBGb3VuZGF0aW9uTW9kdWxlIH0gZnJvbSAnQGRhdGFnYXplci9mb3VuZGF0aW9uJztcblxuY29uc3QgbW9kdWxlcyA9IFtcbiAgRm91bmRhdGlvbk1vZHVsZVxuXTtcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IHsgRmVhdHVyZUZsYWdEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZmVhdHVyZS1mbGFnLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IGRpcmVjdGl2ZXMgPSBbXG4gIEZlYXR1cmVGbGFnRGlyZWN0aXZlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgLi4ubW9kdWxlc1xuICBdLFxuXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmRpcmVjdGl2ZXNcbiAgXSxcblxuICBleHBvcnRzOiBbXG4gICAgLi4ubW9kdWxlcyxcbiAgICAuLi5kaXJlY3RpdmVzXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZUZsYWdzTW9kdWxlIHt9XG4iXX0=