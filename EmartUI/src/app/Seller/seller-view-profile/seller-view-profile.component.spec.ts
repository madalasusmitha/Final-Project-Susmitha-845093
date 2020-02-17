import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerViewProfileComponent } from './seller-view-profile.component';

describe('SellerViewProfileComponent', () => {
  let component: SellerViewProfileComponent;
  let fixture: ComponentFixture<SellerViewProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerViewProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
