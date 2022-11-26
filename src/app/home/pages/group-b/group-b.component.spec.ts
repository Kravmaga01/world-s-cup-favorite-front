import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupBComponent } from './group-b.component';

describe('GroupBComponent', () => {
  let component: GroupBComponent;
  let fixture: ComponentFixture<GroupBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
