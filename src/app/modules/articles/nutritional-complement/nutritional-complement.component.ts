import { Component, OnInit } from '@angular/core';

interface Complement{
  name: string;
  creationDate: string;
  state: string;
}

@Component({
  selector: 'app-nutritional-complement',
  templateUrl: './nutritional-complement.component.html',
  styleUrls: ['./nutritional-complement.component.less']
})
export class NutritionalComplementComponent implements OnInit {
  isVisible = false;
  isConfirmLoading = false;
  listOfColumn = [
    {
      title: 'Name',
      compare: (a: Complement, b: Complement) => a.name.localeCompare(b.name),
      priority: 1
    },
    {
      title: 'Fecha de creacion',
      compare: (a: Complement, b: Complement) => a.creationDate.localeCompare(b.creationDate),
      priority: 2
    },
    {
      title: 'Estado',
      compare: (a: Complement, b: Complement) => a.state.localeCompare(b.state),
      priority: 3
    }
  ];
  listOfComplements: Complement[] = [{
    name: "Proteina",
    creationDate: "2022-09-08",
    state: "Activo"
  },
  {
    name: "Hierro",
    creationDate: "2022-09-02",
    state: "Activo"
  },
  {
    name: "Vitamina B1",
    creationDate: "2022-08-19",
    state: "Inactivo"
  },
  {
    name: "Vitamina B6",
    creationDate: "2022-10-14",
    state: "Activo"
  },]

  constructor() { }

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
