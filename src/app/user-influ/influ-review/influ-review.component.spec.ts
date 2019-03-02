import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluReviewComponent } from './influ-review.component';

describe('InfluReviewComponent', () => {
  let component: InfluReviewComponent;
  let fixture: ComponentFixture<InfluReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
