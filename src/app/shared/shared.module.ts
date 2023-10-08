import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [HeaderComponent, JumbotronComponent, CardComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, JumbotronComponent, CardComponent],
})
export class SharedModule {}
