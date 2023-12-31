import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Tax } from './model/taxModel';

@Injectable({
  providedIn: 'root',
})
export class TaxhttpService {
  url = 'http://DESKTOP-6S9IS4L:8080/warrouter/api/tax/';
  constructor(private http: HttpClient) {}

  getTax(id: number): Observable<Tax | undefined> {
    return this.http.get<Tax>(`${this.url}${id}`).pipe(
      catchError((error) => {
        console.error('Error in getTax:', error);
        // Optionally, you can re-throw the error to propagate it further
        return throwError(() => error);
      })
    );
  }

  getAllTaxes(): Observable<Tax[]> {
    return this.http.get<Tax[]>(this.url + 'findAll/');
  }
  getAllTaxesByPersonId(personId: number): Observable<Tax[]> {
    return this.http.get<Tax[]>(
      `${this.url + 'findAllTaxesByPersonId/'}${personId}`
    );
  }

  delete(taxesId: number) {
    return this.http.delete(this.url + 'delete/' + taxesId);
  }

  create(tax: Tax) {
    console.log(tax);
    return this.http.post(this.url + 'insert/', tax);
  }

  update(tax: Tax) {
    return this.http.put(this.url + 'edit/' + tax.id, tax);
  }
}
