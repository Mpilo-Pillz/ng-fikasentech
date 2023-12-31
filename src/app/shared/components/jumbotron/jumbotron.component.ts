import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html'
})
export class JumbotronComponent {
  @Input() jumbotronTitle: string
  @Input() jumbotronContent: string
  @Input() imageUrl: string
  @Input() actionText: string
}
