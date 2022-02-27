import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DashboardApiService } from './dashboard-api.service';
import { Member } from '../models/Member';

describe('DashboardApiService', () => {
  let httpTestingController: HttpTestingController;
  let service: DashboardApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DashboardApiService]
    });

    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(DashboardApiService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it(`#getData should return expected data`, (done) => {
    const expectedData = new Member();
    expectedData.id = '60d0fe4f5311236168a109ca';
    expectedData.title = 'ms';
    expectedData.firstName = 'Sara';
    expectedData.lastName = 'Andersen';
    expectedData.picture = 'https://randomuser.me/api/portraits/women/58.jpg';

    service.getData().subscribe((data:any) => {
      expect(data).toEqual(expectedData);
      done();
    });
    

    const testRequest = httpTestingController.expectOne('https://dummyapi.io/data/v1/user?limit=10');

    testRequest.flush(expectedData);
  });

  it(`#getData should use GET to retrieve data`, () => {
    service.getData().subscribe();

    const testRequest = httpTestingController.expectOne('https://dummyapi.io/data/v1/user?limit=10');

    expect(testRequest.request.method).toEqual('GET');
  });
});
