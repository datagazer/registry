import { InjectionToken } from '@angular/core';
import { FeatureFlags } from '../types/feature-flags';
export declare const FEATURE_FLAGS: InjectionToken<FeatureFlags>;
export declare class FeatureFlagsService {
    private readonly _featureFlags;
    constructor(_featureFlags: FeatureFlags);
    isEnabled(feature: string): boolean;
}
