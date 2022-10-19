import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

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
