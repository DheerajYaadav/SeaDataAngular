import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMcrefComponent } from './list-mcref.component';

describe('ListMcrefComponent', () => {
  let component: ListMcrefComponent;
  let fixture: ComponentFixture<ListMcrefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMcrefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMcrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
