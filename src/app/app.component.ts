import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, DoCheck{
  isLogged = false;

  constructor(
    private authService: AuthService
  ){}

  ngOnInit() {
  }

  ngDoCheck(): void {
    this.isLogged = this.authService.isAuthenticated()
  }
}
