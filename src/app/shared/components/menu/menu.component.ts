import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit, AfterViewInit {

  selectItem: number = 0
  menuItems!: HTMLCollectionOf<Element>;

  constructor() { }
  ngAfterViewInit(): void {
    this.menuItems = document.getElementsByClassName('menuItem');
  }

  ngOnInit(): void {
  }

  selectMenuItem(item: string, index: number){
    this.menuItems[this.selectItem].classList.remove('active');
    this.menuItems[index].classList.add('active');
    this.selectItem= index;
  }

}
