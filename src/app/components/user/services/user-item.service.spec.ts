import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '../../../../../node_modules/@angular/common/http/testing';
import {UserItemService} from './user-item.service';
import {AuthServiceMock} from '../../../core/test-mocks.core';
import {UserBackendService} from './user-backend.service';
import {DataService} from '../../shared/services/data.service';
import {AuthService} from '../../permission/services/auth.service';


describe('UserItemService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        UserItemService,
        { provide: AuthService, useClass: AuthServiceMock },
        UserBackendService,
        DataService
      ]
    });
  });

  it('can be created by dependency injection', () => {
    let userItemService = TestBed.get(UserItemService);
    expect(userItemService instanceof UserItemService).toBe(true);
  });

});
