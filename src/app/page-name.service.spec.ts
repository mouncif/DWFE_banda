import { TestBed } from '@angular/core/testing';

import { PageNameService } from './page-name.service';

describe('PageNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageNameService = TestBed.get(PageNameService);
    expect(service).toBeTruthy();
  });
});
