import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {LoginService} from "../../../login/services/login.service";
import {Observable} from "rxjs";
import {User} from "../../../login/interfaces/user.interface";

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  user = new Observable<User>();

  ngOnInit(): void {
    this.loginService.getStudentData(this.loginService.loggedId)
  }

}
