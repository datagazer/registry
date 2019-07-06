var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let SurfaceComponent = class SurfaceComponent {
};
SurfaceComponent = __decorate([
    Component({
        selector: 'dg-surface',
        template: "<ng-content></ng-content>\n",
        styles: [":host{display:block;border-radius:var(--dg-shape--medium-radius);background-color:var(--dg-theme--background--card);color:var(--dg-theme--foreground--text);overflow:auto}"]
    })
], SurfaceComponent);
export { SurfaceComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VyZmFjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zdXJmYWNlL3N1cmZhY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPMUMsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7Q0FBRyxDQUFBO0FBQW5CLGdCQUFnQjtJQUw1QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0Qix1Q0FBdUM7O0tBRXhDLENBQUM7R0FDVyxnQkFBZ0IsQ0FBRztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGctc3VyZmFjZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdXJmYWNlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VyZmFjZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1cmZhY2VDb21wb25lbnQge31cbiJdfQ==