import { CdkHeaderRowDef } from '@angular/cdk/table';
import { Directive, Input } from '@angular/core';
export class HeaderRowDefDirective extends CdkHeaderRowDef {
    constructor() {
        super(...arguments);
        this.sticky = false;
    }
}
HeaderRowDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dgHeaderRowDef]',
                providers: [
                    { provide: CdkHeaderRowDef, useExisting: HeaderRowDefDirective }
                ]
            },] }
];
HeaderRowDefDirective.propDecorators = {
    columns: [{ type: Input, args: ['dgHeaderRowDef',] }],
    sticky: [{ type: Input, args: ['dgHeaderRowDefSticky',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXJvdy1kZWYuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvaGVhZGVyLXJvdy1kZWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVNqRCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsZUFBZTtJQVAxRDs7UUFZUyxXQUFNLEdBQVksS0FBSyxDQUFDO0lBQ2pDLENBQUM7OztZQWJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUU1QixTQUFTLEVBQUU7b0JBQ1QsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxxQkFBcUIsRUFBRTtpQkFDakU7YUFDRjs7O3NCQUVFLEtBQUssU0FBQyxnQkFBZ0I7cUJBR3RCLEtBQUssU0FBQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtIZWFkZXJSb3dEZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGdIZWFkZXJSb3dEZWZdJyxcblxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IENka0hlYWRlclJvd0RlZiwgdXNlRXhpc3Rpbmc6IEhlYWRlclJvd0RlZkRpcmVjdGl2ZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyUm93RGVmRGlyZWN0aXZlIGV4dGVuZHMgQ2RrSGVhZGVyUm93RGVmIHtcbiAgQElucHV0KCdkZ0hlYWRlclJvd0RlZicpXG4gIHB1YmxpYyBjb2x1bW5zITogSXRlcmFibGU8c3RyaW5nPjtcblxuICBASW5wdXQoJ2RnSGVhZGVyUm93RGVmU3RpY2t5JylcbiAgcHVibGljIHN0aWNreTogYm9vbGVhbiA9IGZhbHNlO1xufVxuIl19