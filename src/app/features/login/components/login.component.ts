import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../../../core/validators/password.validator';
import { StudentForm } from '../interfaces/userform.interface';
import { LoginService } from '../../shared/services/login.service';
import { User } from '../../shared/interfaces/user.interface';
import { LoginForm } from '../interfaces/loginForm.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.getFullData();
  }

  addStudent(): void {
    if (this.registerForm.valid) {
      this.loginService.addStudent(this.registerForm.value as User).subscribe();
      window.alert('Student Registered!');
      this.registerForm.reset();
      this.getFullData();
    }
  }

  usersArray: User[] = [];

  getFullData(): void {
    this.loginService.getFullData().subscribe((data) => {
      this.usersArray = data;
    });
  }

  loggedUser: object = {};

  getStudentData(id: number): void {
    this.loginService.getStudentData(id).subscribe((data) => {
      this.loggedUser = data;
    });
  }

  login(): void {
    for (let user of this.usersArray) {
      if (this.loginForm.get('email')?.value === user.email) {
        if (user.password === this.loginForm.get('password')?.value) {
          this.loginService.isLoggedIn = true;
          this.loginService.loggedId = user.id;
          this.loginService.changeName(`${user.firstname} ${user.lastname}`);
          this.router.navigateByUrl('/forum').then();
          this.registerForm.reset();
          break;
        } else {
          this.loginForm.get('password')?.setErrors({ password: true });
          break;
        }
      } else {
        let emails = [];
        for (let student of this.usersArray) {
          emails.push(student.email);
        }
        if (this.loginForm.get('email')?.value === '') {
          this.loginForm.get('email')?.setErrors({ empty: true });
        } else if (!emails.includes(`${this.loginForm.get('email')?.value}`)) {
          this.loginForm.get('email')?.setErrors({ account: true });
        }
      }
    }
  }

  loginForm = new FormGroup<LoginForm>(<LoginForm>{
    email: new FormControl<string>('', [Validators.email]),
    password: new FormControl<string>('', [Validators.required]),
  });

  registerForm = new FormGroup(
    <StudentForm>{
      firstname: new FormControl<string>('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z-]*$'),
      ]),
      lastname: new FormControl<string>('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z-]*$'),
      ]),
      age: new FormControl<number>(NaN, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(18),
        Validators.max(35),
      ]),
      email: new FormControl<string>('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl<string>('', [
        Validators.required,
        Validators.pattern('[A-Za-z0-9]+'),
        Validators.minLength(7),
      ]),
      repeatPassword: new FormControl<string>('', [
        Validators.required,
        Validators.pattern('[A-Za-z0-9]+'),
        Validators.minLength(7),
        passwordValidator,
      ]),
    },
    { validators: passwordValidator }
  );

  //for UI
  loginPage: boolean = true;
  registerPage: boolean = false;
}
