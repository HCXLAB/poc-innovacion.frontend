import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioDetailComponent } from './desafio-detail.component';

describe('DesafioDetailComponent', () => {
  let component: DesafioDetailComponent;
  let fixture: ComponentFixture<DesafioDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesafioDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesafioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
