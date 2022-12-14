import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FootBallteamService } from 'src/app/services/football-team.service';
import { GroupModel } from '../../../models/group.model';

@Component({
  selector: 'app-grups',
  templateUrl: './grups.component.html',
  styleUrls: ['./grups.component.scss'],
})
export class GrupsComponent implements OnInit {
  public countries$: Observable<GroupModel[]> | undefined;
  constructor(private readonly cuontryService: FootBallteamService) {}
  ngOnInit(): void {
    this.countries$ = this.cuontryService.getGroups();
    this.countries$.subscribe((countries) => {
      console.log({
        countries,
      });
    });
  }
}
