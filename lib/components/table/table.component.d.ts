import { CdkTable } from '@angular/cdk/table';
import { AfterViewInit } from '@angular/core';
export declare class TableComponent<T> extends CdkTable<T> implements AfterViewInit {
    readonly gridTemplateColumns: string;
    updateStickyStyles(): void;
    ngAfterViewInit(): void;
}
