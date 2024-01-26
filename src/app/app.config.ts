import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"shopbanhang1-e3a38","appId":"1:437949320112:web:9da94144423f87a3bb2475","storageBucket":"shopbanhang1-e3a38.appspot.com","apiKey":"AIzaSyCqdvG2G176sGkzlqKfcjRZDcehQOO2aiQ","authDomain":"shopbanhang1-e3a38.firebaseapp.com","messagingSenderId":"437949320112","measurementId":"G-9TZMV1Q21G"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
