import { NgModule } from '@angular/core';
// Modules
import { FoundationModule } from '@datagazer/foundation';
const modules = [
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
const components = [
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
const directives = [
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
export class DataTableModule {
}
DataTableModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...modules
                ],
                declarations: [
                    ...components,
                    ...directives
                ],
                exports: [
                    ...modules,
                    ...components,
                    ...directives
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS10YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxVQUFVO0FBQ1YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFekQsTUFBTSxPQUFPLEdBQUc7SUFDZCxnQkFBZ0I7Q0FDakIsQ0FBQztBQUVGLGFBQWE7QUFDYixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFcEUsTUFBTSxVQUFVLEdBQUc7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztDQUNmLENBQUM7QUFFRixhQUFhO0FBQ2IsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFcEYsTUFBTSxVQUFVLEdBQUc7SUFDakIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsd0JBQXdCO0NBQ3pCLENBQUM7QUFrQkYsTUFBTSxPQUFPLGVBQWU7OztZQWhCM0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxHQUFHLE9BQU87aUJBQ1g7Z0JBRUQsWUFBWSxFQUFFO29CQUNaLEdBQUcsVUFBVTtvQkFDYixHQUFHLFVBQVU7aUJBQ2Q7Z0JBRUQsT0FBTyxFQUFFO29CQUNQLEdBQUcsT0FBTztvQkFDVixHQUFHLFVBQVU7b0JBQ2IsR0FBRyxVQUFVO2lCQUNkO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBNb2R1bGVzXG5pbXBvcnQgeyBGb3VuZGF0aW9uTW9kdWxlIH0gZnJvbSAnQGRhdGFnYXplci9mb3VuZGF0aW9uJztcblxuY29uc3QgbW9kdWxlcyA9IFtcbiAgRm91bmRhdGlvbk1vZHVsZVxuXTtcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgQ29udGVudENlbGxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUvY29udGVudC1jZWxsL2NvbnRlbnQtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGVudFJvd0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWJsZS9jb250ZW50LXJvdy9jb250ZW50LXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9vdGVyQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWJsZS9mb290ZXItY2VsbC9mb290ZXItY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9vdGVyUm93Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlL2Zvb3Rlci1yb3cvZm9vdGVyLXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVhZGVyQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWJsZS9oZWFkZXItY2VsbC9oZWFkZXItY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVhZGVyUm93Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlL2hlYWRlci1yb3cvaGVhZGVyLXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50JztcblxuY29uc3QgY29tcG9uZW50cyA9IFtcbiAgQ29udGVudENlbGxDb21wb25lbnQsXG4gIENvbnRlbnRSb3dDb21wb25lbnQsXG4gIEZvb3RlckNlbGxDb21wb25lbnQsXG4gIEZvb3RlclJvd0NvbXBvbmVudCxcbiAgSGVhZGVyQ2VsbENvbXBvbmVudCxcbiAgSGVhZGVyUm93Q29tcG9uZW50LFxuICBUYWJsZUNvbXBvbmVudFxuXTtcblxuLy8gRGlyZWN0aXZlc1xuaW1wb3J0IHsgQ29sdW1uRGVmRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NvbHVtbi1kZWYuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbnRlbnRDZWxsRGVmRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NvbnRlbnQtY2VsbC1kZWYuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbnRlbnRDZWxsT3V0bGV0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NvbnRlbnQtY2VsbC1vdXRsZXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbnRlbnRSb3dEZWZEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY29udGVudC1yb3ctZGVmLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb250ZW50Um93T3V0bGV0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2NvbnRlbnQtcm93LW91dGxldC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRm9vdGVyQ2VsbERlZkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mb290ZXItY2VsbC1kZWYuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZvb3RlckNlbGxPdXRsZXREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm9vdGVyLWNlbGwtb3V0bGV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGb290ZXJSb3dEZWZEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm9vdGVyLXJvdy1kZWYuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZvb3RlclJvd091dGxldERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mb290ZXItcm93LW91dGxldC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSGVhZGVyQ2VsbERlZkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9oZWFkZXItY2VsbC1kZWYuZGlyZWN0aXZlJztcbmltcG9ydCB7IEhlYWRlckNlbGxPdXRsZXREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvaGVhZGVyLWNlbGwtb3V0bGV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBIZWFkZXJSb3dEZWZEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvaGVhZGVyLXJvdy1kZWYuZGlyZWN0aXZlJztcbmltcG9ydCB7IEhlYWRlclJvd091dGxldERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9oZWFkZXItcm93LW91dGxldC5kaXJlY3RpdmUnO1xuXG5jb25zdCBkaXJlY3RpdmVzID0gW1xuICBDb2x1bW5EZWZEaXJlY3RpdmUsXG4gIENvbnRlbnRDZWxsRGVmRGlyZWN0aXZlLFxuICBDb250ZW50Q2VsbE91dGxldERpcmVjdGl2ZSxcbiAgQ29udGVudFJvd0RlZkRpcmVjdGl2ZSxcbiAgQ29udGVudFJvd091dGxldERpcmVjdGl2ZSxcbiAgRm9vdGVyQ2VsbERlZkRpcmVjdGl2ZSxcbiAgRm9vdGVyQ2VsbE91dGxldERpcmVjdGl2ZSxcbiAgRm9vdGVyUm93RGVmRGlyZWN0aXZlLFxuICBGb290ZXJSb3dPdXRsZXREaXJlY3RpdmUsXG4gIEhlYWRlckNlbGxEZWZEaXJlY3RpdmUsXG4gIEhlYWRlckNlbGxPdXRsZXREaXJlY3RpdmUsXG4gIEhlYWRlclJvd0RlZkRpcmVjdGl2ZSxcbiAgSGVhZGVyUm93T3V0bGV0RGlyZWN0aXZlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgLi4ubW9kdWxlc1xuICBdLFxuXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gICAgLi4uZGlyZWN0aXZlc1xuICBdLFxuXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5tb2R1bGVzLFxuICAgIC4uLmNvbXBvbmVudHMsXG4gICAgLi4uZGlyZWN0aXZlc1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZU1vZHVsZSB7fVxuIl19