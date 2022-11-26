import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupHComponent } from './group-h.component';

describe('GroupHComponent', () => {
  let component: GroupHComponent;
  let fixture: ComponentFixture<GroupHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
