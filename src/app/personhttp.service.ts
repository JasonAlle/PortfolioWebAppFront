import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from './model/personModel';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonhttpService {
  url = 'http://DESKTOP-6S9IS4L:8080/warrouter/api/person/';
  persons: any;
  constructor(private http: HttpClient) {}

  getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.url}${id}`).pipe(
      catchError((error) => {
        console.error('Error in getPerson:', error);
        // Optionally, you can re-throw the error to propagate it further
        return throwError(() => error);
      })
    );
  }

  getAllPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url + 'findAll/');
  }

  delete(personsId: number) {
    return this.http.delete(this.url + 'delete/' + personsId);
  }

  create(person: Person) {
    return this.http.post(this.url + 'insert/', person);
  }

  update(idParam: number, personParam: Person) {
    const params = new HttpParams()
      .set('id', idParam)
      .set('object', JSON.stringify(personParam));
    console.log('Parameters: ' + { params });
    console.log(this.http.put(this.url + 'edit/' + idParam, { params }));
    return this.http.put(this.url + 'edit/' + idParam, personParam);
  }
}
