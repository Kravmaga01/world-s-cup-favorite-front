import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FootBallTeamModel } from 'src/app/models/country.model';
import { FootBallteamService } from 'src/app/services/football-team.service';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.scss'],
})
export class AllGamesComponent implements OnInit {
  public countries$: Observable<FootBallTeamModel[]> | undefined;
  constructor(private readonly footBallteamService: FootBallteamService) {}
  ngOnInit(): void {
    this.countries$ = this.footBallteamService.getFootBallTeams();
    this.countries$.subscribe((countries) => {
      console.log({
        countries,
      });
    });
  }
}
