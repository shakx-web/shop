import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRIuE0Va8-RNU7X5fJmAuGvBwZuLKGa58",
  authDomain: "fn20-15381.firebaseapp.com",
  projectId: "fn20-15381",
  storageBucket: "fn20-15381.appspot.com",
  messagingSenderId: "527867560080",
  appId: "1:527867560080:web:d8cefd42896e9bc2ae9815",
  measurementId: "G-ZFP8XVP6EE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
