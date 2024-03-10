import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUlPsbF4Zjg6rr_4-e09URdM_xJOyBU5A",
  authDomain: "catalpro-e8a30.firebaseapp.com",
  projectId: "catalpro-e8a30",
  storageBucket: "catalpro-e8a30.appspot.com",
  messagingSenderId: "446658067529",
  appId: "1:446658067529:web:ad8d8f843007489de05398",
  measurementId: "G-5PE4GRRKZ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
