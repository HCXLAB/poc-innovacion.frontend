import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NubepalabrasComponent } from './nubepalabras.component';

describe('NubepalabrasComponent', () => {
  let component: NubepalabrasComponent;
  let fixture: ComponentFixture<NubepalabrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NubepalabrasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NubepalabrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
