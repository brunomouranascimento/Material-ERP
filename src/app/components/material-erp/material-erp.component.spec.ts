import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialErpComponent } from './material-erp.component';

describe('MaterialErpComponent', () => {
  let component: MaterialErpComponent;
  let fixture: ComponentFixture<MaterialErpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialErpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialErpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
