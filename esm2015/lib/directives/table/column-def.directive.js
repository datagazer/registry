var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ColumnDefDirective_1;
import { CdkColumnDef } from '@angular/cdk/table';
import { Directive, Input } from '@angular/core';
let ColumnDefDirective = ColumnDefDirective_1 = class ColumnDefDirective extends CdkColumnDef {
    constructor() {
        super(...arguments);
        this.sizing = 'auto';
        this.sticky = false;
        this.stickyEnd = false;
    }
};
__decorate([
    Input('dgColumnDef'),
    __metadata("design:type", String)
], ColumnDefDirective.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ColumnDefDirective.prototype, "sizing", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ColumnDefDirective.prototype, "sticky", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ColumnDefDirective.prototype, "stickyEnd", void 0);
ColumnDefDirective = ColumnDefDirective_1 = __decorate([
    Directive({
        selector: '[dgColumnDef]',
        providers: [
            { provide: CdkColumnDef, useExisting: ColumnDefDirective_1 }
        ]
    })
], ColumnDefDirective);
export { ColumnDefDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy90YWJsZS9jb2x1bW4tZGVmLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU2pELElBQWEsa0JBQWtCLDBCQUEvQixNQUFhLGtCQUFtQixTQUFRLFlBQVk7SUFQcEQ7O1FBWVMsV0FBTSxHQUFXLE1BQU0sQ0FBQztRQUd4QixXQUFNLEdBQVksS0FBSyxDQUFDO1FBR3hCLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFDcEMsQ0FBQztDQUFBLENBQUE7QUFWQztJQURDLEtBQUssQ0FBQyxhQUFhLENBQUM7O2dEQUNBO0FBR3JCO0lBREMsS0FBSyxFQUFFOztrREFDdUI7QUFHL0I7SUFEQyxLQUFLLEVBQUU7O2tEQUN1QjtBQUcvQjtJQURDLEtBQUssRUFBRTs7cURBQzBCO0FBWHZCLGtCQUFrQjtJQVA5QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZUFBZTtRQUV6QixTQUFTLEVBQUU7WUFDVCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLG9CQUFrQixFQUFFO1NBQzNEO0tBQ0YsQ0FBQztHQUNXLGtCQUFrQixDQVk5QjtTQVpZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0NvbHVtbkRlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkZ0NvbHVtbkRlZl0nLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogQ2RrQ29sdW1uRGVmLCB1c2VFeGlzdGluZzogQ29sdW1uRGVmRGlyZWN0aXZlIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb2x1bW5EZWZEaXJlY3RpdmUgZXh0ZW5kcyBDZGtDb2x1bW5EZWYge1xuICBASW5wdXQoJ2RnQ29sdW1uRGVmJylcbiAgcHVibGljIG5hbWUhOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNpemluZzogc3RyaW5nID0gJ2F1dG8nO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzdGlja3k6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc3RpY2t5RW5kOiBib29sZWFuID0gZmFsc2U7XG59XG4iXX0=