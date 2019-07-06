var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
// Modules
import { CommonModule } from '@angular/common';
const modules = [
    CommonModule
];
// Components
import { ContentCellComponent } from './components/table/cells/content-cell/content-cell.component';
import { FooterCellComponent } from './components/table/cells/footer-cell/footer-cell.component';
import { HeaderCellComponent } from './components/table/cells/header-cell/header-cell.component';
import { ContentRowComponent } from './components/table/rows/content-row/content-row.component';
import { FooterRowComponent } from './components/table/rows/footer-row/footer-row.component';
import { HeaderRowComponent } from './components/table/rows/header-row/header-row.component';
import { TableComponent } from './components/table/table.component';
const components = [
    ContentCellComponent,
    FooterCellComponent,
    HeaderCellComponent,
    ContentRowComponent,
    FooterRowComponent,
    HeaderRowComponent,
    TableComponent
];
// Directives
import { ContentCellDefDirective } from './directives/table/cell-defs/content-cell-def.directive';
import { FooterCellDefDirective } from './directives/table/cell-defs/footer-cell-def.directive';
import { HeaderCellDefDirective } from './directives/table/cell-defs/header-cell-def.directive';
import { ContentCellOutletDirective } from './directives/table/cell-outlets/content-cell-outlet.directive';
import { FooterCellOutletDirective } from './directives/table/cell-outlets/footer-cell-outlet.directive';
import { HeaderCellOutletDirective } from './directives/table/cell-outlets/header-cell-outlet.directive';
import { ContentRowDefDirective } from './directives/table/row-defs/content-row-def.directive';
import { FooterRowDefDirective } from './directives/table/row-defs/footer-row-def.directive';
import { HeaderRowDefDirective } from './directives/table/row-defs/header-row-def.directive';
import { ContentRowOutletDirective } from './directives/table/row-outlets/content-row-outlet.directive';
import { FooterRowOutletDirective } from './directives/table/row-outlets/footer-row-outlet.directive';
import { HeaderRowOutletDirective } from './directives/table/row-outlets/header-row-outlet.directive';
import { ColumnDefDirective } from './directives/table/column-def.directive';
const directives = [
    ContentCellDefDirective,
    FooterCellDefDirective,
    HeaderCellDefDirective,
    ContentCellOutletDirective,
    FooterCellOutletDirective,
    HeaderCellOutletDirective,
    ContentRowDefDirective,
    FooterRowDefDirective,
    HeaderRowDefDirective,
    ContentRowOutletDirective,
    FooterRowOutletDirective,
    HeaderRowOutletDirective,
    ColumnDefDirective
];
let DataTableModule = class DataTableModule {
};
DataTableModule = __decorate([
    NgModule({
        imports: [
            ...modules
        ],
        declarations: [
            ...components,
            ...directives
        ],
        exports: [
            ...components,
            ...directives
        ]
    })
], DataTableModule);
export { DataTableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS10YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUUvQyxVQUFVO0FBQ1YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxHQUFtQjtJQUM5QixZQUFZO0NBQ2IsQ0FBQztBQUVGLGFBQWE7QUFDYixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFcEUsTUFBTSxVQUFVLEdBQW1CO0lBQ2pDLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7Q0FDZixDQUFDO0FBRUYsYUFBYTtBQUNiLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQzNHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRTdFLE1BQU0sVUFBVSxHQUFtQjtJQUNqQyx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QixrQkFBa0I7Q0FDbkIsQ0FBQztBQWlCRixJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0NBQUcsQ0FBQTtBQUFsQixlQUFlO0lBZjNCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLEdBQUcsT0FBTztTQUNYO1FBRUQsWUFBWSxFQUFFO1lBQ1osR0FBRyxVQUFVO1lBQ2IsR0FBRyxVQUFVO1NBQ2Q7UUFFRCxPQUFPLEVBQUU7WUFDUCxHQUFHLFVBQVU7WUFDYixHQUFHLFVBQVU7U0FDZDtLQUNGLENBQUM7R0FDVyxlQUFlLENBQUc7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIE1vZHVsZXNcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmNvbnN0IG1vZHVsZXM6IFR5cGU8b2JqZWN0PltdID0gW1xuICBDb21tb25Nb2R1bGVcbl07XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbnRlbnRDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlL2NlbGxzL2NvbnRlbnQtY2VsbC9jb250ZW50LWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IEZvb3RlckNlbGxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUvY2VsbHMvZm9vdGVyLWNlbGwvZm9vdGVyLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IEhlYWRlckNlbGxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUvY2VsbHMvaGVhZGVyLWNlbGwvaGVhZGVyLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRlbnRSb3dDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUvcm93cy9jb250ZW50LXJvdy9jb250ZW50LXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9vdGVyUm93Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlL3Jvd3MvZm9vdGVyLXJvdy9mb290ZXItcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWFkZXJSb3dDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUvcm93cy9oZWFkZXItcm93L2hlYWRlci1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5cbmNvbnN0IGNvbXBvbmVudHM6IFR5cGU8b2JqZWN0PltdID0gW1xuICBDb250ZW50Q2VsbENvbXBvbmVudCxcbiAgRm9vdGVyQ2VsbENvbXBvbmVudCxcbiAgSGVhZGVyQ2VsbENvbXBvbmVudCxcbiAgQ29udGVudFJvd0NvbXBvbmVudCxcbiAgRm9vdGVyUm93Q29tcG9uZW50LFxuICBIZWFkZXJSb3dDb21wb25lbnQsXG4gIFRhYmxlQ29tcG9uZW50XG5dO1xuXG4vLyBEaXJlY3RpdmVzXG5pbXBvcnQgeyBDb250ZW50Q2VsbERlZkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy90YWJsZS9jZWxsLWRlZnMvY29udGVudC1jZWxsLWRlZi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRm9vdGVyQ2VsbERlZkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy90YWJsZS9jZWxsLWRlZnMvZm9vdGVyLWNlbGwtZGVmLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBIZWFkZXJDZWxsRGVmRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3RhYmxlL2NlbGwtZGVmcy9oZWFkZXItY2VsbC1kZWYuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbnRlbnRDZWxsT3V0bGV0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3RhYmxlL2NlbGwtb3V0bGV0cy9jb250ZW50LWNlbGwtb3V0bGV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGb290ZXJDZWxsT3V0bGV0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3RhYmxlL2NlbGwtb3V0bGV0cy9mb290ZXItY2VsbC1vdXRsZXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEhlYWRlckNlbGxPdXRsZXREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdGFibGUvY2VsbC1vdXRsZXRzL2hlYWRlci1jZWxsLW91dGxldC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29udGVudFJvd0RlZkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy90YWJsZS9yb3ctZGVmcy9jb250ZW50LXJvdy1kZWYuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZvb3RlclJvd0RlZkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy90YWJsZS9yb3ctZGVmcy9mb290ZXItcm93LWRlZi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSGVhZGVyUm93RGVmRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3RhYmxlL3Jvdy1kZWZzL2hlYWRlci1yb3ctZGVmLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb250ZW50Um93T3V0bGV0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3RhYmxlL3Jvdy1vdXRsZXRzL2NvbnRlbnQtcm93LW91dGxldC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRm9vdGVyUm93T3V0bGV0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3RhYmxlL3Jvdy1vdXRsZXRzL2Zvb3Rlci1yb3ctb3V0bGV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBIZWFkZXJSb3dPdXRsZXREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdGFibGUvcm93LW91dGxldHMvaGVhZGVyLXJvdy1vdXRsZXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbHVtbkRlZkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy90YWJsZS9jb2x1bW4tZGVmLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IGRpcmVjdGl2ZXM6IFR5cGU8b2JqZWN0PltdID0gW1xuICBDb250ZW50Q2VsbERlZkRpcmVjdGl2ZSxcbiAgRm9vdGVyQ2VsbERlZkRpcmVjdGl2ZSxcbiAgSGVhZGVyQ2VsbERlZkRpcmVjdGl2ZSxcbiAgQ29udGVudENlbGxPdXRsZXREaXJlY3RpdmUsXG4gIEZvb3RlckNlbGxPdXRsZXREaXJlY3RpdmUsXG4gIEhlYWRlckNlbGxPdXRsZXREaXJlY3RpdmUsXG4gIENvbnRlbnRSb3dEZWZEaXJlY3RpdmUsXG4gIEZvb3RlclJvd0RlZkRpcmVjdGl2ZSxcbiAgSGVhZGVyUm93RGVmRGlyZWN0aXZlLFxuICBDb250ZW50Um93T3V0bGV0RGlyZWN0aXZlLFxuICBGb290ZXJSb3dPdXRsZXREaXJlY3RpdmUsXG4gIEhlYWRlclJvd091dGxldERpcmVjdGl2ZSxcbiAgQ29sdW1uRGVmRGlyZWN0aXZlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgLi4ubW9kdWxlc1xuICBdLFxuXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gICAgLi4uZGlyZWN0aXZlc1xuICBdLFxuXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5jb21wb25lbnRzLFxuICAgIC4uLmRpcmVjdGl2ZXNcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVNb2R1bGUge31cbiJdfQ==