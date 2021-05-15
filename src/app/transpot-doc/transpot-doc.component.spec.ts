import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranspotDocComponent } from './transpot-doc.component';

describe('TranspotDocComponent', () => {
  let component: TranspotDocComponent;
  let fixture: ComponentFixture<TranspotDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranspotDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranspotDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
