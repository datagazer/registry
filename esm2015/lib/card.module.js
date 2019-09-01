import { NgModule } from '@angular/core';
// Modules
import { FoundationModule } from '@datagazer/foundation';
const modules = [
    FoundationModule
];
// Components
import { CardContentComponent } from './components/card/card-content/card-content.component';
import { CardFooterComponent } from './components/card/card-footer/card-footer.component';
import { CardHeaderComponent } from './components/card/card-header/card-header.component';
import { CardComponent } from './components/card/card.component';
const components = [
    CardContentComponent,
    CardFooterComponent,
    CardHeaderComponent,
    CardComponent
];
export class CardModule {
}
CardModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...modules
                ],
                declarations: [
                    ...components
                ],
                exports: [
                    ...modules,
                    ...components
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2NhcmQvIiwic291cmNlcyI6WyJsaWIvY2FyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxVQUFVO0FBQ1YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFekQsTUFBTSxPQUFPLEdBQUc7SUFDZCxnQkFBZ0I7Q0FDakIsQ0FBQztBQUVGLGFBQWE7QUFDYixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMxRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMxRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFakUsTUFBTSxVQUFVLEdBQUc7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtDQUNkLENBQUM7QUFnQkYsTUFBTSxPQUFPLFVBQVU7OztZQWR0QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLEdBQUcsT0FBTztpQkFDWDtnQkFFRCxZQUFZLEVBQUU7b0JBQ1osR0FBRyxVQUFVO2lCQUNkO2dCQUVELE9BQU8sRUFBRTtvQkFDUCxHQUFHLE9BQU87b0JBQ1YsR0FBRyxVQUFVO2lCQUNkO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBNb2R1bGVzXG5pbXBvcnQgeyBGb3VuZGF0aW9uTW9kdWxlIH0gZnJvbSAnQGRhdGFnYXplci9mb3VuZGF0aW9uJztcblxuY29uc3QgbW9kdWxlcyA9IFtcbiAgRm91bmRhdGlvbk1vZHVsZVxuXTtcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgQ2FyZENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC9jYXJkLWNvbnRlbnQvY2FyZC1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhcmQvY2FyZC1mb290ZXIvY2FyZC1mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENhcmRIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC9jYXJkLWhlYWRlci9jYXJkLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcblxuY29uc3QgY29tcG9uZW50cyA9IFtcbiAgQ2FyZENvbnRlbnRDb21wb25lbnQsXG4gIENhcmRGb290ZXJDb21wb25lbnQsXG4gIENhcmRIZWFkZXJDb21wb25lbnQsXG4gIENhcmRDb21wb25lbnRcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICAuLi5tb2R1bGVzXG4gIF0sXG5cbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uY29tcG9uZW50c1xuICBdLFxuXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5tb2R1bGVzLFxuICAgIC4uLmNvbXBvbmVudHNcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkTW9kdWxlIHt9XG4iXX0=