import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import { UserPageComponent } from './user-page/user-page.component';
import { SnapshotPageComponent } from './snapshot-page/snapshot-page.component';
import { FeelingsComponent } from './feelings/feelings.component';
import { ImageComponent } from './image/image.component';
import { PositionComponent } from './position/position.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, HomeRoutingModule, MatCardModule],
  declarations: [
    HomeComponent,
    UserPageComponent,
    SnapshotPageComponent,
    FeelingsComponent,
    ImageComponent,
    PositionComponent,
  ],
})
export class HomeModule {}
