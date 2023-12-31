import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from '../model/personModel';
import { PersonhttpService } from '../personhttp.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  response: any;
  ageFormControl: FormControl;
  nameFormControl: FormControl;
  personForm: FormGroup;
  error: any;
  constructor(private httpService: PersonhttpService, private route: Router) {
    this.ageFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{1,3}$'),
    ]);
    this.nameFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]{1,100}$'),
    ]);
    this.personForm = new FormGroup({
      age: this.ageFormControl,
      name: this.nameFormControl,
    });
  }

  createPerson() {
    const person: Person = {
      id: 1,
      age: this.personForm.get('age')?.value,
      name: this.personForm.get('name')?.value,
    };
    this.httpService.create(person).subscribe({
      next: (response) => {
        this.response = response;
        this.route.navigate(['/Login']);
      },
      error: (error) => {
        this.error = error.error;
      },
      complete: () => {},
    });
  }
}
