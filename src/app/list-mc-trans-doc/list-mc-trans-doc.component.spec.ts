import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMcTransDocComponent } from './list-mc-trans-doc.component';

describe('ListMcTransDocComponent', () => {
  let component: ListMcTransDocComponent;
  let fixture: ComponentFixture<ListMcTransDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMcTransDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMcTransDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
