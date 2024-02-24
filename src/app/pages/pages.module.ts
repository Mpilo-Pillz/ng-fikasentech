import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { TrainingComponent } from './training/training.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { FilterPipe } from '../pipes/filter.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    TrainingComponent,
    ProjectsComponent,
    AboutComponent,
    SkillsComponent,
    FilterPipe,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomeComponent],
})
export class PagesModule {}
