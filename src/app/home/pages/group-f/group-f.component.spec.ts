import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupFComponent } from './group-f.component';

describe('GroupFComponent', () => {
  let component: GroupFComponent;
  let fixture: ComponentFixture<GroupFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
