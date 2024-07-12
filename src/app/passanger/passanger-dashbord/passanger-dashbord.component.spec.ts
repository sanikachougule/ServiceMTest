import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassangerDashbordComponent } from './passanger-dashbord.component';

describe('PassangerDashbordComponent', () => {
  let component: PassangerDashbordComponent;
  let fixture: ComponentFixture<PassangerDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassangerDashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassangerDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
