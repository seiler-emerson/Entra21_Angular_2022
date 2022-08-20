import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerendarComponent } from './merendar.component';

describe('MerendarComponent', () => {
  let component: MerendarComponent;
  let fixture: ComponentFixture<MerendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
