import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcTransportEquipmentComponent } from './hc-transport-equipment.component';

describe('HcTransportEquipmentComponent', () => {
  let component: HcTransportEquipmentComponent;
  let fixture: ComponentFixture<HcTransportEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcTransportEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcTransportEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
