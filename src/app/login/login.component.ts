import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonhttpService } from '../personhttp.service';
import { Person } from '../model/personModel';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  object: any;
  idFC: FormControl;
  displayedColumns: string[] = ['id', 'name', 'age'];
  dataSource = new MatTableDataSource<Person>();

  constructor(private httpService: PersonhttpService, private router: Router) {
    //Called on instantiation

    this.idFC = new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{1,12}$'),
    ]);

    this.loginForm = new FormGroup({
      personName: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z][A-Z]'),
      ]),
      personID: this.idFC,
    });
  }

  ngOnInit(): void {
    //Called after constructor and called after the first ngOnChanges()
    this.httpService.getAllPersons().subscribe((persons) => {
      this.dataSource.data = persons;
    });
  }

  onClearFields() {
    console.log('Clearing!');
    this.loginForm.reset();
    //this.personName.setValue('');
  }

  onLoginAttempt() {
    console.log('Response from server:');
    this.httpService
      .getPerson(this.loginForm.get('personID')?.value)
      .subscribe({
        next: (response) => {
          console.log('Response from server:', response);
          // this.object = response;
          // console.log('Found: ' + this.object.toString());
          if (response != undefined) {
            this.router.navigate(['/PersonPage', response.id]);
          } else {
            this.router.navigate(['/AppComponent']);
          }
        },
        error: (error) => {
          console.error('Error from server:', error);
        },
        complete: () => {},
      });
  }
}
