import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfComicsComponent } from './list-of-comics.component';

describe('ListOfComicsComponent', () => {
  let component: ListOfComicsComponent;
  let fixture: ComponentFixture<ListOfComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfComicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
