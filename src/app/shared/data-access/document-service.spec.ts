import { TestBed } from '@angular/core/testing';

import { DocumentService } from './document-service';
import { provideZonelessChangeDetection } from '@angular/core';

describe('DocumentService', () => {
  let service: DocumentService;
  let fixture: TestBed;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
      ]
    });
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
