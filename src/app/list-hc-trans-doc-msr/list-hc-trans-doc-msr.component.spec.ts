import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHcTransDocMsrComponent } from './list-hc-trans-doc-msr.component';

describe('ListHcTransDocMsrComponent', () => {
  let component: ListHcTransDocMsrComponent;
  let fixture: ComponentFixture<ListHcTransDocMsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHcTransDocMsrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHcTransDocMsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
