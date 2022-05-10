import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoItemComponentComponent } from './listado-item-component.component';

describe('ListadoItemComponentComponent', () => {
  let component: ListadoItemComponentComponent;
  let fixture: ComponentFixture<ListadoItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoItemComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
