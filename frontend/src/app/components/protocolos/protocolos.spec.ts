import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Protocolos } from './protocolos';

describe('Protocolos', () => {
  let component: Protocolos;
  let fixture: ComponentFixture<Protocolos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Protocolos],
    }).compileComponents();

    fixture = TestBed.createComponent(Protocolos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
