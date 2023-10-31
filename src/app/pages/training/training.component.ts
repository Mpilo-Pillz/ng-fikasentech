import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Training, TrainingType } from './training.model';


@Component({
  selector: 'app-training',
  templateUrl: './training.component.html'
})
export class TrainingComponent implements OnInit {

  completedTraining: Training[]
  TrainingType = TrainingType;
  isLoading: boolean = true;
  numberOfSkeletonCards = new Array(25);

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.trainingService.fetchTraining().subscribe((data) => {
      this.completedTraining = data
      this.isLoading = false 
    })
  }
}
