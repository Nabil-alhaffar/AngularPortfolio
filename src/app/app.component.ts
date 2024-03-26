import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { NavComponent } from "./nav/nav.component";
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonEngine } from '@angular/ssr';
import { CommonModule } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, NavComponent,ModalModule, CollapseModule, FormsModule, CommonModule],
    providers:[]
})
export class AppComponent {
  title = 'AngularPortfolio';
  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_kr2tbsb', 'template_lz3jh1d', e.target as HTMLFormElement, {
        publicKey: 'F71zpKqApi0Izm3eQ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error: any) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
