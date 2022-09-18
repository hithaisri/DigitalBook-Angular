import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBooksReaderComponent } from './show-books-reader.component';

describe('ShowBooksReaderComponent', () => {
  let component: ShowBooksReaderComponent;
  let fixture: ComponentFixture<ShowBooksReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBooksReaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowBooksReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
