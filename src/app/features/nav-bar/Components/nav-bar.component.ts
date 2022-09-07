import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {LoginService} from "../../login/services/login.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection:  ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.currentUsername.subscribe();
  }

}
