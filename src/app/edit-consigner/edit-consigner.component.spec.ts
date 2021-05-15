import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConsignerComponent } from './edit-consigner.component';

describe('EditConsignerComponent', () => {
  let component: EditConsignerComponent;
  let fixture: ComponentFixture<EditConsignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditConsignerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConsignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
