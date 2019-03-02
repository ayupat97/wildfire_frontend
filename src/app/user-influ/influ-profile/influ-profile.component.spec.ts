import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluProfileComponent } from './influ-profile.component';

describe('InfluProfileComponent', () => {
  let component: InfluProfileComponent;
  let fixture: ComponentFixture<InfluProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
