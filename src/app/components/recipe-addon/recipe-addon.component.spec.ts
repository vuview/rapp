import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAddonComponent } from './recipe-addon.component';

describe('RecipeAddonComponent', () => {
  let component: RecipeAddonComponent;
  let fixture: ComponentFixture<RecipeAddonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeAddonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeAddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
