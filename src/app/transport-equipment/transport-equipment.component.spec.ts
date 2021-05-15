import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportEquipmentComponent } from './transport-equipment.component';

describe('TransportEquipmentComponent', () => {
  let component: TransportEquipmentComponent;
  let fixture: ComponentFixture<TransportEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
