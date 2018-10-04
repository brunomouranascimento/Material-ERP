import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaceBarComponent } from './pace-bar.component';

describe('PaceBarComponent', () => {
  let component: PaceBarComponent;
  let fixture: ComponentFixture<PaceBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaceBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaceBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
