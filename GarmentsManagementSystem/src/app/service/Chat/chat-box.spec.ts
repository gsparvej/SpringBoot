import { TestBed } from '@angular/core/testing';

import { ChatBox } from './chat-box';

describe('ChatBox', () => {
  let service: ChatBox;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatBox);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
