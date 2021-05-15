import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HblComponent } from './hbl.component';

describe('HblComponent', () => {
  let component: HblComponent;
  let fixture: ComponentFixture<HblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HblComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
