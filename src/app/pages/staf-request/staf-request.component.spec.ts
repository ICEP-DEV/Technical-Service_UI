import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StafRequestComponent } from './staf-request.component';

describe('StafRequestComponent', () => {
  let component: StafRequestComponent;
  let fixture: ComponentFixture<StafRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StafRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StafRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
