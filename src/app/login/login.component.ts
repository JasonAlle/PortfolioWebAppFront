import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor() {
    //Called on instantiation
    this.loginForm = new FormGroup({
      personName: new FormControl(''),
      personID: new FormControl(''),
    });
  }

  ngOnInit(): void {
    //Called after constructor and called after the first ngOnChanges()
  }

  onClearFields() {
    this.loginForm.reset();
    //this.personName.setValue('');
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
