import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from '../model/personModel';
import { PersonhttpService } from '../personhttp.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrl: './person-edit.component.css',
})
export class PersonEditComponent implements OnInit {
  ageFormControl: FormControl;
  nameFormControl: FormControl;
  personForm: FormGroup;
  personId!: number;
  error: any;

  constructor(
    private httpService: PersonhttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {
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
  ngOnInit() {
    this.personId = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
  }
  editPerson() {
    const person: Person = {
      id: this.personId,
      age: this.personForm.get('age')?.value,
      name: this.personForm.get('name')?.value,
    };
    this.httpService.update(this.personId, person).subscribe({
      next: (response) => {},
      error: (error) => {
        this.error = error.error;
      },
      complete: () => {
        this.router.navigate(['/PersonPage', this.personId]);
      },
    });
  }
}
