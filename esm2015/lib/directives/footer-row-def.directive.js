import { CdkFooterRowDef } from '@angular/cdk/table';
import { Directive, Input } from '@angular/core';
export class FooterRowDefDirective extends CdkFooterRowDef {
    constructor() {
        super(...arguments);
        this.sticky = false;
    }
}
FooterRowDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dgFooterRowDef]',
                providers: [
                    { provide: CdkFooterRowDef, useExisting: FooterRowDefDirective }
                ]
            },] }
];
FooterRowDefDirective.propDecorators = {
    columns: [{ type: Input, args: ['dgFooterRowDef',] }],
    sticky: [{ type: Input, args: ['dgFooterRowDefSticky',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLXJvdy1kZWYuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZm9vdGVyLXJvdy1kZWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVNqRCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsZUFBZTtJQVAxRDs7UUFZUyxXQUFNLEdBQVksS0FBSyxDQUFDO0lBQ2pDLENBQUM7OztZQWJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUU1QixTQUFTLEVBQUU7b0JBQ1QsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxxQkFBcUIsRUFBRTtpQkFDakU7YUFDRjs7O3NCQUVFLEtBQUssU0FBQyxnQkFBZ0I7cUJBR3RCLEtBQUssU0FBQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtGb290ZXJSb3dEZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGdGb290ZXJSb3dEZWZdJyxcblxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IENka0Zvb3RlclJvd0RlZiwgdXNlRXhpc3Rpbmc6IEZvb3RlclJvd0RlZkRpcmVjdGl2ZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyUm93RGVmRGlyZWN0aXZlIGV4dGVuZHMgQ2RrRm9vdGVyUm93RGVmIHtcbiAgQElucHV0KCdkZ0Zvb3RlclJvd0RlZicpXG4gIHB1YmxpYyBjb2x1bW5zITogSXRlcmFibGU8c3RyaW5nPjtcblxuICBASW5wdXQoJ2RnRm9vdGVyUm93RGVmU3RpY2t5JylcbiAgcHVibGljIHN0aWNreTogYm9vbGVhbiA9IGZhbHNlO1xufVxuIl19