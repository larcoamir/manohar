import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Tenant } from '../shared/tenant.model';

@Component({
    selector: 'tenant-edit-form',
    styleUrls: ['tenant.component.css'],
   
     templateUrl: 'tenant.component.html',
})
export class TenantComponent {
    
    public editForm = new FormGroup({
        'TenantID': new FormControl(),
        'TenantName': new FormControl("", Validators.required),
    });
    public dataItemToEdit: any;
    private active: boolean = false;

    @Input() public isNew: boolean = false;

    @Input() public set model(tenant: Tenant | null) {
        this.editForm.reset(tenant);
        this.active = tenant !== undefined;
    }

    @Output() cancel: EventEmitter<any> = new EventEmitter();
    @Output() save: EventEmitter<Tenant> = new EventEmitter();

    public onSave(e: any): void {
        e.preventDefault();
        console.log("Save clicked");
        this.save.emit(this.editForm.value);
        this.active = false;
    }

    public onCancel(e: any): void {
        e.preventDefault();
        this.closeForm(null);
        
    }

    public closeForm(evt: any): void {
        this.active = false;
        this.cancel.emit();
    }
}
