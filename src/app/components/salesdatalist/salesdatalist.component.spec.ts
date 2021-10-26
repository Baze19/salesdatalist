import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesdatalistComponent } from './salesdatalist.component';

describe('SalesdatalistComponent', () => {
  let component: SalesdatalistComponent;
  let fixture: ComponentFixture<SalesdatalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesdatalistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesdatalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
