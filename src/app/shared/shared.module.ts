import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { CardComponent } from './components/card/card.component';
import { PageRoutingModule } from '../pages/page-routing.module';

@NgModule({
  declarations: [HeaderComponent, JumbotronComponent, CardComponent],
  imports: [CommonModule, PageRoutingModule],
  exports: [HeaderComponent, JumbotronComponent, CardComponent],
})
export class SharedModule {}
