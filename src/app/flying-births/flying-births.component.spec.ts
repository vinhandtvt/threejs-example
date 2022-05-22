import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyingBirthsComponent } from './flying-births.component';

describe('FlyingBirthsComponent', () => {
  let component: FlyingBirthsComponent;
  let fixture: ComponentFixture<FlyingBirthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyingBirthsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyingBirthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
