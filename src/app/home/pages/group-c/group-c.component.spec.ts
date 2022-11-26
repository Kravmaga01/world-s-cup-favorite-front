import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCComponent } from './group-c.component';

describe('GroupCComponent', () => {
  let component: GroupCComponent;
  let fixture: ComponentFixture<GroupCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
