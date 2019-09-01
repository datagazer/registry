import { CdkRowDef as CdkContentRowDef } from '@angular/cdk/table';
export declare class ContentRowDefDirective<T> extends CdkContentRowDef<T> {
    columns: Iterable<string>;
    when: (index: number, rowData: T) => boolean;
}
