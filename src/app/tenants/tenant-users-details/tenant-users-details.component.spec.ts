import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantUsersDetailsComponent } from './tenant-users-details.component';

describe('TenantUsersDetailsComponent', () => {
  let component: TenantUsersDetailsComponent;
  let fixture: ComponentFixture<TenantUsersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantUsersDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantUsersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
