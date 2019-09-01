import { TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureFlagsService } from '../services/feature-flags.service';
export declare class FeatureFlagDirective {
    private readonly _templateRef;
    private readonly _viewContainerRef;
    private readonly _featureFlags;
    dgFeatureFlag: string;
    constructor(_templateRef: TemplateRef<never>, _viewContainerRef: ViewContainerRef, _featureFlags: FeatureFlagsService);
}
