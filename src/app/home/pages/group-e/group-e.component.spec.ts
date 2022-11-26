import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupEComponent } from './group-e.component';

describe('GroupEComponent', () => {
  let component: GroupEComponent;
  let fixture: ComponentFixture<GroupEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
