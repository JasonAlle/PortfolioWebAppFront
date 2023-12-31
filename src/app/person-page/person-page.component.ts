import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../model/personModel';
import { PersonhttpService } from '../personhttp.service';

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrl: './person-page.component.css',
})
export class PersonPageComponent {
  person: Person | undefined;
  constructor(
    private httpService: PersonhttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Called after constructor and called after the first ngOnChanges()
    const personId = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.httpService.getPerson(personId).subscribe({
      next: (response) => {
        this.person = response;
        if (this.person != undefined) {
        }
      },
      error: (errorResponse) => {
        this.person = errorResponse.error;
      },
    });
  }
  onEdit() {
    this.router.navigate(['/EditPerson', this.person!.id!]);
  }
  onDelete() {
    this.httpService.delete(this.person?.id!).subscribe({
      next: (response) => {
        console.log('Response from server:', response);
      },
      error: (errorResponse) => {
        console.error('Error from server:', errorResponse);
      },
      complete: () => {
        this.router.navigate(['/Login']);
      },
    });
  }
  onTax() {
    this.router.navigate(['/Tax', this.person!.id!]);
  }
}
