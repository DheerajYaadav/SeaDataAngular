import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McReferenceComponent } from './mc-reference.component';

describe('McReferenceComponent', () => {
  let component: McReferenceComponent;
  let fixture: ComponentFixture<McReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McReferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
