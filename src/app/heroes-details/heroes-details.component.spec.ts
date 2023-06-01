import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesDetailsComponent } from './heroes-details.component';

describe('HeroesDetailsComponent', () => {
  let component: HeroesDetailsComponent;
  let fixture: ComponentFixture<HeroesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesDetailsComponent]
    });
    fixture = TestBed.createComponent(HeroesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
