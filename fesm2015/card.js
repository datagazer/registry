import { Component, NgModule } from '@angular/core';
import { FoundationModule } from '@datagazer/foundation';

class CardContentComponent {
}
CardContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'dg-card > dg-card-content',
                template: "<ng-content></ng-content>\n",
                styles: [":host{display:block;flex-grow:1;flex-shrink:1;padding:calc(var(--dg-layout--margins) * .5);font-family:var(--dg-typography--body-1--font-family);font-size:var(--dg-typography--body-1--font-size);line-height:var(--dg-typography--body-1--line-height);font-weight:var(--dg-typography--body-1--font-weight);text-transform:var(--dg-typography--body-1--text-transform);letter-spacing:var(--dg-typography--body-1--letter-spacing);color:var(--dg-theme--primary-text)}"]
            }] }
];

class CardFooterComponent {
}
CardFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'dg-card > dg-card-footer',
                template: "<ng-content></ng-content>\n",
                styles: [":host{display:block;flex-grow:0;flex-shrink:0;padding:calc(var(--dg-layout--margins) * .5);font-family:var(--dg-typography--body-2--font-family);font-size:var(--dg-typography--body-2--font-size);line-height:var(--dg-typography--body-2--line-height);font-weight:var(--dg-typography--body-2--font-weight);text-transform:var(--dg-typography--body-2--text-transform);letter-spacing:var(--dg-typography--body-2--letter-spacing);color:var(--dg-theme--on-surface)}"]
            }] }
];

class CardHeaderComponent {
}
CardHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'dg-card > dg-card-header',
                template: "<ng-content></ng-content>\n",
                styles: [":host{display:block;flex-grow:0;flex-shrink:0;padding:calc(var(--dg-layout--margins) * .5);font-family:var(--dg-typography--headline-6--font-family);font-size:var(--dg-typography--headline-6--font-size);line-height:var(--dg-typography--headline-6--line-height);font-weight:var(--dg-typography--headline-6--font-weight);text-transform:var(--dg-typography--headline-6--text-transform);letter-spacing:var(--dg-typography--headline-6--letter-spacing);color:var(--dg-theme--on-surface)}"]
            }] }
];

class CardComponent {
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'dg-card',
                template: "<ng-content select=\"dg-card-header\"></ng-content>\n<ng-content select=\"dg-card-content\"></ng-content>\n<ng-content select=\"dg-card-footer\"></ng-content>\n",
                styles: [":host{display:flex;flex-direction:column;flex-wrap:nowrap;padding:calc(var(--dg-layout--margins) * .5);border-radius:var(--dg-shape--medium-component);overflow:auto;background-color:var(--dg-theme--surface)}:host:not([dg-elevation]),:host[dg-elevation=\"0\"]{border:var(--dg-divider--on-surface)}"]
            }] }
];

const modules = [
    FoundationModule
];
const components = [
    CardContentComponent,
    CardFooterComponent,
    CardHeaderComponent,
    CardComponent
];
class CardModule {
}
CardModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...modules
                ],
                declarations: [
                    ...components
                ],
                exports: [
                    ...modules,
                    ...components
                ]
            },] }
];

// Components

/**
 * Generated bundle index. Do not edit.
 */

export { CardComponent, CardContentComponent, CardFooterComponent, CardHeaderComponent, CardModule };
//# sourceMappingURL=card.js.map
