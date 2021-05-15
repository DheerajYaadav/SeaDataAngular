import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcTransportDocMsrComponent } from './hc-transport-doc-msr.component';

describe('HcTransportDocMsrComponent', () => {
  let component: HcTransportDocMsrComponent;
  let fixture: ComponentFixture<HcTransportDocMsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcTransportDocMsrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcTransportDocMsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
