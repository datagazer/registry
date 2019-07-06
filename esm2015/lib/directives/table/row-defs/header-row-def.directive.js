var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var HeaderRowDefDirective_1;
import { CdkHeaderRowDef } from '@angular/cdk/table';
import { Directive, Input } from '@angular/core';
let HeaderRowDefDirective = HeaderRowDefDirective_1 = class HeaderRowDefDirective extends CdkHeaderRowDef {
    constructor() {
        super(...arguments);
        this.sticky = false;
    }
};
__decorate([
    Input('dgHeaderRowDef'),
    __metadata("design:type", Object)
], HeaderRowDefDirective.prototype, "columns", void 0);
__decorate([
    Input('dgHeaderRowDefSticky'),
    __metadata("design:type", Boolean)
], HeaderRowDefDirective.prototype, "sticky", void 0);
HeaderRowDefDirective = HeaderRowDefDirective_1 = __decorate([
    Directive({
        selector: '[dgHeaderRowDef]',
        providers: [
            { provide: CdkHeaderRowDef, useExisting: HeaderRowDefDirective_1 }
        ]
    })
], HeaderRowDefDirective);
export { HeaderRowDefDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXJvdy1kZWYuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvdGFibGUvcm93LWRlZnMvaGVhZGVyLXJvdy1kZWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTakQsSUFBYSxxQkFBcUIsNkJBQWxDLE1BQWEscUJBQXNCLFNBQVEsZUFBZTtJQVAxRDs7UUFZUyxXQUFNLEdBQVksS0FBSyxDQUFDO0lBQ2pDLENBQUM7Q0FBQSxDQUFBO0FBSkM7SUFEQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7O3NEQUNVO0FBR2xDO0lBREMsS0FBSyxDQUFDLHNCQUFzQixDQUFDOztxREFDQztBQUxwQixxQkFBcUI7SUFQakMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUU1QixTQUFTLEVBQUU7WUFDVCxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLHVCQUFxQixFQUFFO1NBQ2pFO0tBQ0YsQ0FBQztHQUNXLHFCQUFxQixDQU1qQztTQU5ZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0hlYWRlclJvd0RlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkZ0hlYWRlclJvd0RlZl0nLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogQ2RrSGVhZGVyUm93RGVmLCB1c2VFeGlzdGluZzogSGVhZGVyUm93RGVmRGlyZWN0aXZlIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJSb3dEZWZEaXJlY3RpdmUgZXh0ZW5kcyBDZGtIZWFkZXJSb3dEZWYge1xuICBASW5wdXQoJ2RnSGVhZGVyUm93RGVmJylcbiAgcHVibGljIGNvbHVtbnMhOiBJdGVyYWJsZTxzdHJpbmc+O1xuXG4gIEBJbnB1dCgnZGdIZWFkZXJSb3dEZWZTdGlja3knKVxuICBwdWJsaWMgc3RpY2t5OiBib29sZWFuID0gZmFsc2U7XG59XG4iXX0=