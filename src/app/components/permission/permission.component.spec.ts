import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PermissionComponent } from './permission.component';
import {RouterTestingModule} from '../../../../node_modules/@angular/router/testing';
import {HttpClientTestingModule} from '../../../../node_modules/@angular/common/http/testing';
import {SharedModule} from '../shared/shared.module';
import {PermissionService} from './services/permission.service';
import {PermissionItemComponent} from './permission-item/permission-item.component';
import {AuthService} from './services/auth.service';
import {AuthServiceMock} from '../../../testing/mocks.test';


describe('PermissionComponent', () => {
  let component: PermissionComponent;
  let fixture: ComponentFixture<PermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, SharedModule],
      declarations: [ PermissionComponent, PermissionItemComponent ],
      providers: [
        { provide: AuthService, useClass: AuthServiceMock },
        PermissionService
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(PermissionComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('can be created by dependency injection', () => {
    expect(component instanceof PermissionComponent).toBe(true);
  });
});
