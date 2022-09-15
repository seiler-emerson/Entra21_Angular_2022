import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumindoApiSpringComponent } from './consumindo-api-spring.component';

describe('ConsumindoApiSpringComponent', () => {
  let component: ConsumindoApiSpringComponent;
  let fixture: ComponentFixture<ConsumindoApiSpringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumindoApiSpringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumindoApiSpringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
