import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  jumbotronTitle = 'Mpilo TFKN Dlamini';
  jumbotronContent = `I would describe myself as an individual that loves to learn. 
  I have spent a majority of my career learning how to learn more efficiently and effectively and that is my greatest strength. 
  I like to keep an open mind. I started my career in the Quality Assurance (Testing) side of the Software Development Lifecycle (SDLC). 
  In the early parts of my career I was working as a Test Automation Engineer. 
  I switched to work on the Development side of the SDLC currently working as a Full Stack Web Developer. Outside of work hours, I am learning iOS Mobile development. I enjoy learning on Udemy and Pluralsite.`;
  imageUrl =
    'https://lh3.googleusercontent.com/pWGKsbC67uKkiC4xQKOPM4juc2DCUN9oqsBKqaqpRawSTFAeYfPTW-MhTnvFGEUJ3nMJoqsbY3x6rs_uqZb9nts9npWdjgUtI0W3jhDfYd9LuSa7DFj6q9R5apEXi0JyTiuSJqQV=w2400';
  actionText = 'View My CV';
}
