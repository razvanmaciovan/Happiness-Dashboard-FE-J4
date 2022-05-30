import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsPollComponent } from './statistics-poll.component';

describe('StatisticsPollComponent', () => {
  let component: StatisticsPollComponent;
  let fixture: ComponentFixture<StatisticsPollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsPollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
