import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  inputDate: any;
  addForm: FormGroup;

  @ViewChild('date') date: ElementRef;

  bsConfig: Partial<BsDatepickerConfig> = {
    containerClass: 'theme-blue',
    dateInputFormat: 'DD.MM.YYYY'
  };

  constructor() {}

  ngOnInit() {
    this.inputDate = new Date();
    let numberValidator = Validators.pattern(/^-?\d*(\.\d+)?$/);
    let dateValidator = Validators.pattern(/^(0[1-9]|[1-2][0-9]|3[0-1])\.(0[1-9]|1[0-2])\.([0-9]){4}$/); // TODO: fix date validator

    this.addForm = new FormGroup({
      date: new FormControl(this.inputDate),
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, numberValidator]),
    });
  }

  public addItem() {
    let formatedDate: string = this.date.nativeElement.value;
    let dateIsInvalid: boolean = !/^(0[1-9]|[1-2][0-9]|3[0-1])\.(0[1-9]|1[0-2])\.([0-9]){4}$/.test(formatedDate);

    if(dateIsInvalid) {
      this.addForm.controls.date.setErrors({ 'incorrect': true });
    }
    console.log(this.addForm.value);
  }

}
