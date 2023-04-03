import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionDialogComponent } from './direction-dialog.component';

describe('DirectionDialogComponent', () => {
  let component: DirectionDialogComponent;
  let fixture: ComponentFixture<DirectionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
