import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { EmailService } from '../_services/email.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private titleService:Title, private emailService: EmailService){
    this.titleService.setTitle('Nabil Alhaffar - Contact');

   
  }
   toName:string  ="Nabil";
   fromName: string = '';
   subject :string = '';
   email :string = '';
  message: string = '';

  public sendEmail() {
    //e.preventDefault();
    
      const templateParams = {
        
        name: this.fromName,
        subject : this.subject,
        email :this.email,
        message: this.message
      };
      this.emailService.sendEmail('template_lz3jh1d', templateParams).then(response => {
        alert("Message sent successfully!")
      })
      .catch(error => {
        alert("error! Please try again.")
      });

   
  }
}
