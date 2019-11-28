import { TestBed } from '@angular/core/testing';

import { TareasStoreService } from './tareas-store.service';

describe('TareasStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TareasStoreService = TestBed.get(TareasStoreService);
    expect(service).toBeTruthy();
  });
});
