import { Component, Input, OnInit } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { Tenant } from '../shared/tenant.model';
import { TenantService } from '../shared/tenant.service';

@Component({
  selector: 'tenant-users-details',
  templateUrl: './tenant-users-details.component.html',
  styleUrls: ['./tenant-users-details.component.scss']
})
export class TenantUsersDetailsComponent implements OnInit {

  @Input()
  public tenant!: Tenant;

  public gridView: GridDataResult | any[] = [];
  public pageSize: number = 10;
  public page: number = 1;
  public skip: number = 0;
  constructor(private tenantService: TenantService) {
    
   }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.tenantService.getTenantUsers(this.tenant.id)
           .subscribe(
 result => {
   this.gridView = {
     data: result,
     total: 50
   }
 },
 error => { console.log(error); }
)

}

public pageChange(event: PageChangeEvent): void {
  this.skip = event.skip;
  this.pageSize = event.take;
  this.page = (event.skip + event.take) / this.pageSize;
  this.getUsers();
}

}
