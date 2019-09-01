import { CdkTable } from '@angular/cdk/table';
import { Component, HostBinding, HostListener } from '@angular/core';
export class TableComponent extends CdkTable {
    get gridTemplateColumns() {
        let columns = Array.from(this._contentHeaderRowDefs.first.columns);
        return this._contentColumnDefs
            .filter(({ name: column }) => columns.includes(column))
            .map(({ size }) => size)
            .join(' ');
    }
    updateStickyStyles() {
        this.updateStickyHeaderRowStyles();
        this.updateStickyFooterRowStyles();
        this.updateStickyColumnStyles();
    }
    ngAfterViewInit() {
        this.updateStickyStyles();
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'table[dg-table]',
                template: "<ng-container select=\"caption\"></ng-container>\n\n<ng-container dgHeaderRowOutlet></ng-container>\n<ng-container dgContentRowOutlet></ng-container>\n<ng-container dgFooterRowOutlet></ng-container>\n",
                providers: [
                    { provide: CdkTable, useExisting: TableComponent }
                ],
                styles: [":host{display:grid;border-radius:var(--dg-shape--medium-component);overflow:auto;background-color:var(--dg-theme--surface)}:host:not([dg-elevation]),:host[dg-elevation=\"0\"]{border:var(--dg-divider--on-surface)}::ng-deep tbody,::ng-deep tfoot,::ng-deep thead{display:contents}"]
            }] }
];
TableComponent.propDecorators = {
    gridTemplateColumns: [{ type: HostBinding, args: ['style.gridTemplateColumns',] }],
    updateStickyStyles: [{ type: HostListener, args: ['window:resize',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQWlCLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBWS9GLE1BQU0sT0FBTyxjQUFrQixTQUFRLFFBQVc7SUFDaEQsSUFDVyxtQkFBbUI7UUFDNUIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRW5FLE9BQVEsSUFBSSxDQUFDLGtCQUFvRDthQUM5RCxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN0RCxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7YUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUdNLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRU0sZUFBZTtRQUNwQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7WUE3QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLG9OQUFxQztnQkFHckMsU0FBUyxFQUFFO29CQUNULEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFO2lCQUNuRDs7YUFDRjs7O2tDQUVFLFdBQVcsU0FBQywyQkFBMkI7aUNBVXZDLFlBQVksU0FBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrVGFibGUgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbHVtbkRlZkRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvY29sdW1uLWRlZi5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZVtkZy10YWJsZV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc2NzcyddLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogQ2RrVGFibGUsIHVzZUV4aXN0aW5nOiBUYWJsZUNvbXBvbmVudCB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQ8VD4gZXh0ZW5kcyBDZGtUYWJsZTxUPiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMnKVxuICBwdWJsaWMgZ2V0IGdyaWRUZW1wbGF0ZUNvbHVtbnMoKTogc3RyaW5nIHtcbiAgICBsZXQgY29sdW1ucyA9IEFycmF5LmZyb20odGhpcy5fY29udGVudEhlYWRlclJvd0RlZnMuZmlyc3QuY29sdW1ucyk7XG5cbiAgICByZXR1cm4gKHRoaXMuX2NvbnRlbnRDb2x1bW5EZWZzIGFzIFF1ZXJ5TGlzdDxDb2x1bW5EZWZEaXJlY3RpdmU+KVxuICAgICAgLmZpbHRlcigoeyBuYW1lOiBjb2x1bW4gfSkgPT4gY29sdW1ucy5pbmNsdWRlcyhjb2x1bW4pKVxuICAgICAgLm1hcCgoeyBzaXplIH0pID0+IHNpemUpXG4gICAgICAuam9pbignICcpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpXG4gIHB1YmxpYyB1cGRhdGVTdGlja3lTdHlsZXMoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVTdGlja3lIZWFkZXJSb3dTdHlsZXMoKTtcbiAgICB0aGlzLnVwZGF0ZVN0aWNreUZvb3RlclJvd1N0eWxlcygpO1xuICAgIHRoaXMudXBkYXRlU3RpY2t5Q29sdW1uU3R5bGVzKCk7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlU3RpY2t5U3R5bGVzKCk7XG4gIH1cbn1cbiJdfQ==