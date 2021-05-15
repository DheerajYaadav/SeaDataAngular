import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MblComponent } from './mbl.component';

describe('MblComponent', () => {
  let component: MblComponent;
  let fixture: ComponentFixture<MblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MblComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
