import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddEvent, CancelEvent, EditEvent, GridComponent, GridDataResult, RemoveEvent, SaveEvent } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EditService } from './edit.service';
import { Product } from './product.model';

@Component({
    selector: 'claim-edit-form',
    styleUrls: ['claim.component.css'],

    templateUrl: 'claim.component.html',
})
export class ClaimComponent {
    public view: Observable<GridDataResult>;
    public gridState: State = {
        sort: [],
        skip: 0,
        take: 10,
    };

    private editService: EditService;
    private editedRowIndex: number;
    private editedProduct: Product;
    constructor(@Inject(EditService) editServiceFactory: () => EditService) {
        this.editService = editServiceFactory();
    }

    public ngOnInit(): void {
        this.view = this.editService.pipe(
            map((data) => process(data, this.gridState))
        );

        this.editService.read();
    }
    public onStateChange(state: State): void {
        this.gridState = state;

        this.editService.read();
    }

    public addHandler({ sender }: AddEvent, formInstance: NgForm): void {
        formInstance.reset();
        this.closeEditor(sender);

        sender.addRow(new Product());
    }

    public editHandler({ sender, rowIndex, dataItem }: EditEvent): void {
        this.closeEditor(sender);

        this.editedRowIndex = rowIndex;
        this.editedProduct = Object.assign({}, dataItem);

        sender.editRow(rowIndex);
    }

    public cancelHandler({ sender, rowIndex }: CancelEvent): void {
        this.closeEditor(sender, rowIndex);
    }

    public saveHandler({ sender, rowIndex, dataItem, isNew }: SaveEvent): void {
        this.editService.save(dataItem, isNew);

        sender.closeRow(rowIndex);

        this.editedRowIndex = undefined;
        this.editedProduct = undefined;
    }

    public removeHandler({ dataItem }: RemoveEvent): void {
        this.editService.remove(dataItem);
    }

    private closeEditor(
        grid: GridComponent,
        rowIndex = this.editedRowIndex
    ): void {
        grid.closeRow(rowIndex);
        this.editService.resetItem(this.editedProduct);
        this.editedRowIndex = undefined;
        this.editedProduct = undefined;
    }
}
