import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluSignupComponent } from './influ-signup.component';

describe('InfluSignupComponent', () => {
  let component: InfluSignupComponent;
  let fixture: ComponentFixture<InfluSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
