import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {
  GridDataResult,
  PageChangeEvent,
  GridComponent,
  AddEvent,
} from '@progress/kendo-angular-grid';
import { ClaimComponent } from '../claim/claim.component';
import { Claims } from '../shared/claims.model';
import { ClaimsService } from '../shared/claims.service';

@Component({
  selector: 'claims-list',
  templateUrl: 'claims-list.component.html',
  styleUrls: ['claims-list.component.css'],
  providers: [ClaimsService],
})
export class ClaimsListComponent implements OnInit {
  public dataItemToEdit: Claims | null = new Claims();
  public openResolve: boolean = false;

  // private deviceQueueData: Tenant[]; tenants
  // private deviceQueueData: Tenant[]; tenants

  private tenants: Claims[] = [];
  public gridView: GridDataResult | any[] = [];
  public pageSize: number = 10;
  public page: number = 1;
  public skip: number = 0;
  public isNew: boolean = false;

  @ViewChild(GridComponent) gridComponent: GridComponent | undefined;

  @ViewChild(ClaimComponent) protected editFormComponent:
    | ClaimComponent
    | undefined;

  constructor() { }
  ngOnInit() {
  }
}
