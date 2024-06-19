import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPublicationsComponent } from './latest-publications.component';

describe('LatestPublicationsComponent', () => {
  let component: LatestPublicationsComponent;
  let fixture: ComponentFixture<LatestPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestPublicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
