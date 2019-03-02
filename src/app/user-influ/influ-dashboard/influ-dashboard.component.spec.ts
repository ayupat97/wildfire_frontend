import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluDashboardComponent } from './influ-dashboard.component';

describe('InfluDashboardComponent', () => {
  let component: InfluDashboardComponent;
  let fixture: ComponentFixture<InfluDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
