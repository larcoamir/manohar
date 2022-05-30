import { Component } from '@angular/core';
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
export interface PeriodicElementMeta {
    name: string;
    position: number;
    dataType:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Read Write', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Read Write', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Read Write', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Read Write', weight: 9.0122, symbol: 'Be' },
];
const ELEMENT_DATA_META: PeriodicElementMeta[] = [
    { position: 1, name: 'Read Write', dataType: 'abc' },
    { position: 2, name: 'Read Write', dataType: 'abc' },
    { position: 3, name: 'Read Write', dataType: 'abc' },
];

@Component({
    selector: 'claim-edit-form',
    styleUrls: ['claim.component.css'],

    templateUrl: 'claim.component.html',
})
export class ClaimComponent {
    displayedColumns: string[] = ['position', 'name', 'action',];
    dataSource = ELEMENT_DATA;
    displayedColumnsMeta: string[] = ['position', 'name', 'dataType','action'];
    dataSourceMeta = ELEMENT_DATA_META;
}
