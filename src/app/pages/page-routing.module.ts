import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingComponent } from './training/training.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

const trainingRoutes: Routes = [
  { path: 'training', component: TrainingComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(trainingRoutes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
