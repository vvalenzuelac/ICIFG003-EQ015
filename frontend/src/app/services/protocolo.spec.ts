import { TestBed } from '@angular/core/testing';

import { Protocolo } from './protocolo';

describe('Protocolo', () => {
  let service: Protocolo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Protocolo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
