import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMcTransDocMsrComponent } from './list-mc-trans-doc-msr.component';

describe('ListMcTransDocMsrComponent', () => {
  let component: ListMcTransDocMsrComponent;
  let fixture: ComponentFixture<ListMcTransDocMsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMcTransDocMsrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMcTransDocMsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
