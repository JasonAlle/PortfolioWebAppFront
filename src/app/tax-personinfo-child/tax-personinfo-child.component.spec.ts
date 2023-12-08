import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxPersoninfoChildComponent } from './tax-personinfo-child.component';

describe('TaxPersoninfoChildComponent', () => {
  let component: TaxPersoninfoChildComponent;
  let fixture: ComponentFixture<TaxPersoninfoChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaxPersoninfoChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxPersoninfoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
