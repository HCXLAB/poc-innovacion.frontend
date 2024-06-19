import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciativaDetailComponent } from './iniciativa-detail.component';

describe('IniciativaDetailComponent', () => {
  let component: IniciativaDetailComponent;
  let fixture: ComponentFixture<IniciativaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IniciativaDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciativaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
