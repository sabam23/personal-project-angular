import { FormControl } from '@angular/forms';

export interface PostForm {
  title: FormControl<string>;
  post: FormControl<string>;
  category: FormControl<string>;
  username: FormControl<string>;
  clicks: FormControl<number>;
  comments: FormControl<[]>;
  userId: FormControl<number>;
}
