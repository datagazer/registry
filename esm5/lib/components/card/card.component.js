import { Component } from '@angular/core';
var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dg-card',
                    template: "<ng-content select=\"dg-card-header\"></ng-content>\n<ng-content select=\"dg-card-content\"></ng-content>\n<ng-content select=\"dg-card-footer\"></ng-content>\n",
                    styles: [":host{display:flex;flex-direction:column;flex-wrap:nowrap;padding:calc(var(--dg-layout--margins) * .5);border-radius:var(--dg-shape--medium-component);overflow:auto;background-color:var(--dg-theme--surface)}:host:not([dg-elevation]),:host[dg-elevation=\"0\"]{border:var(--dg-divider--on-surface)}"]
                }] }
    ];
    return CardComponent;
}());
export { CardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2NhcmQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUM7SUFBQTtJQUs0QixDQUFDOztnQkFMNUIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQiw0S0FBb0M7O2lCQUVyQzs7SUFDMkIsb0JBQUM7Q0FBQSxBQUw3QixJQUs2QjtTQUFoQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RnLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcmQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkQ29tcG9uZW50IHt9XG4iXX0=