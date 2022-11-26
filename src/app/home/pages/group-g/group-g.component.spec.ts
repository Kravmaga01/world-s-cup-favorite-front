import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupGComponent } from './group-g.component';

describe('GroupGComponent', () => {
  let component: GroupGComponent;
  let fixture: ComponentFixture<GroupGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
