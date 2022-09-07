import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsFeedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
