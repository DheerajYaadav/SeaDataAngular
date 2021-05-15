import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMcItrnyComponent } from './list-mc-itrny.component';

describe('ListMcItrnyComponent', () => {
  let component: ListMcItrnyComponent;
  let fixture: ComponentFixture<ListMcItrnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMcItrnyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMcItrnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
