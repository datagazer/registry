import { CdkTable } from '@angular/cdk/table';
export declare class TableComponent<T> extends CdkTable<T> {
    readonly gridTemplateColumns: string;
    updateStickyColumnStyles(): void;
}
