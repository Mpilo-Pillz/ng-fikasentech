import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Training, TrainingType } from './training.model';


@Component({
  selector: 'app-training',
  templateUrl: './training.component.html'
})
export class TrainingComponent implements OnInit {
  completedTraining: Training[]
  TrainingType = TrainingType
  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.trainingService.fetchTraining().subscribe((data) => {
      this.completedTraining = data
      console.log("data-->", data);
      
    })
  }
}
