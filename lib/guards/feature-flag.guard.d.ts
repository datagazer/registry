import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { FeatureFlagsService } from '../services/feature-flags.service';
export declare class FeatureFlagGuard implements CanActivate {
    private readonly _featureFlags;
    constructor(_featureFlags: FeatureFlagsService);
    canActivate({ data: { feature } }: ActivatedRouteSnapshot): boolean;
}
