import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenUtils } from 'src/app/core/utils/token';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  userEmail = ""

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('email') as string
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/login']);
  }

}
