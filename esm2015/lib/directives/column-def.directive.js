import { CdkColumnDef } from '@angular/cdk/table';
import { Directive, Input } from '@angular/core';
export class ColumnDefDirective extends CdkColumnDef {
    constructor() {
        super(...arguments);
        this.size = 'auto';
        this.sticky = false;
        this.stickyEnd = false;
    }
}
ColumnDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dgColumnDef]',
                providers: [
                    { provide: CdkColumnDef, useExisting: ColumnDefDirective }
                ]
            },] }
];
ColumnDefDirective.propDecorators = {
    name: [{ type: Input, args: ['dgColumnDef',] }],
    size: [{ type: Input }],
    sticky: [{ type: Input }],
    stickyEnd: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9jb2x1bW4tZGVmLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTakQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFlBQVk7SUFQcEQ7O1FBWVMsU0FBSSxHQUFXLE1BQU0sQ0FBQztRQUd0QixXQUFNLEdBQVksS0FBSyxDQUFDO1FBR3hCLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFDcEMsQ0FBQzs7O1lBbkJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFFekIsU0FBUyxFQUFFO29CQUNULEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUU7aUJBQzNEO2FBQ0Y7OzttQkFFRSxLQUFLLFNBQUMsYUFBYTttQkFHbkIsS0FBSztxQkFHTCxLQUFLO3dCQUdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtDb2x1bW5EZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGdDb2x1bW5EZWZdJyxcblxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IENka0NvbHVtbkRlZiwgdXNlRXhpc3Rpbmc6IENvbHVtbkRlZkRpcmVjdGl2ZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29sdW1uRGVmRGlyZWN0aXZlIGV4dGVuZHMgQ2RrQ29sdW1uRGVmIHtcbiAgQElucHV0KCdkZ0NvbHVtbkRlZicpXG4gIHB1YmxpYyBuYW1lITogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaXplOiBzdHJpbmcgPSAnYXV0byc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHN0aWNreTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzdGlja3lFbmQ6IGJvb2xlYW4gPSBmYWxzZTtcbn1cbiJdfQ==