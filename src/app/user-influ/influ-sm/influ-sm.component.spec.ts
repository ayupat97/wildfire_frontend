import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluSmComponent } from './influ-sm.component';

describe('InfluSmComponent', () => {
  let component: InfluSmComponent;
  let fixture: ComponentFixture<InfluSmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluSmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
