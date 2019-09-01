import { NgModule } from '@angular/core';
// Modules
import { FoundationModule } from '@datagazer/foundation';
const modules = [
    FoundationModule
];
// Directives
import { FeatureFlagDirective } from './directives/feature-flag.directive';
const directives = [
    FeatureFlagDirective
];
export class FeatureFlagsModule {
}
FeatureFlagsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...modules
                ],
                declarations: [
                    ...directives
                ],
                exports: [
                    ...modules,
                    ...directives
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1mbGFncy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGF0YWdhemVyL2ZlYXR1cmUtZmxhZ3MvIiwic291cmNlcyI6WyJsaWIvZmVhdHVyZS1mbGFncy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxVQUFVO0FBQ1YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFekQsTUFBTSxPQUFPLEdBQUc7SUFDZCxnQkFBZ0I7Q0FDakIsQ0FBQztBQUVGLGFBQWE7QUFDYixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUUzRSxNQUFNLFVBQVUsR0FBRztJQUNqQixvQkFBb0I7Q0FDckIsQ0FBQztBQWdCRixNQUFNLE9BQU8sa0JBQWtCOzs7WUFkOUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxHQUFHLE9BQU87aUJBQ1g7Z0JBRUQsWUFBWSxFQUFFO29CQUNaLEdBQUcsVUFBVTtpQkFDZDtnQkFFRCxPQUFPLEVBQUU7b0JBQ1AsR0FBRyxPQUFPO29CQUNWLEdBQUcsVUFBVTtpQkFDZDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gTW9kdWxlc1xuaW1wb3J0IHsgRm91bmRhdGlvbk1vZHVsZSB9IGZyb20gJ0BkYXRhZ2F6ZXIvZm91bmRhdGlvbic7XG5cbmNvbnN0IG1vZHVsZXMgPSBbXG4gIEZvdW5kYXRpb25Nb2R1bGVcbl07XG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCB7IEZlYXR1cmVGbGFnRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ZlYXR1cmUtZmxhZy5kaXJlY3RpdmUnO1xuXG5jb25zdCBkaXJlY3RpdmVzID0gW1xuICBGZWF0dXJlRmxhZ0RpcmVjdGl2ZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIC4uLm1vZHVsZXNcbiAgXSxcblxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5kaXJlY3RpdmVzXG4gIF0sXG5cbiAgZXhwb3J0czogW1xuICAgIC4uLm1vZHVsZXMsXG4gICAgLi4uZGlyZWN0aXZlc1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVGbGFnc01vZHVsZSB7fVxuIl19