import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TrainingComponent } from "./training/training.component";

const trainingRoutes: Routes = [
    { path: 'training', component: TrainingComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(trainingRoutes)],
    exports: [RouterModule]
  })
  export class PageRoutingModule { }