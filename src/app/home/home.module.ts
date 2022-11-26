import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllGamesComponent } from './pages/all-games/all-games.component';
import { GroupAComponent } from './pages/group-a/group-a.component';
import { GroupBComponent } from './pages/group-b/group-b.component';
import { GroupCComponent } from './pages/group-c/group-c.component';
import { GroupDComponent } from './pages/group-d/group-d.component';
import { GroupEComponent } from './pages/group-e/group-e.component';
import { GroupFComponent } from './pages/group-f/group-f.component';
import { GroupGComponent } from './pages/group-g/group-g.component';
import { GroupHComponent } from './pages/group-h/group-h.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AllGamesComponent,
    GroupAComponent,
    GroupBComponent,
    GroupCComponent,
    GroupDComponent,
    GroupEComponent,
    GroupFComponent,
    GroupGComponent,
    GroupHComponent,
    HomeComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
