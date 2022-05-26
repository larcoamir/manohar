import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Tenant } from '../shared/tenant.model';
import { TenantService } from '../shared/tenant.service';
import {
  GridDataResult,
  PageChangeEvent,
  GridComponent,
  AddEvent,
} from '@progress/kendo-angular-grid';
import { TenantComponent } from '../tenant/tenant.component';

@Component({
  selector: 'tenant-list',
  templateUrl: 'tenant-list.component.html',
  styleUrls: ['tenant-list.component.css'],
  providers: [TenantService],
})
export class TenantListComponent implements OnInit {
  public dataItemToEdit: Tenant | null = new Tenant();
  public openResolve: boolean = false;

  // private deviceQueueData: Tenant[]; tenants
  // private deviceQueueData: Tenant[]; tenants

  private tenants: Tenant[] = [];
  public gridView: GridDataResult | any[] = [];
  public pageSize: number = 10;
  public page: number = 1;
  public skip: number = 0;
  public isNew: boolean = false;

  @ViewChild(GridComponent) gridComponent: GridComponent | undefined;

  @ViewChild(TenantComponent) protected editFormComponent:
    | TenantComponent
    | undefined;

  constructor(private _tenantService: TenantService) {}
  ngOnInit() {
    this.getTenants();
  }

  getTenants() {
    this._tenantService.getTenants().subscribe(
      (result) => {
        this.gridView = {
          data: result,
          total: 50,
        };
      },
      (error) => {
        console.log(error);
      }
    );
  }
  resolve(dataItem: Tenant) {
    this.openResolve = true;
  }

  public addHandler(evt: AddEvent) {
    this.dataItemToEdit = new Tenant();
    this.isNew = true;
  }

  public editHandler({ dataItem }: { dataItem: any }): void {
    this.dataItemToEdit = dataItem;
    this.isNew = false;
  }

  public cancelHandler(evt: any) {
    this.dataItemToEdit = null;
  }

  public onSave(tenant: Tenant): void {
    this.dataItemToEdit = null;
  }

  public saveHandler(tenant: Tenant) {
    //this.editService.save(product, this.isNew);

    this.dataItemToEdit = null;
  }

  public removeHandler({ dataItem }: { dataItem: any }) {
    // this.editService.remove(dataItem);
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.pageSize = event.take;
    this.page = (event.skip + event.take) / this.pageSize;
    this.getTenants();
  }
}
