import { Component, OnInit } from '@angular/core';
import { CuontriesService } from './services/cuontries.service';
import { CountryModel } from './models/country.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'words-cup';
  // public countries$: Observable<CountryModel[]> | undefined;
  // constructor(private readonly cuontryService: CuontriesService) {}
  ngOnInit(): void {}
}
