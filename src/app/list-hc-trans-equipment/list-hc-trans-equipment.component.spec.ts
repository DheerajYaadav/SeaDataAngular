import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHcTransEquipmentComponent } from './list-hc-trans-equipment.component';

describe('ListHcTransEquipmentComponent', () => {
  let component: ListHcTransEquipmentComponent;
  let fixture: ComponentFixture<ListHcTransEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHcTransEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHcTransEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
