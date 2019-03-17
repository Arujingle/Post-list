import { TestBed } from '@angular/core/testing';

import { TaskRestService } from './task-rest.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TaskRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: TaskRestService = TestBed.get(TaskRestService);
    expect(service).toBeTruthy();
  });
});
