import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxFormParentComponent } from './tax-form-parent.component';

describe('TaxFormParentComponent', () => {
  let component: TaxFormParentComponent;
  let fixture: ComponentFixture<TaxFormParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaxFormParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxFormParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
