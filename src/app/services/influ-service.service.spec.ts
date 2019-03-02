import { TestBed } from '@angular/core/testing';

import { InfluServiceService } from './influ-service.service';

describe('InfluServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfluServiceService = TestBed.get(InfluServiceService);
    expect(service).toBeTruthy();
  });
});
