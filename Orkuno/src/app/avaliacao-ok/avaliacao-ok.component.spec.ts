import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoOKComponent } from './avaliacao-ok.component';

describe('AvaliacaoOKComponent', () => {
  let component: AvaliacaoOKComponent;
  let fixture: ComponentFixture<AvaliacaoOKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliacaoOKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaoOKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
