import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';

@NgModule({
  declarations: [HeaderComponent, JumbotronComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, JumbotronComponent],
})
export class SharedModule {}
