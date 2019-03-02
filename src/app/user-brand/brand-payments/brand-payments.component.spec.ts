import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandPaymentsComponent } from './brand-payments.component';

describe('BrandPaymentsComponent', () => {
  let component: BrandPaymentsComponent;
  let fixture: ComponentFixture<BrandPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
