import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInfluencerComponent } from './update-influencer.component';

describe('UpdateInfluencerComponent', () => {
  let component: UpdateInfluencerComponent;
  let fixture: ComponentFixture<UpdateInfluencerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateInfluencerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
