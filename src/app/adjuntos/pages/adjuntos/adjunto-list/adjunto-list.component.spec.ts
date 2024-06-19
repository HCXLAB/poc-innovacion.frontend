import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjuntoListComponent } from './adjunto-list.component';

describe('AdjuntoListComponent', () => {
  let component: AdjuntoListComponent;
  let fixture: ComponentFixture<AdjuntoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdjuntoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdjuntoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
