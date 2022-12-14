import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FootBallTeamModel } from 'src/app/models/country.model';
import { FootBallteamService } from 'src/app/services/football-team.service';

@Component({
  selector: 'app-selections',
  templateUrl: './selections.component.html',
  styleUrls: ['./selections.component.scss'],
})
export class SelectionsComponent implements OnInit {
  public footballTeams$: Observable<FootBallTeamModel[]> | undefined;
  constructor(private readonly cuontryService: FootBallteamService) {}
  ngOnInit(): void {
    this.footballTeams$ = this.cuontryService.getFootBallTeams();
    this.footballTeams$.subscribe((countries) => {
      console.log({
        countries,
      });
    });
  }
}
