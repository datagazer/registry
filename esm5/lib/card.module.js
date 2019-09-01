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
import { CardContentComponent } from './components/card/card-content/card-content.component';
import { CardFooterComponent } from './components/card/card-footer/card-footer.component';
import { CardHeaderComponent } from './components/card/card-header/card-header.component';
import { CardComponent } from './components/card/card.component';
var components = [
    CardContentComponent,
    CardFooterComponent,
    CardHeaderComponent,
    CardComponent
];
var CardModule = /** @class */ (function () {
    function CardModule() {
    }
    CardModule.decorators = [
        { type: NgModule, args: [{
                    imports: __spread(modules),
                    declarations: __spread(components),
                    exports: __spread(modules, components)
                },] }
    ];
    return CardModule;
}());
export { CardModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2NhcmQvIiwic291cmNlcyI6WyJsaWIvY2FyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLFVBQVU7QUFDVixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV6RCxJQUFNLE9BQU8sR0FBRztJQUNkLGdCQUFnQjtDQUNqQixDQUFDO0FBRUYsYUFBYTtBQUNiLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVqRSxJQUFNLFVBQVUsR0FBRztJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0NBQ2QsQ0FBQztBQUVGO0lBQUE7SUFjeUIsQ0FBQzs7Z0JBZHpCLFFBQVEsU0FBQztvQkFDUixPQUFPLFdBQ0YsT0FBTyxDQUNYO29CQUVELFlBQVksV0FDUCxVQUFVLENBQ2Q7b0JBRUQsT0FBTyxXQUNGLE9BQU8sRUFDUCxVQUFVLENBQ2Q7aUJBQ0Y7O0lBQ3dCLGlCQUFDO0NBQUEsQUFkMUIsSUFjMEI7U0FBYixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gTW9kdWxlc1xuaW1wb3J0IHsgRm91bmRhdGlvbk1vZHVsZSB9IGZyb20gJ0BkYXRhZ2F6ZXIvZm91bmRhdGlvbic7XG5cbmNvbnN0IG1vZHVsZXMgPSBbXG4gIEZvdW5kYXRpb25Nb2R1bGVcbl07XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENhcmRDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhcmQvY2FyZC1jb250ZW50L2NhcmQtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FyZEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJkL2NhcmQtZm9vdGVyL2NhcmQtZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhcmQvY2FyZC1oZWFkZXIvY2FyZC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG4gIENhcmRDb250ZW50Q29tcG9uZW50LFxuICBDYXJkRm9vdGVyQ29tcG9uZW50LFxuICBDYXJkSGVhZGVyQ29tcG9uZW50LFxuICBDYXJkQ29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgLi4ubW9kdWxlc1xuICBdLFxuXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHNcbiAgXSxcblxuICBleHBvcnRzOiBbXG4gICAgLi4ubW9kdWxlcyxcbiAgICAuLi5jb21wb25lbnRzXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZE1vZHVsZSB7fVxuIl19