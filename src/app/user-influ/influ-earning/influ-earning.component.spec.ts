import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluEarningComponent } from './influ-earning.component';

describe('InfluEarningComponent', () => {
  let component: InfluEarningComponent;
  let fixture: ComponentFixture<InfluEarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluEarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluEarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
