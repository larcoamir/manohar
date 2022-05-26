import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { FilterTextComponent } from '../../shared/filter-text/filter-text.component';
import { FilterTextService } from '../../shared/filter-text/filter-text.service';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  //moduleId: module.id,
  selector: 'user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.css']
})
export class UserListComponent implements OnDestroy, OnInit {
  private dbResetSubscription!: Subscription;

  users: User[] = [];
  filteredUsers = this.users;
  @ViewChild(FilterTextComponent)
  filterComponent!: FilterTextComponent;

  constructor(
    private filterService: FilterTextService,
    private userService: UserService) { }

  filterChanged(searchText: string) {
    this.filteredUsers = this.filterService.filter(searchText, ['id', 'firstName', 'lastName'], this.users);
  }

  getUsers() {
    this.users = [];
    this.userService.getUsers()
      .subscribe(users => {
        this.users = this.filteredUsers = users;
        this.filterComponent.clear();
      },
      error => {
        console.log('error occurred here');
        console.log(error);
      },
       () => {
        console.log('user retrieval completed');
      });
  }

  ngOnDestroy() {
    this.dbResetSubscription.unsubscribe();
  }

  ngOnInit() {
    //componentHandler.upgradeDom();
    this.getUsers();
    this.dbResetSubscription = this.userService.onDbReset
      .subscribe(() => this.getUsers());
  }

  trackByUsers(index: number, user: User) {
    return user.id;
  }
}
