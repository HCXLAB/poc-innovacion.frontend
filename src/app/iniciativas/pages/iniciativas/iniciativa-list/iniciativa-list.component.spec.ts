import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciativaListComponent } from './iniciativa-list.component';

describe('IniciativaListComponent', () => {
  let component: IniciativaListComponent;
  let fixture: ComponentFixture<IniciativaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IniciativaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciativaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
