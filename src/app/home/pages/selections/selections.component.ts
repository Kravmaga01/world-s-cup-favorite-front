import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryModel } from 'src/app/models/country.model';
import { CuontriesService } from 'src/app/services/cuontries.service';

@Component({
  selector: 'app-selections',
  templateUrl: './selections.component.html',
  styleUrls: ['./selections.component.scss'],
})
export class SelectionsComponent implements OnInit {
  public countries$: Observable<CountryModel[]> | undefined;
  constructor(private readonly cuontryService: CuontriesService) {}
  ngOnInit(): void {
    this.countries$ = this.cuontryService.getCoutries();
    this.countries$.subscribe((countries) => {
      console.log({
        countries,
      });
    });
  }
}
