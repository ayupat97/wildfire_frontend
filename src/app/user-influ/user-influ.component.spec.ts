import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfluComponent } from './user-influ.component';

describe('UserInfluComponent', () => {
  let component: UserInfluComponent;
  let fixture: ComponentFixture<UserInfluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
