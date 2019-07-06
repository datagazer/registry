var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ContentRowDefDirective_1;
import { CdkRowDef as CdkContentRowDef } from '@angular/cdk/table';
import { Directive, Input } from '@angular/core';
let ContentRowDefDirective = ContentRowDefDirective_1 = class ContentRowDefDirective extends CdkContentRowDef {
    constructor() {
        super(...arguments);
        this.when = () => true;
    }
};
__decorate([
    Input('dgContentRowDefColumns'),
    __metadata("design:type", Object)
], ContentRowDefDirective.prototype, "columns", void 0);
__decorate([
    Input('dgContentRowDefWhen'),
    __metadata("design:type", Function)
], ContentRowDefDirective.prototype, "when", void 0);
ContentRowDefDirective = ContentRowDefDirective_1 = __decorate([
    Directive({
        selector: '[dgContentRowDef]',
        providers: [
            { provide: CdkContentRowDef, useExisting: ContentRowDefDirective_1 }
        ]
    })
], ContentRowDefDirective);
export { ContentRowDefDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1yb3ctZGVmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3RhYmxlL3Jvdy1kZWZzL2NvbnRlbnQtcm93LWRlZi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLElBQUksZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVNqRCxJQUFhLHNCQUFzQiw4QkFBbkMsTUFBYSxzQkFBMEIsU0FBUSxnQkFBbUI7SUFQbEU7O1FBWVMsU0FBSSxHQUEyQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDbkUsQ0FBQztDQUFBLENBQUE7QUFKQztJQURDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQzs7dURBQ0U7QUFHbEM7SUFEQyxLQUFLLENBQUMscUJBQXFCLENBQUM7O29EQUNvQztBQUx0RCxzQkFBc0I7SUFQbEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUU3QixTQUFTLEVBQUU7WUFDVCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsd0JBQXNCLEVBQUU7U0FDbkU7S0FDRixDQUFDO0dBQ1csc0JBQXNCLENBTWxDO1NBTlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrUm93RGVmIGFzIENka0NvbnRlbnRSb3dEZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGdDb250ZW50Um93RGVmXScsXG5cbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBDZGtDb250ZW50Um93RGVmLCB1c2VFeGlzdGluZzogQ29udGVudFJvd0RlZkRpcmVjdGl2ZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudFJvd0RlZkRpcmVjdGl2ZTxUPiBleHRlbmRzIENka0NvbnRlbnRSb3dEZWY8VD4ge1xuICBASW5wdXQoJ2RnQ29udGVudFJvd0RlZkNvbHVtbnMnKVxuICBwdWJsaWMgY29sdW1ucyE6IEl0ZXJhYmxlPHN0cmluZz47XG5cbiAgQElucHV0KCdkZ0NvbnRlbnRSb3dEZWZXaGVuJylcbiAgcHVibGljIHdoZW46IChpbmRleDogbnVtYmVyLCByb3dEYXRhOiBUKSA9PiBib29sZWFuID0gKCkgPT4gdHJ1ZTtcbn1cbiJdfQ==