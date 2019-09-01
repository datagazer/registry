var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { CdkTable } from '@angular/cdk/table';
import { Component, HostBinding, HostListener } from '@angular/core';
var TableComponent = /** @class */ (function (_super) {
    __extends(TableComponent, _super);
    function TableComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TableComponent.prototype, "gridTemplateColumns", {
        get: function () {
            var columns = Array.from(this._contentHeaderRowDefs.first.columns);
            return this._contentColumnDefs
                .filter(function (_a) {
                var column = _a.name;
                return columns.includes(column);
            })
                .map(function (_a) {
                var size = _a.size;
                return size;
            })
                .join(' ');
        },
        enumerable: true,
        configurable: true
    });
    TableComponent.prototype.updateStickyStyles = function () {
        this.updateStickyHeaderRowStyles();
        this.updateStickyFooterRowStyles();
        this.updateStickyColumnStyles();
    };
    TableComponent.prototype.ngAfterViewInit = function () {
        this.updateStickyStyles();
    };
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
    return TableComponent;
}(CdkTable));
export { TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFpQixTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUcvRjtJQVN1QyxrQ0FBVztJQVRsRDs7SUE4QkEsQ0FBQztJQXBCQyxzQkFDVywrQ0FBbUI7YUFEOUI7WUFFRSxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFbkUsT0FBUSxJQUFJLENBQUMsa0JBQW9EO2lCQUM5RCxNQUFNLENBQUMsVUFBQyxFQUFnQjtvQkFBZCxnQkFBWTtnQkFBTyxPQUFBLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQXhCLENBQXdCLENBQUM7aUJBQ3RELEdBQUcsQ0FBQyxVQUFDLEVBQVE7b0JBQU4sY0FBSTtnQkFBTyxPQUFBLElBQUk7WUFBSixDQUFJLENBQUM7aUJBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNmLENBQUM7OztPQUFBO0lBR00sMkNBQWtCLEdBRHpCO1FBRUUsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVNLHdDQUFlLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Z0JBN0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixvTkFBcUM7b0JBR3JDLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRTtxQkFDbkQ7O2lCQUNGOzs7c0NBRUUsV0FBVyxTQUFDLDJCQUEyQjtxQ0FVdkMsWUFBWSxTQUFDLGVBQWU7O0lBVS9CLHFCQUFDO0NBQUEsQUE5QkQsQ0FTdUMsUUFBUSxHQXFCOUM7U0FyQlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka1RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2x1bW5EZWZEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2NvbHVtbi1kZWYuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGVbZGctdGFibGVdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LnNjc3MnXSxcblxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IENka1RhYmxlLCB1c2VFeGlzdGluZzogVGFibGVDb21wb25lbnQgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50PFQ+IGV4dGVuZHMgQ2RrVGFibGU8VD4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zJylcbiAgcHVibGljIGdldCBncmlkVGVtcGxhdGVDb2x1bW5zKCk6IHN0cmluZyB7XG4gICAgbGV0IGNvbHVtbnMgPSBBcnJheS5mcm9tKHRoaXMuX2NvbnRlbnRIZWFkZXJSb3dEZWZzLmZpcnN0LmNvbHVtbnMpO1xuXG4gICAgcmV0dXJuICh0aGlzLl9jb250ZW50Q29sdW1uRGVmcyBhcyBRdWVyeUxpc3Q8Q29sdW1uRGVmRGlyZWN0aXZlPilcbiAgICAgIC5maWx0ZXIoKHsgbmFtZTogY29sdW1uIH0pID0+IGNvbHVtbnMuaW5jbHVkZXMoY29sdW1uKSlcbiAgICAgIC5tYXAoKHsgc2l6ZSB9KSA9PiBzaXplKVxuICAgICAgLmpvaW4oJyAnKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxuICBwdWJsaWMgdXBkYXRlU3RpY2t5U3R5bGVzKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlU3RpY2t5SGVhZGVyUm93U3R5bGVzKCk7XG4gICAgdGhpcy51cGRhdGVTdGlja3lGb290ZXJSb3dTdHlsZXMoKTtcbiAgICB0aGlzLnVwZGF0ZVN0aWNreUNvbHVtblN0eWxlcygpO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVN0aWNreVN0eWxlcygpO1xuICB9XG59XG4iXX0=