import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AllGamesComponent } from './pages/all-games/all-games.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'allGames',
        component: AllGamesComponent,
      },
      {
        path: 'grou',
        component: AllGamesComponent,
      },

      {
        path: '**',
        redirectTo: 'allGames',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
