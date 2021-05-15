import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoactionCustomComponent } from './loaction-custom.component';

describe('LoactionCustomComponent', () => {
  let component: LoactionCustomComponent;
  let fixture: ComponentFixture<LoactionCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoactionCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoactionCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
