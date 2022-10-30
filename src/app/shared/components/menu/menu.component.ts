import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit, AfterViewInit {

  selectItem: number = 0
  menuItems!: HTMLCollectionOf<Element>;

  constructor(
    private router: Router
  ) { }
  ngAfterViewInit(): void {
    this.menuItems = document.getElementsByClassName('menuItem');
    this.setCurrentItemSelected(window.location.pathname)
  }

  ngOnInit(): void {
  }


  selectMenuItem(item: string, index: number){
    this.menuItems[this.selectItem].classList.remove('active');
    this.menuItems[index].classList.add('active');
    this.selectItem= index;
    this.router.navigate([`/${item}`])
  }

  setCurrentItemSelected(path: string){
    if(path.includes('article')){
      this.selectMenuItem('articles', 1)
    } else if(path.includes('dashboard')){
      this.selectMenuItem('dashboard', 0)
    }
  }

}
