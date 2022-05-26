import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreadcrumbService } from 'xng-breadcrumb';
import { MessageService, ModalService } from '../';
import { UserService } from '../../services/user.service';

class MenuItem {
  constructor(public caption: string, public link: any[]) { }
}  

@Component({
  //moduleId: module.id,
  selector: 'story-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css'],
})
export class NavComponent implements OnInit {
  
  menuItems: MenuItem[] | undefined;
  displayName: string;
  isExpired: boolean | undefined;
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  public kendokaAvatar = 'https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png';
 
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  ngOnInit() {
    this.breadcrumbService.set('@ChildOne', 'Child One');
    this.menuItems = [
      { caption: 'Users', link: ['/users'] },
      { caption: 'Tenants', link: ['/tenants'] },
      { caption: 'Login', link: ['/login'] },
    ];
  }

  constructor(
    private messageService: MessageService,
    private breadcrumbService: BreadcrumbService,
    private modalService: ModalService,
    private userService: UserService) {
    this.displayName = "";
    userService.getUser().then(user => {
      if (user != null) {
        this.displayName = user.displayName;
      }
    });
    userService.isUserSessionExpired().then(expired => {
      this.isExpired = expired;
    });


  }

  resetDb() {
    let msg = 'Are you sure you want to reset the database?';
    if (this.modalService.activate) {
      this.modalService.activate(msg).then((responseOK: any) => {
        if (responseOK) {
          this.messageService.resetDb();
        }
      });
    }

  }
}
