import { TestBed, inject, async, ComponentFixture } from '@angular/core/testing';
import { ArticleService } from './article.service';
import {HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import {MessageService} from '../../shared/services/message.service';
import { testArticleResponse, testArticleObj } from '../../../core/test-data-provider.core';
import {defer} from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';
import {UserService} from '../../user/services/user.service';

describe('ArticleService', () => {
  let articleService: ArticleService;
  let httpClientSpy: { get: jasmine.Spy, put: jasmine.Spy, post: jasmine.Spy, delete: jasmine.Spy };
  let userServiceSpy: jasmine.SpyObj<UserService>;
  let messageServiceSpy: jasmine.SpyObj<MessageService>;



  // beforeEach(() => {
  //   // Create service mocks as spy objects.
  //   httpClientSpy = jasmine.createSpyObj(
  //     'HttpClient', ['get', 'put', 'post', 'delete']);
  //   userServiceSpy = jasmine.createSpyObj(
  //     'UserService', ['currentUser']);
  //   messageServiceSpy = jasmine.createSpyObj(
  //     'MessageService', ['add']);
  //
  //   articleService = new ArticleService(<any> httpClientSpy, userServiceSpy, messageServiceSpy);
  //
  //   TestBed.configureTestingModule({
  //     providers: [ ArticleService, HttpClient, UserService, MessageService, HttpHandler ]
  //   });
  //
  // });

  it('can be created by dependency injection',
    inject([ArticleService], (service: ArticleService) => {
    expect(service instanceof ArticleService).toBe(true);
  }));

  // it('#getArticleById should return an article', (done: DoneFn) => {
  //   httpClientSpy.get.and.returnValue((of(testArticleResponse)));
  //   expect(httpClientSpy.get('url')).toBe(of(testArticleResponse));
  //
  //   expect(articleService.getArticleById('id').subscribe(
  //     (article) => { expect(article).toEqual(testArticleObj);
  //       done();
  //       },
  //     (error) => { fail('Error occurred calling getArticleById(): ' + error.message);
  //       done();
  //     })
  //   );
  // });


  /** Create async observable that emits-once and completes
   *  after a JS engine turn */
  function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
  }

  /** Create async observable error that errors
   *  after a JS engine turn */
  function asyncError<T>(errorObject: any) {
    return defer(() => Promise.reject(errorObject));
  }

});