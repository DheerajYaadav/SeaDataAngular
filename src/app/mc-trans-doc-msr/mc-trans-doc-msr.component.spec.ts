import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McTransDocMsrComponent } from './mc-trans-doc-msr.component';

describe('McTransDocMsrComponent', () => {
  let component: McTransDocMsrComponent;
  let fixture: ComponentFixture<McTransDocMsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McTransDocMsrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McTransDocMsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
