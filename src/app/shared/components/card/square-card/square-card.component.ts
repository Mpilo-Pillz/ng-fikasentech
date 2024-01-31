import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square-card',
  templateUrl: './square-card.component.html',
  styleUrl: './square-card.component.scss',
})
export class SquareCardComponent {
  @Input() serviceOffered: string;
  @Input() serviceDescription: string;
}
