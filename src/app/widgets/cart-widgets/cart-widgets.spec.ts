import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartWidgets } from './cart-widgets';

describe('CartWidgets', () => {
  let component: CartWidgets;
  let fixture: ComponentFixture<CartWidgets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartWidgets],
    }).compileComponents();

    fixture = TestBed.createComponent(CartWidgets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
