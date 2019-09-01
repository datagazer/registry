import { HeaderRowOutlet } from '@angular/cdk/table';
import { Directive } from '@angular/core';
export class HeaderRowOutletDirective extends HeaderRowOutlet {
}
HeaderRowOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dgHeaderRowOutlet]',
                providers: [
                    { provide: HeaderRowOutlet, useExisting: HeaderRowOutletDirective }
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXJvdy1vdXRsZXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvaGVhZGVyLXJvdy1vdXRsZXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzFDLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxlQUFlOzs7WUFQNUQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBRS9CLFNBQVMsRUFBRTtvQkFDVCxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLHdCQUF3QixFQUFFO2lCQUNwRTthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVhZGVyUm93T3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGdIZWFkZXJSb3dPdXRsZXRdJyxcblxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IEhlYWRlclJvd091dGxldCwgdXNlRXhpc3Rpbmc6IEhlYWRlclJvd091dGxldERpcmVjdGl2ZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyUm93T3V0bGV0RGlyZWN0aXZlIGV4dGVuZHMgSGVhZGVyUm93T3V0bGV0IHt9XG4iXX0=