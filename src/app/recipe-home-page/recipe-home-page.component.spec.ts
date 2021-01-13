import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeHomePageComponent } from './recipe-home-page.component';

describe('RecipeHomePageComponent', () => {
  let component: RecipeHomePageComponent;
  let fixture: ComponentFixture<RecipeHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
