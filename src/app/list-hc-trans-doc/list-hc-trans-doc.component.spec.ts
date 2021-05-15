import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHcTransDocComponent } from './list-hc-trans-doc.component';

describe('ListHcTransDocComponent', () => {
  let component: ListHcTransDocComponent;
  let fixture: ComponentFixture<ListHcTransDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHcTransDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHcTransDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
