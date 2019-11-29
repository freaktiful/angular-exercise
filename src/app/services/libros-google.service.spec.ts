import { TestBed } from '@angular/core/testing';

import { LibrosGoogleService } from './libros-google.service';

describe('LibrosGoogleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibrosGoogleService = TestBed.get(LibrosGoogleService);
    expect(service).toBeTruthy();
  });
});
