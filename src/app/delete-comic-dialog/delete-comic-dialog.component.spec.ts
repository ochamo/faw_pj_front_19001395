import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteComicDialogComponent } from './delete-comic-dialog.component';

describe('DeleteComicDialogComponent', () => {
  let component: DeleteComicDialogComponent;
  let fixture: ComponentFixture<DeleteComicDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteComicDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteComicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
