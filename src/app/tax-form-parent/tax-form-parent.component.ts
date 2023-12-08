import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tax-form-parent',
  templateUrl: './tax-form-parent.component.html',
  styleUrl: './tax-form-parent.component.css',
})
export class TaxFormParentComponent implements OnInit {
  taxForm: FormGroup;
  constructor(private builder: FormBuilder) {
    this.taxForm = this.builder.group({
      personInfo: this.builder.group({
        firstName: [],
      }),
    });
  }
  ngOnInit(): void {}
}
