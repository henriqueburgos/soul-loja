import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteDataBaseComponent } from './teste-data-base.component';

describe('TesteDataBaseComponent', () => {
  let component: TesteDataBaseComponent;
  let fixture: ComponentFixture<TesteDataBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteDataBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteDataBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
