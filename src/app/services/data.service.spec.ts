import { TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { MockDataService } from './mock-data.service';

describe('DataService', () => {
    // let service: DataService;
    const mockService = new MockDataService();

    beforeEach(() => {
        // service = TestBed.get(DataService);
        TestBed.configureTestingModule({
      imports: [HttpClientModule],
    // providers: [DataService, MockDataService]
  });
});

    it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
