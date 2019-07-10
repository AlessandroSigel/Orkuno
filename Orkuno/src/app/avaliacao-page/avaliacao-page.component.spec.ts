import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoPageComponent } from './avaliacao-page.component';

describe('AvaliacaoPageComponent', () => {
  let component: AvaliacaoPageComponent;
  let fixture: ComponentFixture<AvaliacaoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliacaoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
