import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey:   'AIzaSyDJ1neeK_fYYSG1Q0pHotA8UxUQg_EKVYs',
  authDomain:    'donationplatform-976e8.firebaseapp.com',
  projectId:     'donationplatform-976e8',
  storageBucket: 'donationplatform-976e8.appspot.com',
  messagingSenderId: '1049668875608',
  appId: '1:1049668875608:android:2e017ebfe68560551aa12d'
};

const app = initializeApp(firebaseConfig);
export default app;