import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmitComponent } from './transmit.component';

describe('TransmitComponent', () => {
  let component: TransmitComponent;
  let fixture: ComponentFixture<TransmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
