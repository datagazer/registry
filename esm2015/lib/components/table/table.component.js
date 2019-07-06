var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TableComponent_1;
import { CdkTable } from '@angular/cdk/table';
import { Component, HostBinding, HostListener } from '@angular/core';
let TableComponent = TableComponent_1 = class TableComponent extends CdkTable {
    get gridTemplateColumns() {
        let columnDefs = this._contentColumnDefs;
        if (columnDefs) {
            return columnDefs.map(({ sizing }) => sizing).join(' ');
        }
        return 'none';
    }
    updateStickyColumnStyles() {
        super.updateStickyColumnStyles();
    }
};
__decorate([
    HostBinding('style.grid-template-columns'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], TableComponent.prototype, "gridTemplateColumns", null);
__decorate([
    HostListener('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TableComponent.prototype, "updateStickyColumnStyles", null);
TableComponent = TableComponent_1 = __decorate([
    Component({
        selector: 'table[dg-table]',
        template: "<ng-container select=\"caption\"></ng-container>\n\n<ng-container dgHeaderRowOutlet></ng-container>\n<ng-container dgContentRowOutlet></ng-container>\n<ng-container dgFooterRowOutlet></ng-container>\n",
        providers: [
            { provide: CdkTable, useExisting: TableComponent_1 }
        ],
        styles: [":host{--dg-data-table--row-height:calc(var(--dg-layout-grid--gutters) * 2);--dg-data-table--column-spacing:var(--dg-layout-grid--gutters);--dg-data-table--divider:1px solid var(--dg-theme--foreground--divider);display:grid;grid-auto-rows:1fr}::ng-deep tbody,::ng-deep tfoot,::ng-deep thead{display:contents}"]
    })
], TableComponent);
export { TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBWWhGLElBQWEsY0FBYyxzQkFBM0IsTUFBYSxjQUFrQixTQUFRLFFBQVc7SUFFaEQsSUFBVyxtQkFBbUI7UUFDNUIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFtRCxDQUFDO1FBRTFFLElBQUksVUFBVSxFQUFFO1lBQ2QsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pEO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUdNLHdCQUF3QjtRQUM3QixLQUFLLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0NBQ0YsQ0FBQTtBQWRDO0lBREMsV0FBVyxDQUFDLDZCQUE2QixDQUFDOzs7eURBUzFDO0FBR0Q7SUFEQyxZQUFZLENBQUMsZUFBZSxDQUFDOzs7OzhEQUc3QjtBQWZVLGNBQWM7SUFUMUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixvTkFBcUM7UUFHckMsU0FBUyxFQUFFO1lBQ1QsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxnQkFBYyxFQUFFO1NBQ25EOztLQUNGLENBQUM7R0FDVyxjQUFjLENBZ0IxQjtTQWhCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrVGFibGUgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbHVtbkRlZkRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdGFibGUvY29sdW1uLWRlZi5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZVtkZy10YWJsZV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc2NzcyddLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogQ2RrVGFibGUsIHVzZUV4aXN0aW5nOiBUYWJsZUNvbXBvbmVudCB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQ8VD4gZXh0ZW5kcyBDZGtUYWJsZTxUPiB7XG4gIEBIb3N0QmluZGluZygnc3R5bGUuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJylcbiAgcHVibGljIGdldCBncmlkVGVtcGxhdGVDb2x1bW5zKCk6IHN0cmluZyB7XG4gICAgbGV0IGNvbHVtbkRlZnMgPSB0aGlzLl9jb250ZW50Q29sdW1uRGVmcyBhcyBRdWVyeUxpc3Q8Q29sdW1uRGVmRGlyZWN0aXZlPjtcblxuICAgIGlmIChjb2x1bW5EZWZzKSB7XG4gICAgICByZXR1cm4gY29sdW1uRGVmcy5tYXAoKHsgc2l6aW5nIH0pID0+IHNpemluZykuam9pbignICcpO1xuICAgIH1cblxuICAgIHJldHVybiAnbm9uZSc7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcbiAgcHVibGljIHVwZGF0ZVN0aWNreUNvbHVtblN0eWxlcygpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGVTdGlja3lDb2x1bW5TdHlsZXMoKTtcbiAgfVxufVxuIl19