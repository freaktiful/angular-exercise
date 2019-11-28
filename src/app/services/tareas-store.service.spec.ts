import { TestBed } from '@angular/core/testing';

import { TareasStoreService } from './tareas-store.service';
import { TareasModule } from '../tareas/tareas.module';

describe('TareasStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ TareasModule ]
  }));

  it('should be created', () => {
    const service: TareasStoreService = TestBed.get(TareasStoreService);
    expect(service).toBeTruthy();
  });
});
