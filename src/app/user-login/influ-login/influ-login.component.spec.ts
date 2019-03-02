import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluLoginComponent } from './influ-login.component';

describe('InfluLoginComponent', () => {
  let component: InfluLoginComponent;
  let fixture: ComponentFixture<InfluLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
