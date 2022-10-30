import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Article{
  type: string;
  name: string;
  expiredDate: string;
  state: string;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.less']
})
export class ArticlesComponent implements OnInit {
  isVisible = false;
  isConfirmLoading = false;
  listOfColumn = [
    {
      title: 'Tipo',
      compare: (a: Article, b: Article) => a.type.localeCompare(b.type),
      priority: 1
    },
    {
      title: 'Name',
      compare: (a: Article, b: Article) => a.name.localeCompare(b.name),
      priority: 1
    },
    {
      title: 'Fecha de vencimiento',
      compare: (a: Article, b: Article) => a.expiredDate.localeCompare(b.expiredDate),
      priority: 2
    },
    {
      title: 'Estado',
      compare: (a: Article, b: Article) => a.state.localeCompare(b.state),
      priority: 3
    }
  ];
  listOfComplements: Article[] = [{
    type: "Producto",
    name: "Producto 1",
    expiredDate: "2024-09-08",
    state: "Activo"
  },
  {
    type: "Alimento",
    name: "Alimento 1",
    expiredDate: "2023-09-02",
    state: "Activo"
  },
  {
    type: "Alimento",
    name: "Alimento 2",
    expiredDate: "2023-08-19",
    state: "Inactivo"
  },
  {
    type: "Macerado",
    name: "Macerado 1",
    expiredDate: "2023-10-14",
    state: "Activo"
  },]

  constructor( protected router: Router) { }

  ngOnInit(): void {
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
