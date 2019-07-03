var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
// Components
import * as Surface from './components/surface/surface.component';
const components = [
    Surface.SurfaceComponent
];
let FoundationModule = class FoundationModule {
};
FoundationModule = __decorate([
    NgModule({
        exports: [
            ...components
        ],
        declarations: [
            ...components
        ]
    })
], FoundationModule);
export { FoundationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm91bmRhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvZm91bmRhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUUvQyxhQUFhO0FBQ2IsT0FBTyxLQUFLLE9BQU8sTUFBTSx3Q0FBd0MsQ0FBQztBQUVsRSxNQUFNLFVBQVUsR0FBbUI7SUFDakMsT0FBTyxDQUFDLGdCQUFnQjtDQUN6QixDQUFDO0FBV0YsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7Q0FBRyxDQUFBO0FBQW5CLGdCQUFnQjtJQVQ1QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxHQUFHLFVBQVU7U0FDZDtRQUVELFlBQVksRUFBRTtZQUNaLEdBQUcsVUFBVTtTQUNkO0tBQ0YsQ0FBQztHQUNXLGdCQUFnQixDQUFHO1NBQW5CLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCAqIGFzIFN1cmZhY2UgZnJvbSAnLi9jb21wb25lbnRzL3N1cmZhY2Uvc3VyZmFjZS5jb21wb25lbnQnO1xuXG5jb25zdCBjb21wb25lbnRzOiBUeXBlPG9iamVjdD5bXSA9IFtcbiAgU3VyZmFjZS5TdXJmYWNlQ29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbXG4gICAgLi4uY29tcG9uZW50c1xuICBdLFxuXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHNcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGb3VuZGF0aW9uTW9kdWxlIHt9XG4iXX0=