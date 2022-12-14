import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FootBallTeamModel } from '../models/country.model';
import { GroupModel } from '../models/group.model';

@Injectable({
  providedIn: 'root',
})
export class FootBallteamService {
  constructor(private readonly http: HttpClient) {}

  ENDPOINTFOOTBALLTEAM$ =
    'https://world-s-cup-favorite-back-production.up.railway.app/api/v1/football_team/';
  ENDPOINTGROUPS$ =
    'https://world-s-cup-favorite-back-production.up.railway.app/api/v1/football_team/groups';

  getFootBallTeams(): Observable<FootBallTeamModel[]> {
    return this.http.get<FootBallTeamModel[]>(this.ENDPOINTFOOTBALLTEAM$);
  }

  getGroups(): Observable<GroupModel[]> {
    return this.http.get<GroupModel[]>(this.ENDPOINTGROUPS$);
  }
}
