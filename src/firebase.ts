import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';

// Truthlense-ai Firebase project — used for Google Authentication only
const firebaseConfig = {
  apiKey: "AIzaSyDk9n2NjGTaJIp1j2lyVu3BdnZccxHVTBA",
  authDomain: "truthlense-ai.firebaseapp.com",
  projectId: "truthlense-ai",
  storageBucket: "truthlense-ai.firebasestorage.app",
  messagingSenderId: "178931392843",
  appId: "1:178931392843:web:f80e2406d0d1d075e588ce",
  measurementId: "G-J0P624LR8R"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export { signInWithPopup, signOut, onAuthStateChanged };
export type { User };
