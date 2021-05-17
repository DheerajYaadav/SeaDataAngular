import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMcrefComponent } from './edit-mcref.component';

describe('EditMcrefComponent', () => {
  let component: EditMcrefComponent;
  let fixture: ComponentFixture<EditMcrefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMcrefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMcrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
