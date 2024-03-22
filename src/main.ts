import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { Amplify } from 'aws-amplify';
import amplifyconfig  from './amplifyconfiguration.json';

Amplify.configure(amplifyconfig);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

 