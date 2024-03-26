import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Component } from '@angular/core';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class EmailService {

    private user = 'F71zpKqApi0Izm3eQ'

    constructor(){
        emailjs.init(this.user)
    }
    sendEmail(templateId:string, emailParams:any){
        return emailjs.send('service_kr2tbsb','template_lz3jh1d', emailParams ).then((response: EmailJSResponseStatus) => {
            console.log('Email sent:', response);
            return response;
          }, (error) => {
            console.error('Error sending email:', error);
            throw error;
          });
    }
   
}