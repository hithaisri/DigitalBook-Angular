import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpateBookComponent } from './upate-book.component';

describe('UpateBookComponent', () => {
  let component: UpateBookComponent;
  let fixture: ComponentFixture<UpateBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpateBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpateBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
