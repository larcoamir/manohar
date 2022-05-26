import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SpinnerState, SpinnerService } from './spinner.service';

@Component({
  //moduleId: module.id,
  selector: 'story-spinner',
  templateUrl: 'spinner.component.html',
  styleUrls: ['spinner.component.css']
})
export class SpinnerComponent implements OnDestroy, OnInit {
  visible = false;

  private spinnerStateChanged: Subscription | undefined;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
    //componentHandler.upgradeDom();
    this.spinnerStateChanged = this.spinnerService.spinnerState
      .subscribe((state: SpinnerState) => this.visible = state.show);
  }

  ngOnDestroy() {
    if(this.spinnerStateChanged)
      this.spinnerStateChanged.unsubscribe();
  }
}
