var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FooterCellOutletDirective_1;
import { CdkCellOutlet as CdkFooterCellOutlet } from '@angular/cdk/table';
import { Directive } from '@angular/core';
let FooterCellOutletDirective = FooterCellOutletDirective_1 = class FooterCellOutletDirective extends CdkFooterCellOutlet {
};
FooterCellOutletDirective = FooterCellOutletDirective_1 = __decorate([
    Directive({
        selector: '[dgFooterCellOutlet]',
        providers: [
            { provide: CdkFooterCellOutlet, useExisting: FooterCellOutletDirective_1 }
        ]
    })
], FooterCellOutletDirective);
export { FooterCellOutletDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLWNlbGwtb3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3RhYmxlL2NlbGwtb3V0bGV0cy9mb290ZXItY2VsbC1vdXRsZXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxJQUFJLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVMxQyxJQUFhLHlCQUF5QixpQ0FBdEMsTUFBYSx5QkFBMEIsU0FBUSxtQkFBbUI7Q0FBRyxDQUFBO0FBQXhELHlCQUF5QjtJQVByQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsc0JBQXNCO1FBRWhDLFNBQVMsRUFBRTtZQUNULEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSwyQkFBeUIsRUFBRTtTQUN6RTtLQUNGLENBQUM7R0FDVyx5QkFBeUIsQ0FBK0I7U0FBeEQseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrQ2VsbE91dGxldCBhcyBDZGtGb290ZXJDZWxsT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGdGb290ZXJDZWxsT3V0bGV0XScsXG5cbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBDZGtGb290ZXJDZWxsT3V0bGV0LCB1c2VFeGlzdGluZzogRm9vdGVyQ2VsbE91dGxldERpcmVjdGl2ZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyQ2VsbE91dGxldERpcmVjdGl2ZSBleHRlbmRzIENka0Zvb3RlckNlbGxPdXRsZXQge31cbiJdfQ==