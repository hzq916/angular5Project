import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPlayComponent } from './test-play.component';

describe('TestPlayComponent', () => {
  let component: TestPlayComponent;
  let fixture: ComponentFixture<TestPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
