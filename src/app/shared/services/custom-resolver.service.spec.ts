import { TestBed } from '@angular/core/testing';

import { CustomResolverService } from './custom-resolver.service';

describe('CustomResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomResolverService = TestBed.get(CustomResolverService);
    expect(service).toBeTruthy();
  });
});
