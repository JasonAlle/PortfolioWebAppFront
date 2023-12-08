import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-tax-personinfo-child',
  templateUrl: './tax-personinfo-child.component.html',
  styleUrl: './tax-personinfo-child.component.css',
})
export class TaxPersoninfoChildComponent implements OnInit {
  @Input() formGroupName!: string;

  form: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

  ngOnInit(): void {}
}
