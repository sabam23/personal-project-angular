import { FormControl} from "@angular/forms";

export interface StudentForm{
  firstname: FormControl<string>;
  lastname: FormControl<string>;
  age: FormControl<number>;
  email: FormControl<string>;
  password: FormControl<string>;
  repeatPassword: FormControl<string>;
  userPosts: FormControl
}
