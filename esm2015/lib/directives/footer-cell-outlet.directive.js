import { CdkCellOutlet as CdkFooterCellOutlet } from '@angular/cdk/table';
import { Directive } from '@angular/core';
export class FooterCellOutletDirective extends CdkFooterCellOutlet {
}
FooterCellOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dgFooterCellOutlet]',
                providers: [
                    { provide: CdkFooterCellOutlet, useExisting: FooterCellOutletDirective }
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLWNlbGwtb3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2Zvb3Rlci1jZWxsLW91dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsSUFBSSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTMUMsTUFBTSxPQUFPLHlCQUEwQixTQUFRLG1CQUFtQjs7O1lBUGpFLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUVoQyxTQUFTLEVBQUU7b0JBQ1QsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLHlCQUF5QixFQUFFO2lCQUN6RTthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrQ2VsbE91dGxldCBhcyBDZGtGb290ZXJDZWxsT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGdGb290ZXJDZWxsT3V0bGV0XScsXG5cbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBDZGtGb290ZXJDZWxsT3V0bGV0LCB1c2VFeGlzdGluZzogRm9vdGVyQ2VsbE91dGxldERpcmVjdGl2ZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyQ2VsbE91dGxldERpcmVjdGl2ZSBleHRlbmRzIENka0Zvb3RlckNlbGxPdXRsZXQge31cbiJdfQ==