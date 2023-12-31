import { Component, OnInit } from '@angular/core';
import { TaxhttpService } from '../taxhttp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Tax } from '../model/taxModel';

@Component({
  selector: 'app-tax-page',
  templateUrl: './tax-page.component.html',
  styleUrl: './tax-page.component.css',
})
export class TaxPageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'year', 'amount', 'actions'];
  dataSource = new MatTableDataSource<Tax>();
  personId!: number;

  constructor(
    private taxService: TaxhttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.personId = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.taxService.getAllTaxesByPersonId(this.personId).subscribe((taxes) => {
      this.dataSource.data = taxes;
    });
  }

  goToTaxForm() {
    this.router.navigate(['/TaxAdd', this.personId!]);
  }
  onDeleteTaxForm(e: number) {
    console.log(e);
    this.taxService.delete(e).subscribe({
      next: (response) => {},
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        this.router.navigate(['/Tax', this.personId!]);
      },
    });
  }
}
