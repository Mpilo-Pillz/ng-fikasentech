import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html'
})
export class TrainingComponent implements OnInit {
  trainingsCompleted: []
  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.trainingService.fetchTraining().subscribe((data) => {
      console.log("data-->", data);
      
    })
  }
}
