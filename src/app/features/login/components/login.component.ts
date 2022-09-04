import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validator, ValidatorFn, Validators} from "@angular/forms";
import {passwordValidator} from "../../../core/validators/password.validator";
import {StudentForm} from "../interfaces/studentform.interface";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl<string>('',[Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required, Validators.pattern("[A-Za-z0-9]+"), Validators.minLength(7)])
  })

  registerForm = new FormGroup(<StudentForm>{
    name: new FormControl<string>('' , [Validators.required, Validators.pattern('^[a-zA-Z-]*$')]),
    lastname: new FormControl<string>('', [Validators.required,Validators.pattern('^[a-zA-Z-]*$')]),
    age: new FormControl<number>(NaN, [Validators.required,Validators.pattern('^[0-9]*$'),Validators.min(18),Validators.max(35)]),
    course: new FormControl<number>(1, [Validators.required,Validators.pattern('^[0-9]*$')]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required, Validators.pattern("[A-Za-z0-9]+"), Validators.minLength(7)]),
    repeatPassword: new FormControl<string>('', [Validators.required, Validators.pattern("[A-Za-z0-9]+"),Validators.minLength(7),passwordValidator])
  },{validators: passwordValidator});

  loginPage: boolean = true;
  registerPage: boolean = false;
}
