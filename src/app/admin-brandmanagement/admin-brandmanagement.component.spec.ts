import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBrandmanagementComponent } from './admin-brandmanagement.component';

describe('AdminBrandmanagementComponent', () => {
  let component: AdminBrandmanagementComponent;
  let fixture: ComponentFixture<AdminBrandmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBrandmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBrandmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
