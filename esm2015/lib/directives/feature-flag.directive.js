import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureFlagsService } from '../services/feature-flags.service';
export class FeatureFlagDirective {
    constructor(_templateRef, _viewContainerRef, _featureFlags) {
        this._templateRef = _templateRef;
        this._viewContainerRef = _viewContainerRef;
        this._featureFlags = _featureFlags;
    }
    set dgFeatureFlag(feature) {
        this._viewContainerRef.clear();
        if (this._featureFlags.isEnabled(feature)) {
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
    }
}
FeatureFlagDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dgFeatureFlag]'
            },] }
];
/** @nocollapse */
FeatureFlagDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: FeatureFlagsService }
];
FeatureFlagDirective.propDecorators = {
    dgFeatureFlag: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1mbGFnLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYXRhZ2F6ZXIvZmVhdHVyZS1mbGFncy8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2ZlYXR1cmUtZmxhZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBS3hFLE1BQU0sT0FBTyxvQkFBb0I7SUFVL0IsWUFDbUIsWUFBZ0MsRUFDaEMsaUJBQW1DLEVBRW5DLGFBQWtDO1FBSGxDLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBRW5DLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtJQUNsRCxDQUFDO0lBZEosSUFDVyxhQUFhLENBQUMsT0FBZTtRQUN0QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFL0IsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzlEO0lBQ0gsQ0FBQzs7O1lBWEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7YUFDNUI7Ozs7WUFMMEIsV0FBVztZQUFFLGdCQUFnQjtZQUMvQyxtQkFBbUI7Ozs0QkFNekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGZWF0dXJlRmxhZ3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmVhdHVyZS1mbGFncy5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2RnRmVhdHVyZUZsYWddJ1xufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlRmxhZ0RpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZGdGZWF0dXJlRmxhZyhmZWF0dXJlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cbiAgICBpZiAodGhpcy5fZmVhdHVyZUZsYWdzLmlzRW5hYmxlZChmZWF0dXJlKSkge1xuICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5fdGVtcGxhdGVSZWYpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxuZXZlcj4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2ZlYXR1cmVGbGFnczogRmVhdHVyZUZsYWdzU2VydmljZVxuICApIHt9XG59XG4iXX0=