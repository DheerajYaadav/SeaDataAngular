import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHcItrnyComponent } from './list-hc-itrny.component';

describe('ListHcItrnyComponent', () => {
  let component: ListHcItrnyComponent;
  let fixture: ComponentFixture<ListHcItrnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHcItrnyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHcItrnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
