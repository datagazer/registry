import { CdkCellOutlet as CdkHeaderCellOutlet } from '@angular/cdk/table';
import { Directive } from '@angular/core';
export class HeaderCellOutletDirective extends CdkHeaderCellOutlet {
}
HeaderCellOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dgHeaderCellOutlet]',
                providers: [
                    { provide: CdkHeaderCellOutlet, useExisting: HeaderCellOutletDirective }
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWNlbGwtb3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2hlYWRlci1jZWxsLW91dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsSUFBSSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTMUMsTUFBTSxPQUFPLHlCQUEwQixTQUFRLG1CQUFtQjs7O1lBUGpFLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUVoQyxTQUFTLEVBQUU7b0JBQ1QsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLHlCQUF5QixFQUFFO2lCQUN6RTthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrQ2VsbE91dGxldCBhcyBDZGtIZWFkZXJDZWxsT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGdIZWFkZXJDZWxsT3V0bGV0XScsXG5cbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBDZGtIZWFkZXJDZWxsT3V0bGV0LCB1c2VFeGlzdGluZzogSGVhZGVyQ2VsbE91dGxldERpcmVjdGl2ZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ2VsbE91dGxldERpcmVjdGl2ZSBleHRlbmRzIENka0hlYWRlckNlbGxPdXRsZXQge31cbiJdfQ==