import { CdkRowDef as CdkContentRowDef } from '@angular/cdk/table';
import { Directive, Input } from '@angular/core';
export class ContentRowDefDirective extends CdkContentRowDef {
    constructor() {
        super(...arguments);
        this.when = () => true;
    }
}
ContentRowDefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dgContentRowDef]',
                providers: [
                    { provide: CdkContentRowDef, useExisting: ContentRowDefDirective }
                ]
            },] }
];
ContentRowDefDirective.propDecorators = {
    columns: [{ type: Input, args: ['dgContentRowDefColumns',] }],
    when: [{ type: Input, args: ['dgContentRowDefWhen',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1yb3ctZGVmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2NvbnRlbnQtcm93LWRlZi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsSUFBSSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU2pELE1BQU0sT0FBTyxzQkFBMEIsU0FBUSxnQkFBbUI7SUFQbEU7O1FBWVMsU0FBSSxHQUEyQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDbkUsQ0FBQzs7O1lBYkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBRTdCLFNBQVMsRUFBRTtvQkFDVCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsc0JBQXNCLEVBQUU7aUJBQ25FO2FBQ0Y7OztzQkFFRSxLQUFLLFNBQUMsd0JBQXdCO21CQUc5QixLQUFLLFNBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrUm93RGVmIGFzIENka0NvbnRlbnRSb3dEZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGdDb250ZW50Um93RGVmXScsXG5cbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBDZGtDb250ZW50Um93RGVmLCB1c2VFeGlzdGluZzogQ29udGVudFJvd0RlZkRpcmVjdGl2ZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudFJvd0RlZkRpcmVjdGl2ZTxUPiBleHRlbmRzIENka0NvbnRlbnRSb3dEZWY8VD4ge1xuICBASW5wdXQoJ2RnQ29udGVudFJvd0RlZkNvbHVtbnMnKVxuICBwdWJsaWMgY29sdW1ucyE6IEl0ZXJhYmxlPHN0cmluZz47XG5cbiAgQElucHV0KCdkZ0NvbnRlbnRSb3dEZWZXaGVuJylcbiAgcHVibGljIHdoZW46IChpbmRleDogbnVtYmVyLCByb3dEYXRhOiBUKSA9PiBib29sZWFuID0gKCkgPT4gdHJ1ZTtcbn1cbiJdfQ==