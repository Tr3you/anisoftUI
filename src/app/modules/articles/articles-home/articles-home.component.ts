import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles-home',
  templateUrl: './articles-home.component.html',
  styleUrls: ['./articles-home.component.less']
})
export class ArticlesHomeComponent implements OnInit {

  constructor(
    protected router: Router
  ) { }

  ngOnInit(): void {
  }

}
