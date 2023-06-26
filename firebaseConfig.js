import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAnbK_jMe0JL3tSAn6_cRsstjZxdRsM8BY',
  authDomain: 'pethsapp-43063.firebaseapp.com',
  databaseURL: 'https://pethsapp-43063.firebaseio.com',
  projectId: 'pethsapp-43063',
  storageBucket: 'pethsapp-43063.appspot.com',
  messagingSenderId: '4109690520',
  appId: '1:4109690520:web:bb6ff55860cae65d04d2ed',
  measurementId: 'G-KW2PR6HLKK',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
