import { Component } from '@angular/core';
export class CardComponent {
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'dg-card',
                template: "<ng-content select=\"dg-card-header\"></ng-content>\n<ng-content select=\"dg-card-content\"></ng-content>\n<ng-content select=\"dg-card-footer\"></ng-content>\n",
                styles: [":host{display:flex;flex-direction:column;flex-wrap:nowrap;padding:calc(var(--dg-layout--margins) * .5);border-radius:var(--dg-shape--medium-component);overflow:auto;background-color:var(--dg-theme--surface)}:host:not([dg-elevation]),:host[dg-elevation=\"0\"]{border:var(--dg-divider--on-surface)}"]
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2NhcmQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPMUMsTUFBTSxPQUFPLGFBQWE7OztZQUx6QixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLDRLQUFvQzs7YUFFckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGctY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQge31cbiJdfQ==