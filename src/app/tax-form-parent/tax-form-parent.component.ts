import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Tax } from '../model/taxModel';
import { TaxhttpService } from '../taxhttp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../model/personModel';
import { PersonhttpService } from '../personhttp.service';

@Component({
  selector: 'app-tax-form-parent',
  templateUrl: './tax-form-parent.component.html',
  styleUrl: './tax-form-parent.component.css',
})
export class TaxFormParentComponent implements OnInit {
  step1TaxForm: FormGroup;
  provinceOptions: string[] = [
    'ON',
    'QC',
    'BC',
    'NB',
    'MB',
    'NS',
    'PE',
    'SK',
    'AB',
    'NL',
  ];
  response: any;
  error: any;
  personId!: number;
  personObj!: Person;
  nameFC: FormControl;
  emailFC: FormControl;
  mailAddFC: FormControl;
  idFC: FormControl;
  dobFC: FormControl;
  provinceFC: FormControl;
  taxYearFC: FormControl;
  constructor(
    private taxService: TaxhttpService,
    private router: Router,
    private route: ActivatedRoute,
    private httpService: PersonhttpService
  ) {
    this.nameFC = new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]{1,40}$'),
    ]);
    this.emailFC = new FormControl('', [Validators.required, Validators.email]);
    this.mailAddFC = new FormControl('', [
      Validators.required,
      Validators.pattern('^.{1,30}$'),
    ]);
    this.idFC = new FormControl(
      (this.personId = parseInt(this.route.snapshot.paramMap.get('id')!, 10)),
      [Validators.required, Validators.pattern('^[0-9]{1,12}$')]
    );
    this.dobFC = new FormControl('', [Validators.required]);
    this.provinceFC = new FormControl('', [Validators.required]);
    this.taxYearFC = new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{4}$'),
    ]);
    this.step1TaxForm = new FormGroup({
      personInfo: new FormGroup({
        name: this.nameFC,
        email: this.emailFC,
      }),
      addressInfo: new FormGroup({
        mailAddress: this.mailAddFC,
        poBox: new FormControl(''),
        ruralR: new FormControl(''),
      }),
      securityInfo: new FormGroup({
        idNum: this.idFC,
        dob: this.dobFC,
        deadDOB: new FormControl(''),
      }),
      maritalInfo: new FormGroup({
        married: new FormControl(''),
        commonLaw: new FormControl(''),
        widowed: new FormControl(''),
        divorced: new FormControl(''),
        seperated: new FormControl(''),
        single: new FormControl(''),
      }),
      provinceDec: new FormControl(''),
      provinceDif: this.provinceFC,
      provinceBus: new FormControl(''),
      languageInfo: new FormGroup({
        english: new FormControl(''),
        french: new FormControl(''),
      }),
      canCitizenInfo: new FormGroup({
        becameCit: new FormControl(''),
        stoppedCit: new FormControl(''),
      }),
      taxYear: this.taxYearFC,
    });
  }
  ngOnInit() {
    this.personId = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.httpService.getPerson(this.personId).subscribe({
      next: (response) => {
        this.personObj = response;
        if (this.personObj != undefined) {
        }
      },
      error: (errorResponse) => {
        this.personObj = errorResponse.error;
      },
    });
  }
  onTaxSubmit() {
    const tax: Tax = {
      id: 1,
      taxAmount: Math.random() * (1001 - 50) + 50,
      year: this.step1TaxForm.get('taxYear')?.value,
      person: this.personObj,
    };
    this.taxService.create(tax).subscribe({
      next: (response) => {
        this.response = response;
      },
      error: (error) => {
        console.log(error);
        this.error = error.error;
      },
      complete: () => {
        this.router.navigate(['/Tax', this.personId!]);
      },
    });
  }
}
