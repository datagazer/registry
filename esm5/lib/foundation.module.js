var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
import { NgModule } from '@angular/core';
// Modules
import { CommonModule } from '@angular/common';
var modules = [
    CommonModule
];
// Components
import { SurfaceComponent } from './components/surface/surface.component';
var components = [
    SurfaceComponent
];
var FoundationModule = /** @class */ (function () {
    function FoundationModule() {
    }
    FoundationModule = __decorate([
        NgModule({
            imports: __spread(modules),
            declarations: __spread(components),
            exports: __spread(components)
        })
    ], FoundationModule);
    return FoundationModule;
}());
export { FoundationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm91bmRhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvZm91bmRhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRS9DLFVBQVU7QUFDVixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsSUFBTSxPQUFPLEdBQW1CO0lBQzlCLFlBQVk7Q0FDYixDQUFDO0FBRUYsYUFBYTtBQUNiLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRTFFLElBQU0sVUFBVSxHQUFtQjtJQUNqQyxnQkFBZ0I7Q0FDakIsQ0FBQztBQWVGO0lBQUE7SUFBK0IsQ0FBQztJQUFuQixnQkFBZ0I7UUFiNUIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxXQUNGLE9BQU8sQ0FDWDtZQUVELFlBQVksV0FDUCxVQUFVLENBQ2Q7WUFFRCxPQUFPLFdBQ0YsVUFBVSxDQUNkO1NBQ0YsQ0FBQztPQUNXLGdCQUFnQixDQUFHO0lBQUQsdUJBQUM7Q0FBQSxBQUFoQyxJQUFnQztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBNb2R1bGVzXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5jb25zdCBtb2R1bGVzOiBUeXBlPG9iamVjdD5bXSA9IFtcbiAgQ29tbW9uTW9kdWxlXG5dO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBTdXJmYWNlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N1cmZhY2Uvc3VyZmFjZS5jb21wb25lbnQnO1xuXG5jb25zdCBjb21wb25lbnRzOiBUeXBlPG9iamVjdD5bXSA9IFtcbiAgU3VyZmFjZUNvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIC4uLm1vZHVsZXNcbiAgXSxcblxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5jb21wb25lbnRzXG4gIF0sXG5cbiAgZXhwb3J0czogW1xuICAgIC4uLmNvbXBvbmVudHNcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGb3VuZGF0aW9uTW9kdWxlIHt9XG4iXX0=