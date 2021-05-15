import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMcTransEquipmentComponent } from './list-mc-trans-equipment.component';

describe('ListMcTransEquipmentComponent', () => {
  let component: ListMcTransEquipmentComponent;
  let fixture: ComponentFixture<ListMcTransEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMcTransEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMcTransEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
