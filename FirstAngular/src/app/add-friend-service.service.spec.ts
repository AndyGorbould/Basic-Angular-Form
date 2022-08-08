import { TestBed } from '@angular/core/testing';

import { AddFriendServiceService } from './add-friend-service.service';

describe('AddFriendServiceService', () => {
  let service: AddFriendServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddFriendServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
