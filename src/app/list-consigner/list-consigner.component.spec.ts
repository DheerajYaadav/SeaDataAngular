import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsignerComponent } from './list-consigner.component';

describe('ListConsignerComponent', () => {
  let component: ListConsignerComponent;
  let fixture: ComponentFixture<ListConsignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConsignerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConsignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
