import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { CardComponent } from './components/card/card.component';
import { PageRoutingModule } from '../pages/page-routing.module';
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component';
import { PageHeaderCardComponent } from './components/card/page-header-card/page-header-card.component';
import { SquareCardComponent } from './components/card/square-card/square-card.component';
import { StatsCardComponent } from './components/card/stats-card/stats-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    JumbotronComponent,
    CardComponent,
    SkeletonLoaderComponent,
    PageHeaderCardComponent,
    SquareCardComponent,
    StatsCardComponent,
  ],
  imports: [CommonModule, PageRoutingModule],
  exports: [
    HeaderComponent,
    JumbotronComponent,
    CardComponent,
    PageHeaderCardComponent,
    SquareCardComponent,
    StatsCardComponent,
  ],
})
export class SharedModule {}
