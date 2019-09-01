import { DataRowOutlet as ContentRowOutlet } from '@angular/cdk/table';
import { Directive } from '@angular/core';
export class ContentRowOutletDirective extends ContentRowOutlet {
}
ContentRowOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dgContentRowOutlet]',
                providers: [
                    { provide: ContentRowOutlet, useExisting: ContentRowOutletDirective }
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1yb3ctb3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2NvbnRlbnQtcm93LW91dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsSUFBSSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTMUMsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGdCQUFnQjs7O1lBUDlELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUVoQyxTQUFTLEVBQUU7b0JBQ1QsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLHlCQUF5QixFQUFFO2lCQUN0RTthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVJvd091dGxldCBhcyBDb250ZW50Um93T3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGdDb250ZW50Um93T3V0bGV0XScsXG5cbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBDb250ZW50Um93T3V0bGV0LCB1c2VFeGlzdGluZzogQ29udGVudFJvd091dGxldERpcmVjdGl2ZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudFJvd091dGxldERpcmVjdGl2ZSBleHRlbmRzIENvbnRlbnRSb3dPdXRsZXQge31cbiJdfQ==