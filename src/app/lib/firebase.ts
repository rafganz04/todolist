import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// isi konfigurasi sesuai dengan konfigurasi firebase kalian
const firebaseConfig = {
    apiKey: "AIzaSyAND_-cRNSUZK811LfmOa6aDZ-VTKVdZ7g",
    authDomain: "todolist-9caf8.firebaseapp.com",
    projectId: "todolist-9caf8",
    storageBucket: "todolist-9caf8.firebasestorage.app",
    messagingSenderId: "366212837566",
    appId: "1:366212837566:web:56ae4ec4ac325b3c972eef",
    measurementId: "G-E6RWMV7ZMJ"
  };

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };