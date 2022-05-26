import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { EntityService, ModalService, ToastService } from '../../core';
import { UserDetail } from '../shared/user-detail.model';
import { UserService } from '../shared/user.service';

@Component({
  //moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css']
})
export class UserComponent implements OnDestroy, OnInit {
  @Input() userDetail: UserDetail = new UserDetail();
  editUserDetail: UserDetail = <UserDetail>{};

  private dbResetSubscription: Subscription = new Subscription;
  private id: any;

  constructor(private entityService: EntityService,
    private modalService: ModalService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private toastService: ToastService) { }

  cancel(showToast = true) {
    this.editUserDetail = this.entityService.clone(this.userDetail);
    if (showToast && this.userDetail) {
      this.toastService.activate(`Cancelled changes to ${this.userDetail.userName}`);
    }
  }

  canDeactivate() {
    return !this.userDetail ||
      !this.isDirty() ||
      (this.modalService.activate && this.modalService.activate());
  }

  delete() {
    if(this.modalService.activate){
      let msg = `Do you want to delete the ${this.userDetail.userName}?`;
      this.modalService.activate(msg).then((responseOK) => {
        if (responseOK) {
          this.cancel(false);
          this.userService.deleteUser(this.userDetail)
            .subscribe(
            () => { // Success path
              this.toastService.activate(`Deleted ${this.userDetail.userName}`);
              this.gotoUsers();
            },
            (err) => this.handleServiceError('Delete', err), // Failure path
            () => console.log('Delete Completed') // Completed actions
            );
        }
      });
    }
    
  }

  isAddMode() { return isNaN(this.id); }

  ngOnDestroy() {
    this.dbResetSubscription.unsubscribe();
  }

  ngOnInit() {
    //componentHandler.upgradeDom();
    this.dbResetSubscription =
      this.userService.onDbReset.subscribe(() => this.getUser());

    // ** Could use a snapshot here, as long as the parameters do not change.
    // ** This may happen when a component is re-used, such as fwd/back.
    // this.id = +this.route.snapshot.params['id'];
    //
    // ** We could use a subscription to get the parameter, too.
    // ** The ActivatedRoute gets unsubscribed
    // this.route
    //   .params
    //   .map(params => params['id'])
    //   .do(id => this.id = +id)
    //   .subscribe(id => this.getVehicle());
    //
    // ** Instead we will use a Resolve(r)
    this.route.data.subscribe((data) => { //: { user: UserDetail }
      this.setEditUser(data.user);
      this.id = this.userDetail.id;
    });
  }

  save() {
    let userDetal = this.userDetail =
      this.entityService.merge(this.userDetail, this.editUserDetail);
    if (userDetal.id == null) {
      this.userService.addUser(userDetal).subscribe( (s: UserDetail) => { //: 
        this.setEditUser(s);
        this.toastService.activate(`Successfully added ${s.userName}`);
        this.gotoUsers();
      });
      return;
    }
    this.userService.updateUser(this.userDetail)
      .subscribe(() => this.toastService.activate(
        `Successfully saved ${this.userDetail.userName}`));
  }

  private getUser() {
   // if (this.id === 0) {
   //   return;
   // };
    if (this.isAddMode()) {
      this.userDetail = <UserDetail>{ firstName: '',lastName:'', userName: '' };
      this.editUserDetail = this.entityService.clone(this.userDetail);
      return;
    }
    this.userService.getUser(this.id).subscribe(
      (userDetal: UserDetail) => this.setEditUser(userDetal));
  }

  private gotoUsers() {
    this.router.navigate(['/users']);
  }

  private handleServiceError(op: string, err: any) {
    console.error(`${op} error: ${err.message || err}`);
  }

  private isDirty() {
    return this.entityService.propertiesDiffer(this.userDetail, this.editUserDetail);
  }

  private setEditUser(userDetal: UserDetail) {
    if (userDetal) {
      this.userDetail = userDetal;
      this.editUserDetail = this.entityService.clone(this.userDetail);
    } else {
      this.gotoUsers();
    }
  }
}
