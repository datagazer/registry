var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
import { NgModule } from '@angular/core';
// Modules
import { FoundationModule } from '@datagazer/foundation';
var modules = [
    FoundationModule
];
// Components
import { ContentCellComponent } from './components/table/content-cell/content-cell.component';
import { ContentRowComponent } from './components/table/content-row/content-row.component';
import { FooterCellComponent } from './components/table/footer-cell/footer-cell.component';
import { FooterRowComponent } from './components/table/footer-row/footer-row.component';
import { HeaderCellComponent } from './components/table/header-cell/header-cell.component';
import { HeaderRowComponent } from './components/table/header-row/header-row.component';
import { TableComponent } from './components/table/table.component';
var components = [
    ContentCellComponent,
    ContentRowComponent,
    FooterCellComponent,
    FooterRowComponent,
    HeaderCellComponent,
    HeaderRowComponent,
    TableComponent
];
// Directives
import { ColumnDefDirective } from './directives/column-def.directive';
import { ContentCellDefDirective } from './directives/content-cell-def.directive';
import { ContentCellOutletDirective } from './directives/content-cell-outlet.directive';
import { ContentRowDefDirective } from './directives/content-row-def.directive';
import { ContentRowOutletDirective } from './directives/content-row-outlet.directive';
import { FooterCellDefDirective } from './directives/footer-cell-def.directive';
import { FooterCellOutletDirective } from './directives/footer-cell-outlet.directive';
import { FooterRowDefDirective } from './directives/footer-row-def.directive';
import { FooterRowOutletDirective } from './directives/footer-row-outlet.directive';
import { HeaderCellDefDirective } from './directives/header-cell-def.directive';
import { HeaderCellOutletDirective } from './directives/header-cell-outlet.directive';
import { HeaderRowDefDirective } from './directives/header-row-def.directive';
import { HeaderRowOutletDirective } from './directives/header-row-outlet.directive';
var directives = [
    ColumnDefDirective,
    ContentCellDefDirective,
    ContentCellOutletDirective,
    ContentRowDefDirective,
    ContentRowOutletDirective,
    FooterCellDefDirective,
    FooterCellOutletDirective,
    FooterRowDefDirective,
    FooterRowOutletDirective,
    HeaderCellDefDirective,
    HeaderCellOutletDirective,
    HeaderRowDefDirective,
    HeaderRowOutletDirective
];
var DataTableModule = /** @class */ (function () {
    function DataTableModule() {
    }
    DataTableModule.decorators = [
        { type: NgModule, args: [{
                    imports: __spread(modules),
                    declarations: __spread(components, directives),
                    exports: __spread(modules, components, directives)
                },] }
    ];
    return DataTableModule;
}());
export { DataTableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS10YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLFVBQVU7QUFDVixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV6RCxJQUFNLE9BQU8sR0FBRztJQUNkLGdCQUFnQjtDQUNqQixDQUFDO0FBRUYsYUFBYTtBQUNiLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVwRSxJQUFNLFVBQVUsR0FBRztJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0NBQ2YsQ0FBQztBQUVGLGFBQWE7QUFDYixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNoRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNoRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNoRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUVwRixJQUFNLFVBQVUsR0FBRztJQUNqQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQix3QkFBd0I7Q0FDekIsQ0FBQztBQUVGO0lBQUE7SUFnQjhCLENBQUM7O2dCQWhCOUIsUUFBUSxTQUFDO29CQUNSLE9BQU8sV0FDRixPQUFPLENBQ1g7b0JBRUQsWUFBWSxXQUNQLFVBQVUsRUFDVixVQUFVLENBQ2Q7b0JBRUQsT0FBTyxXQUNGLE9BQU8sRUFDUCxVQUFVLEVBQ1YsVUFBVSxDQUNkO2lCQUNGOztJQUM2QixzQkFBQztDQUFBLEFBaEIvQixJQWdCK0I7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIE1vZHVsZXNcbmltcG9ydCB7IEZvdW5kYXRpb25Nb2R1bGUgfSBmcm9tICdAZGF0YWdhemVyL2ZvdW5kYXRpb24nO1xuXG5jb25zdCBtb2R1bGVzID0gW1xuICBGb3VuZGF0aW9uTW9kdWxlXG5dO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBDb250ZW50Q2VsbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWJsZS9jb250ZW50LWNlbGwvY29udGVudC1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250ZW50Um93Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlL2NvbnRlbnQtcm93L2NvbnRlbnQtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb290ZXJDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlL2Zvb3Rlci1jZWxsL2Zvb3Rlci1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb290ZXJSb3dDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUvZm9vdGVyLXJvdy9mb290ZXItcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWFkZXJDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlL2hlYWRlci1jZWxsL2hlYWRlci1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWFkZXJSb3dDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUvaGVhZGVyLXJvdy9oZWFkZXItcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQnO1xuXG5jb25zdCBjb21wb25lbnRzID0gW1xuICBDb250ZW50Q2VsbENvbXBvbmVudCxcbiAgQ29udGVudFJvd0NvbXBvbmVudCxcbiAgRm9vdGVyQ2VsbENvbXBvbmVudCxcbiAgRm9vdGVyUm93Q29tcG9uZW50LFxuICBIZWFkZXJDZWxsQ29tcG9uZW50LFxuICBIZWFkZXJSb3dDb21wb25lbnQsXG4gIFRhYmxlQ29tcG9uZW50XG5dO1xuXG4vLyBEaXJlY3RpdmVzXG5pbXBvcnQgeyBDb2x1bW5EZWZEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY29sdW1uLWRlZi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29udGVudENlbGxEZWZEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY29udGVudC1jZWxsLWRlZi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29udGVudENlbGxPdXRsZXREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY29udGVudC1jZWxsLW91dGxldC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29udGVudFJvd0RlZkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jb250ZW50LXJvdy1kZWYuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbnRlbnRSb3dPdXRsZXREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY29udGVudC1yb3ctb3V0bGV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGb290ZXJDZWxsRGVmRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Zvb3Rlci1jZWxsLWRlZi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRm9vdGVyQ2VsbE91dGxldERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mb290ZXItY2VsbC1vdXRsZXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZvb3RlclJvd0RlZkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mb290ZXItcm93LWRlZi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRm9vdGVyUm93T3V0bGV0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Zvb3Rlci1yb3ctb3V0bGV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBIZWFkZXJDZWxsRGVmRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2hlYWRlci1jZWxsLWRlZi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSGVhZGVyQ2VsbE91dGxldERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9oZWFkZXItY2VsbC1vdXRsZXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEhlYWRlclJvd0RlZkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9oZWFkZXItcm93LWRlZi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSGVhZGVyUm93T3V0bGV0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2hlYWRlci1yb3ctb3V0bGV0LmRpcmVjdGl2ZSc7XG5cbmNvbnN0IGRpcmVjdGl2ZXMgPSBbXG4gIENvbHVtbkRlZkRpcmVjdGl2ZSxcbiAgQ29udGVudENlbGxEZWZEaXJlY3RpdmUsXG4gIENvbnRlbnRDZWxsT3V0bGV0RGlyZWN0aXZlLFxuICBDb250ZW50Um93RGVmRGlyZWN0aXZlLFxuICBDb250ZW50Um93T3V0bGV0RGlyZWN0aXZlLFxuICBGb290ZXJDZWxsRGVmRGlyZWN0aXZlLFxuICBGb290ZXJDZWxsT3V0bGV0RGlyZWN0aXZlLFxuICBGb290ZXJSb3dEZWZEaXJlY3RpdmUsXG4gIEZvb3RlclJvd091dGxldERpcmVjdGl2ZSxcbiAgSGVhZGVyQ2VsbERlZkRpcmVjdGl2ZSxcbiAgSGVhZGVyQ2VsbE91dGxldERpcmVjdGl2ZSxcbiAgSGVhZGVyUm93RGVmRGlyZWN0aXZlLFxuICBIZWFkZXJSb3dPdXRsZXREaXJlY3RpdmVcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICAuLi5tb2R1bGVzXG4gIF0sXG5cbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uY29tcG9uZW50cyxcbiAgICAuLi5kaXJlY3RpdmVzXG4gIF0sXG5cbiAgZXhwb3J0czogW1xuICAgIC4uLm1vZHVsZXMsXG4gICAgLi4uY29tcG9uZW50cyxcbiAgICAuLi5kaXJlY3RpdmVzXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlTW9kdWxlIHt9XG4iXX0=