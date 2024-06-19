import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjuntoDetailComponent } from './adjunto-detail.component';

describe('AdjuntoDetailComponent', () => {
  let component: AdjuntoDetailComponent;
  let fixture: ComponentFixture<AdjuntoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdjuntoDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdjuntoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
