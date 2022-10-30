import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-macerate',
  templateUrl: './create-macerate.component.html',
  styleUrls: ['./create-macerate.component.less']
})
export class CreateMacerateComponent implements OnInit {
  articleType!: number;
  complementsForm!: UntypedFormGroup;
  listOfControl: Array<{ id: number; controlInstance: string; controlInstance2: string;}> = [];

  constructor(private fb: UntypedFormBuilder) { 
    this.complementsForm = this.fb.group({});
    this.addField();
  }

  ngOnInit(): void {
  }

  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;

    const control = {
      id,
      controlInstance: `passenger${id}`,
      controlInstance2: `passenger2${id}`,
    };
    const index = this.listOfControl.push(control);
    this.complementsForm.addControl(
      this.listOfControl[index - 1].controlInstance,
      new UntypedFormControl(null, Validators.required)
    );
    this.complementsForm.addControl(
      this.listOfControl[index - 1].controlInstance2,
      new UntypedFormControl(null, Validators.required)
    );
  }

  removeField(i: { id: number; controlInstance: string; controlInstance2: string; }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfControl.length > 1) {
      const index = this.listOfControl.indexOf(i);
      this.listOfControl.splice(index, 1);
      console.log(this.listOfControl);
      this.complementsForm.removeControl(i.controlInstance);
      this.complementsForm.removeControl(i.controlInstance2);
    }
  }

}
