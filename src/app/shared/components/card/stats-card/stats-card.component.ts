import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
})
export class StatsCardComponent {
  @Input() statsValue: number;
  @Input() statsDescription: string;
}
