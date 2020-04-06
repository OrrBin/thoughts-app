import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { HomeComponent } from './home.component';
import { Shell } from '@app/shell/shell.service';
import { UserPageComponent } from './user-page/user-page.component';
import { SnapshotPageComponent } from './snapshot-page/snapshot-page.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { title: extract('Home') } },
    { path: 'user-page/:id', component: UserPageComponent },
    { path: 'snapshot/:userId/:id', component: SnapshotPageComponent },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HomeRoutingModule {}
