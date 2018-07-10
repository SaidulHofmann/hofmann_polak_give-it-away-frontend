/* UC02-Anmelden */
/* Enables user login. */

import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {ErrorCodeType} from '../../../core/enums.core';
import {HttpErrorArgs} from '../../../core/types.core';
import {User} from '../../../models/user.model';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {DialogService} from '../../../services/dialog.service';
import {getErrorJSON} from '../../../core/errors.core';
import {NavigationService} from '../../../services/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 public message = '';

  constructor(
    public navService: NavigationService,
    private userService: UserService,
    private dialogService: DialogService) { }

  ngOnInit() {
  }

  public onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.userService.login(email, password)
      .subscribe(
        (user: User) => { this.navService.articleOverviewPage(); },
        (errorResponse: HttpErrorResponse) => {
          let errorJson = getErrorJSON(errorResponse);
          if (errorResponse.status === 401) {
            this.dialogService.inform('Anmelden',
              errorJson.message || 'E-Mail oder Passwort ungültig.');
          } else {
            this.dialogService.inform('Anmelden',
              errorJson.message || 'Bei der Anmeldung ist ein Fehler aufgetreten.');
          }
        }
      );
  }

}
