import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaverageYield } from './laverage-yield';

describe('LaverageYield', () => {
  let component: LaverageYield;
  let fixture: ComponentFixture<LaverageYield>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaverageYield]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaverageYield);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
