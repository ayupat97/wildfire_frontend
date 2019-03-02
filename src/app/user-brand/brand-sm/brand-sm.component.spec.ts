import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandSmComponent } from './brand-sm.component';

describe('BrandSmComponent', () => {
  let component: BrandSmComponent;
  let fixture: ComponentFixture<BrandSmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandSmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
