import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  yearsOfExperience = new Date().getFullYear() - 2013;
}
