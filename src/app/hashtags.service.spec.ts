import { TestBed, inject } from '@angular/core/testing';

import { HashtagsServiceService } from './hashtags-service.service';

describe('HashtagsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HashtagsServiceService]
    });
  });

  it('should ...', inject([HashtagsServiceService], (service: HashtagsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
