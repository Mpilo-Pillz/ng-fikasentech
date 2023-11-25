import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header-card',
  templateUrl: './page-header-card.component.html',
  styleUrls: ['./page-header-card.component.scss']
})
export class PageHeaderCardComponent {
  hasBadge = false

  @Input() cardHeading: string;
  @Input() cardContent: string
  
}
