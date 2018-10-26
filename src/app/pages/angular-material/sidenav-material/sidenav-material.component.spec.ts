import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavMaterialComponent } from './sidenav-material.component';

describe('SidenavMaterialComponent', () => {
  let component: SidenavMaterialComponent;
  let fixture: ComponentFixture<SidenavMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
